// ================================================================
// firebase-sync.js — Cloud-Sync für Kalkulations-App BAB
// Selbes Firebase-Projekt wie Arbeitszeit-App (arbeitszeit-app-101d8)
// Daten werden unter kalkulation/projekt1 gespeichert.
// Einbinden: nach app.js in index.html
// ================================================================

(function () {
  'use strict';

  // ── Firebase-Konfiguration ──────────────────────────────────────
  var FIREBASE_CONFIG = {
    apiKey:            "AIzaSyBwYkqEUxnouPBW1rm8aZg05oB_C451_3s",
    authDomain:        "arbeitszeit-app-101d8.firebaseapp.com",
    projectId:         "arbeitszeit-app-101d8",
    storageBucket:     "arbeitszeit-app-101d8.firebasestorage.app",
    messagingSenderId: "142516337313",
    appId:             "1:142516337313:web:659b7c10a9eba75be80ee0"
  };
  // Firestore-Pfad für diese App (getrennt von der Arbeitszeit-App)
  var COLLECTION = 'kalkulation';
  var DOC_ID     = 'projekt1';

  // ── Laufzeit-Variablen ─────────────────────────────────────────
  var fireReady      = false;
  var docRef         = null;
  var saveLock       = 0;     // Nach lokalem Speichern 30 Sek. Snapshots ignorieren
  var isApplyingCloud= false; // Verhindert Rückkopplungsschleifen

  // ── Firebase initialisieren ────────────────────────────────────
  function init() {
    try {
      var app = firebase.apps.length
        ? firebase.app()
        : firebase.initializeApp(FIREBASE_CONFIG);
      var db = firebase.firestore();
      docRef = db.collection(COLLECTION).doc(DOC_ID);
      fireReady = true;
      setStatus('⏳ Cloud wird verbunden…', 'blue');

      docRef.onSnapshot(function (snap) {
        // Nach lokalem Speichern: Snapshot ignorieren (verhindert Überschreiben)
        if (Date.now() < saveLock) return;

        if (snap.exists) {
          applyCloudData(snap.data());
        } else {
          // Noch kein Cloud-Dokument → lokalen Stand hochladen
          pushToCloud();
        }
      }, function (err) {
        console.warn('[KalkSync] Firestore:', err.code, err.message);
        setStatus('⚠ Cloud nicht verfügbar', 'amber');
      });

    } catch (e) {
      console.warn('[KalkSync] Firebase-Init:', e);
    }
  }

  // ── Cloud-Daten übernehmen ─────────────────────────────────────
  function applyCloudData(d) {
    if (!d || !d.v) return;

    // Zeitstempel-Vergleich: wenn lokale Daten deutlich neuer sind →
    // nicht übernehmen, sondern stattdessen lokal → Cloud pushen
    try {
      var localStr = localStorage.getItem('kalkAppData_v3');
      if (localStr) {
        var local     = JSON.parse(localStr);
        var localTime = local.savedAt   ? new Date(local.savedAt).getTime()  : 0;
        var cloudTime = d.savedAt ? new Date(d.savedAt).getTime() : 0;
        if (localTime > cloudTime + 5000) {
          pushToCloud();
          return;
        }
      }
    } catch (e) {}

    isApplyingCloud = true;
    try {
      if (Array.isArray(d.employees))    employees     = d.employees;
      if (Array.isArray(d.costRows))     costRows      = d.costRows;
      if (Array.isArray(d.calcPositions))calcPositions = d.calcPositions;
      if (d.inputs && typeof setInputs === 'function') setInputs(d.inputs);

      if (typeof renderEmployees     === 'function') renderEmployees();
      if (typeof renderCostRows      === 'function') renderCostRows();
      if (typeof renderCalcPositions === 'function') renderCalcPositions();
      if (typeof renderKFESearch     === 'function') renderKFESearch();
      if (typeof calcAll             === 'function') calcAll();

      // Lokalen Cache (localStorage) aktualisieren
      try { localStorage.setItem('kalkAppData_v3', JSON.stringify(d)); } catch (e) {}

      var ts = d.savedAt ? new Date(d.savedAt).toLocaleTimeString('de-DE') : '';
      setStatus('☁ Cloud-Sync aktiv · ' + ts, 'green');
    } catch (e) {
      console.warn('[KalkSync] applyCloudData Fehler:', e);
    }
    isApplyingCloud = false;
  }

  // ── Aktuellen Stand zur Cloud hochladen ───────────────────────
  function pushToCloud() {
    if (!fireReady || !docRef || isApplyingCloud) return;
    try {
      // kfeCustomDb wird NICHT synced (kann sehr groß sein; liegt lokal vor)
      var data = {
        v:             3,
        employees:     employees,
        costRows:      costRows,
        calcPositions: calcPositions,
        inputs:        (typeof getInputs === 'function') ? getInputs() : {},
        savedAt:       new Date().toISOString()
      };
      docRef.set(data)
        .then(function () {
          setStatus('☁ Gespeichert · ' + new Date().toLocaleTimeString('de-DE'), 'green');
        })
        .catch(function (e) {
          console.warn('[KalkSync] Cloud-Speichern:', e.code, e.message);
          setStatus('⚠ Cloud-Speichern fehlgeschlagen', 'amber');
        });
      // Auch lokal cachen
      try { localStorage.setItem('kalkAppData_v3', JSON.stringify(data)); } catch (e) {}
    } catch (e) {
      console.warn('[KalkSync] pushToCloud:', e);
    }
  }

  // ── Status-Anzeige im bestehenden saveStatus-Element ─────────
  function setStatus(msg, color) {
    var el = document.getElementById('saveStatus');
    if (!el) return;
    var c = {
      green: ['var(--green-bg)', 'var(--green-border)', 'var(--green)'],
      amber: ['var(--amber-bg)', 'var(--amber-border)', 'var(--amber)'],
      blue:  ['var(--blue-bg)',  'var(--blue-border)',  'var(--blue)'],
      red:   ['var(--red-bg)',   'var(--red-border)',   'var(--red)']
    }[color] || ['var(--green-bg)', 'var(--green-border)', 'var(--green)'];
    el.textContent  = msg;
    el.style.background  = c[0];
    el.style.borderColor = c[1];
    el.style.color       = c[2];
    el.style.display     = 'inline';
  }

  // ── saveData() erweitern: zusätzlich zur Cloud speichern ──────
  function patchSaveData() {
    if (typeof window.saveData !== 'function') return;
    var orig = window.saveData;
    window.saveData = function () {
      orig();
      saveLock = Date.now() + 30000; // 30 Sek. Snapshots ignorieren
      pushToCloud();
    };
  }

  // ── autoSave() erweitern: Cloud-Sync nach jeder Berechnung ───
  function patchAutoSave() {
    if (typeof window.autoSave !== 'function') return;
    var orig = window.autoSave;
    window.autoSave = function () {
      orig(); // Original: IndexedDB-Debounce (2 Sek.)
      // Cloud-Sync nur bei echten Benutzeraktionen (nicht beim Anwenden von Cloud-Daten)
      if (!isApplyingCloud) {
        saveLock = Date.now() + 30000;
        clearTimeout(window._kalkCloudTimer);
        window._kalkCloudTimer = setTimeout(pushToCloud, 2500);
      }
    };
  }

  // ── Start ─────────────────────────────────────────────────────
  function start() {
    patchSaveData();
    patchAutoSave();
    init();
  }

  if (document.readyState === 'complete') {
    setTimeout(start, 400); // kurz warten bis app.js vollständig initialisiert hat
  } else {
    window.addEventListener('load', function () { setTimeout(start, 400); });
  }

})();
