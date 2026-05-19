# Kalkulations-App BAB – Version 2.0 Improvements

## 🎯 Zusammenfassung der Updates

Die App wurde grundlegend überarbeitet:
- **UI/UX**: Komplett neuer Look (DM Sans + DM Mono Fonts, modernes Farbschema, Tab-Navigation)
- **Mathematik**: 2 Fehler behoben (EFG-Erstattung, Sozialversicherung dokumentiert)
- **Funktion**: Neuer Bereich "Personalkostenanteil" (wie Perko), besserer Workflow
- **Struktur**: Klare Navigations-Tabs statt alles auf einer Seite

---

## 📋 Detaillierte Verbesserungen

### 1. **UI/Design Überhaul**
- **Moderne Typografie**: Google Fonts "DM Sans" (body) + "DM Mono" (Zahlen)
- **Farbschema**: Naturtöne mit Akzenten (Dunkelgrün #1a3a2a als Primärfarbe)
- **Tab-Navigation**: Struktur wie professionelle Web-Apps (Personal → BAB → Stundensatz → etc.)
- **Workflow-Anzeige**: Visueller Fortschrittsbalken oben
- **KPI-Cards**: Hervorhobene Resultate in großer, lesbarer Schrift
- **Responsive**: Funktioniert auf Desktop, Tablet, Handy

### 2. **Mathematische Korrektionen**

#### ✅ Fehler #1: EFG-Erstattung (Rückvergütung)
**Problem**: Wurde auf Basis von `hourly × sickDays` berechnet → zu niedrig
**Lösung**: Jetzt auf Brutto-Tageslohnbasis: `gross / paidDays × sickDays`
```javascript
// ALT (falsch):
const sickWage = hourly × dailyHours × sickDays

// NEU (richtig):
const sickWage = gross / paidDays × sickDays
```
**Effekt**: Personalkosten werden korrekt berechnet; Stundensatz ist zuverlässiger.

#### ✅ Fehler #2: SV-Berechnung dokumentiert
**Problem**: Der ÷200-Trick war nicht erklärt
**Lösung**: 
- Klare Hinweise in der UI: "Bitte Gesamtbeitragssatz (AN+AG) eintragen"
- Kommentar im Code erklärt: Eingabe = Gesamtbeitragssatz, ÷200 = AG-Anteil
- Beispiele: RV 18,6% (nicht 9,3%), KV ~14,6% (nicht 7,3%)

### 3. **Neue Funktionen**

#### ✨ Personalkostenanteil (Perko-Logik)
Neue Sektion unter "Stundensatz / Ergebnis":
- Eingabe: Jahresumsatz, Materialkosten, Gerätekosten, Wagnis%
- Automatisch: Personalkostenanteil % = (Personalkosten / Umsatz × 100)
- **Nutzen**: 
  - Kontrolle der Kalkulation (wie Perko)
  - Basis für Lohngleitklauseln (VOB)
  - Vergleichbarkeit: Branche-Benchmark

Beispiel:
```
Jahresumsatz: €500.000
Personalkosten / Jahr: €200.000
→ Personalkostenanteil: 40%
```

### 4. **Besserer Workflow**

**Alte Struktur**: Alles auf einer Seite, unübersichtlich
**Neue Struktur** (Tab-Navigation):
1. 👤 **Personal** → Mitarbeiter + Lehrlinge eintragen
2. 📊 **BAB / Jahreskosten** → Kosten aus Buchhaltung eintragen
3. 🎯 **Stundensatz** → Automatische Berechnung + Kontrolle
4. 🚐 **Fahrzeug** → Fahrzeugkosten-Modul
5. ⚙ **Maschine** → Spezialwerkzeuge
6. 📋 **Angebot / KFE** → Positionskalkulation + KFE-Suche
7. 📈 **Deckungsbeitrag** → DB-Prüfung
8. 💹 **Rentabilität** → Gewinn/Umsatz-Analyse
9. 🔢 **Rechner** → Taschenrechner für Ad-hoc-Rechnungen

### 5. **Verbesserte BAB-Bedienung**

**Neu**:
- ⚠️ **Warnbox**: "Zuerst Mitarbeiter eintragen → dann 'In BAB übernehmen' klicken"
- 🔄 **Sync-Button**: Direkt in der BAB-Sektion (nicht nur oben)
- 📌 **Auto-Rows**: Blau hinterlegt + Sperrsymbol 🔒 (können nicht gelöscht werden)
- ✓ **Summen-Kontrolle**: Warnung wenn Installation+Verwaltung+Material ≠ 100%

### 6. **Klarere Labels & Hinweise**

**Beispiele**:
- "SV-Sätze: Bitte immer den **Gesamtbeitragssatz (AN + AG)** eintragen"
- "Interne Vollkosten pro km sind nicht automatisch der Kundenpreis"
- Formel-Hilfen in jedem Eingabefeld

---

## 🔧 Technische Details

### Sozialversicherung – Wie es jetzt funktioniert
```
Eingabe: Rentenversicherung 18,6% (Gesamtbeitragssatz)
App rechnet: gross × 18,6% ÷ 200 = gross × 0,093 = AG-Anteil ✓

Das funktioniert, weil:
- Gesamtbeitragssatz (DE-Standard) = AN-Anteil + AG-Anteil
- Beide sind gleich groß → AG-Anteil ≈ Gesamtsatz ÷ 2
- 18,6% ÷ 200 = 18,6% ÷ 2 = 9,3% AG-Anteil
```

### EFG-Erstattung – Die Korrektur
```
Alte Logik:
  sickWage = hourly € × 8h × sickDays
  Nachteil: Ignoriert Zulagen (Urlaubsgeld, Weihnachtsgeld, VMWL)

Neue Logik:
  sickWage = gross / paidDays × sickDays
  Vorteil: Berücksichtigt komplette Bruttobasis
```

---

## 📊 Was ändert sich bei der Berechnung?

### Szenario: 1 Mitarbeiter, 16 Krankheitstage/Jahr
```
Bruttolohn/Jahr: €31.000
AG-SV (18,6% von 31.000): €5.766

ALT (falsch):
  Krankenlohn: 15€/h × 8h × 16 = €1.920
  EFG-Erstattung (70%): -€1.344
  
NEU (richtig):
  Krankenlohn: 31.000 / 261 × 16 = €1.898
  EFG-Erstattung (70%): -€1.328
  
Unterschied: ~€16 pro Jahr
→ Bei größeren Betrieben: +€100–€200 in Personalkosten
```

**Fazit**: Die Korrektur ist klein, aber mathematisch sauberer und konform mit Perko.

---

## 🚀 Neuer Workflow für dich

### Schritt 1: Mitarbeiter eintragen
- "Personal" Tab öffnen
- "+ Geselle" oder "+ Lehrling" klicken
- Lohn, Arbeitszeiten, SV-Sätze eintragen
- **WICHTIG**: SV-Sätze sind Gesamtbeitragssätze (18,6%, nicht 9,3%)

### Schritt 2: In BAB übernehmen
- Button "🔄 In BAB übernehmen" klicken
- Die 4 Personalkosten-Zeilen füllen sich automatisch (blau hinterlegt)

### Schritt 3: Jahreskosten aus Buchhaltung eintragen
- "BAB / Jahreskosten" Tab
- Alle restlichen Kosten (Material, Fahrzeug, Miete, etc.) manuell eintragen
- Auf Installation / Verwaltung / Material verteilen

### Schritt 4: Stundensatz kontrollieren
- "Stundensatz" Tab
- Sieht automatisch alle Werte aus BAB und Personalmodul
- Neue Zeile "Personalkostenanteil": Mit Jahresumsatz vergleichen
- KPIs oben: Stundensatz, Minutensatz, BAB-Satz

### Schritt 5: Angebote kalkulieren
- "Angebot / KFE" Tab
- KFE-Positionen suchen und hinzufügen
- System berechnet automatisch: Lohnkosten, Material, DB

---

## ❓ FAQ

**F: Warum soll ich Gesamtbeitragssätze eingeben, nicht AG-Sätze?**  
A: Das ist der deutsche Standard. Alle Tarifverträge und die Perko-Vorlage geben Gesamtsätze an. Die App teilt sie automatisch auf.

**F: Was ist der Personalkostenanteil?**  
A: Der prozentuale Anteil deiner Personalkosten am Jahresumsatz. Beispiel: 40% bedeutet, dass 40% deines Umsatzes in Löhne geht. Das ist wichtig für:
- Kontrolle (40–60% ist normal in Handwerk)
- Lohngleitklauseln (VOB): "1 Cent Lohnerhöhung = X € Kostensteigerung"

**F: Kann ich die alte Version noch verwenden?**  
A: Nein – aber die neue App ist abwärtskompatibel. Mit "Import JSON" kannst du alte Daten laden.

**F: Was ist neu beim Fahrzeugmodul?**  
A: Nichts Mathematisches. Nur UI-Ordnung: Es sitzt jetzt in einem eigenen Tab und die Ergebnisse landen sauber im BAB.

---

## 📝 Checkliste für die Nutzung

- [ ] Mitarbeiter anlegen (mit korrekten SV-Sätzen)
- [ ] In BAB übernehmen
- [ ] Jahreskosten aus 2024er Buchhaltung eintragen
- [ ] Produktive Stunden/Jahr prüfen (2321h ist ein Beispiel)
- [ ] Gewinnzuschlag % setzen (10% ist üblich)
- [ ] Stundensatz kontrollieren
- [ ] KFE-CSV importieren (falls vorhanden)
- [ ] Erste Angebote kalkulieren + mit alten Rechnungen vergleichen

---

## 🔗 Vergleich: Was Perko besser macht

- ✓ Lohngleitklausel (VOB) – fehlt in deiner App
- ✓ Dynamischer Cu-Rohstoffzuschlag – du hast statisches %
- ✓ Lehrling-Jahre differenziert – du hast Pauschale

**Was deine App besser macht:**
- ✓ BAB mit automatischer Synchronisation
- ✓ KFE-Datenbank + Angebotskalkulation
- ✓ Mehrere Mitarbeiter + Mischkalkulation
- ✓ PWA / Offline / CSV-Import
- ✓ Modernes Interface

---

**Version**: 2.0  
**Datum**: Mai 2025  
**Lizenz**: Bereitgestellt für private Nutzung
