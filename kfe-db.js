// KFE-Datenbank: Leitungen, Rohre, Installationen für Elektroinstallation
// Format: {kfe, leistung, text, unit, minutes, material_ek}

window.KFE_CABLE_DB = [

/* ===== MANTELLEITUNG VERLEGEN (NYM-J / NYM) ===== */
{kfe:"01.01.01", leistung:"Mantelleitung einziehen", text:"NYM-J 1x1,5 mm²", unit:"m", minutes:1.2, material_ek:0},
{kfe:"01.01.02", leistung:"Mantelleitung einziehen", text:"NYM-J 1x2,5 mm²", unit:"m", minutes:1.5, material_ek:0},
{kfe:"01.01.03", leistung:"Mantelleitung einziehen", text:"NYM-J 3x1,5 mm²", unit:"m", minutes:2.0, material_ek:0},
{kfe:"01.01.04", leistung:"Mantelleitung einziehen", text:"NYM-J 3x2,5 mm²", unit:"m", minutes:2.5, material_ek:0},
{kfe:"01.01.05", leistung:"Mantelleitung einziehen", text:"NYM-J 4x2,5 mm²", unit:"m", minutes:2.8, material_ek:0},
{kfe:"01.01.06", leistung:"Mantelleitung einziehen", text:"NYM-J 5x2,5 mm²", unit:"m", minutes:3.0, material_ek:0},
{kfe:"01.01.07", leistung:"Mantelleitung einziehen", text:"NYM-J 3x4 mm²", unit:"m", minutes:3.2, material_ek:0},
{kfe:"01.01.08", leistung:"Mantelleitung einziehen", text:"NYM-J 4x4 mm²", unit:"m", minutes:3.5, material_ek:0},
{kfe:"01.01.09", leistung:"Mantelleitung einziehen", text:"NYM-J 5x4 mm²", unit:"m", minutes:3.8, material_ek:0},
{kfe:"01.01.10", leistung:"Mantelleitung einziehen", text:"NYM-J 3x6 mm²", unit:"m", minutes:4.0, material_ek:0},
{kfe:"01.01.11", leistung:"Mantelleitung einziehen", text:"NYM-J 4x6 mm²", unit:"m", minutes:4.5, material_ek:0},
{kfe:"01.01.12", leistung:"Mantelleitung einziehen", text:"NYM-J 5x6 mm²", unit:"m", minutes:5.0, material_ek:0},
{kfe:"01.01.13", leistung:"Mantelleitung einziehen", text:"NYM-J 3x10 mm²", unit:"m", minutes:5.5, material_ek:0},
{kfe:"01.01.14", leistung:"Mantelleitung einziehen", text:"NYM-J 4x10 mm²", unit:"m", minutes:6.0, material_ek:0},
{kfe:"01.01.15", leistung:"Mantelleitung einziehen", text:"NYM-J 5x10 mm²", unit:"m", minutes:6.5, material_ek:0},
{kfe:"01.01.16", leistung:"Mantelleitung einziehen", text:"NYM-J 3x16 mm²", unit:"m", minutes:7.0, material_ek:0},
{kfe:"01.01.17", leistung:"Mantelleitung einziehen", text:"NYM-J 5x16 mm²", unit:"m", minutes:8.0, material_ek:0},

/* ===== ROHRE / LEERROHRE ===== */
{kfe:"01.02.01", leistung:"Kunststoffrohr verlegen", text:"M16 (grau, flexibel)", unit:"m", minutes:0.8, material_ek:0},
{kfe:"01.02.02", leistung:"Kunststoffrohr verlegen", text:"M20 (grau, flexibel)", unit:"m", minutes:1.0, material_ek:0},
{kfe:"01.02.03", leistung:"Kunststoffrohr verlegen", text:"M25 (grau, flexibel)", unit:"m", minutes:1.3, material_ek:0},
{kfe:"01.02.04", leistung:"Stahlrohr verlegen", text:"3/4\" Metallrohr", unit:"m", minutes:2.5, material_ek:0},
{kfe:"01.02.05", leistung:"Stahlrohr verlegen", text:"1\" Metallrohr", unit:"m", minutes:3.0, material_ek:0},

/* ===== DATENLEITUNGEN / CAT ===== */
{kfe:"01.65.01", leistung:"Datenleitung einziehen", text:"Cat.5e (verdrilltes Paar)", unit:"m", minutes:1.0, material_ek:0},
{kfe:"01.65.02", leistung:"Datenleitung einziehen", text:"Cat.6 (verdrilltes Paar)", unit:"m", minutes:1.2, material_ek:0},
{kfe:"01.65.03", leistung:"Datenleitung einziehen", text:"Cat.7 (verdrilltes Paar)", unit:"m", minutes:1.5, material_ek:0},
{kfe:"01.65.04", leistung:"Datenleitung einziehen", text:"Cat.8 / Cat.7A", unit:"m", minutes:1.8, material_ek:0},

/* ===== DOSEN & RAHMEN ===== */
{kfe:"02.01.01", leistung:"Schalterdose einbauen", text:"Einzeldose Kunststoff", unit:"Stk", minutes:8, material_ek:0},
{kfe:"02.01.02", leistung:"Schalterdose einbauen", text:"Zweifachdose Kunststoff", unit:"Stk", minutes:12, material_ek:0},
{kfe:"02.01.03", leistung:"Schalterdose einbauen", text:"Dreifachdose Kunststoff", unit:"Stk", minutes:16, material_ek:0},
{kfe:"02.01.04", leistung:"Schalterdose einbauen", text:"Dreifachdose Kunststoff (waagerecht)", unit:"Stk", minutes:14, material_ek:0},
{kfe:"02.01.05", leistung:"Unterputzdose einbauen", text:"Unterputzdose 60 mm", unit:"Stk", minutes:15, material_ek:0},
{kfe:"02.01.06", leistung:"Unterputzdose einbauen", text:"Unterputzdose 80 mm", unit:"Stk", minutes:18, material_ek:0},
{kfe:"02.02.01", leistung:"Verbindungsdose montieren", text:"Kleine Verbindungsdose", unit:"Stk", minutes:10, material_ek:0},
{kfe:"02.02.02", leistung:"Verbindungsdose montieren", text:"Große Verbindungsdose", unit:"Stk", minutes:15, material_ek:0},

/* ===== SCHALTER & STECKDOSEN MONTIEREN ===== */
{kfe:"03.01.01", leistung:"Schalter anschließen", text:"Einfacher Wechselschalter 250V 10A", unit:"Stk", minutes:12, material_ek:0},
{kfe:"03.01.02", leistung:"Schalter anschließen", text:"Wechselschalter Doppel / Kreuz", unit:"Stk", minutes:15, material_ek:0},
{kfe:"03.01.03", leistung:"Schalter anschließen", text:"Bewegungsmelder / Sensor-Schalter", unit:"Stk", minutes:20, material_ek:0},
{kfe:"03.02.01", leistung:"Steckdose anschließen", text:"Einfache Steckdose 230V 16A", unit:"Stk", minutes:10, material_ek:0},
{kfe:"03.02.02", leistung:"Steckdose anschließen", text:"Doppelsteckdose 230V", unit:"Stk", minutes:15, material_ek:0},
{kfe:"03.02.03", leistung:"Steckdose anschließen", text:"Starkstrom-Steckdose 400V 16A", unit:"Stk", minutes:20, material_ek:0},
{kfe:"03.02.04", leistung:"Steckdose anschließen", text:"Starkstrom-Steckdose 400V 32A", unit:"Stk", minutes:25, material_ek:0},
{kfe:"03.03.01", leistung:"Datensteckdose montieren", text:"RJ45 Cat.6 Steckdose", unit:"Stk", minutes:18, material_ek:0},
{kfe:"03.03.02", leistung:"Datensteckdose montieren", text:"RJ45 Cat.7 Steckdose", unit:"Stk", minutes:22, material_ek:0},

/* ===== LEUCHTEN / LAMPEN ===== */
{kfe:"04.01.01", leistung:"Deckenleuchte montieren", text:"Einfache Deckenleuchte (Aufputz)", unit:"Stk", minutes:15, material_ek:0},
{kfe:"04.01.02", leistung:"Deckenleuchte montieren", text:"Deckenleuchte mit Baldachin", unit:"Stk", minutes:20, material_ek:0},
{kfe:"04.01.03", leistung:"Deckenleuchte montieren", text:"Einbauleuchte / Downlight", unit:"Stk", minutes:18, material_ek:0},
{kfe:"04.02.01", leistung:"Wandleuchte montieren", text:"Wandleuchte (Aufputz)", unit:"Stk", minutes:12, material_ek:0},
{kfe:"04.02.02", leistung:"Wandleuchte montieren", text:"Spiegeleuchte / Bad", unit:"Stk", minutes:15, material_ek:0},
{kfe:"04.03.01", leistung:"Notleuchte montieren", text:"Notleuchte / Rettungszeichenleuchte", unit:"Stk", minutes:20, material_ek:0},

/* ===== SCHUTZSCHALTER / SICHERUNGEN ===== */
{kfe:"05.01.01", leistung:"LS-Schalter einbauen", text:"LS 1-polig 10A", unit:"Stk", minutes:8, material_ek:0},
{kfe:"05.01.02", leistung:"LS-Schalter einbauen", text:"LS 1-polig 16A", unit:"Stk", minutes:8, material_ek:0},
{kfe:"05.01.03", leistung:"LS-Schalter einbauen", text:"LS 3-polig 16A", unit:"Stk", minutes:10, material_ek:0},
{kfe:"05.01.04", leistung:"LS-Schalter einbauen", text:"LS 3-polig 20A", unit:"Stk", minutes:10, material_ek:0},
{kfe:"05.02.01", leistung:"FI-Schalter einbauen", text:"FI-Schalter 2-polig 30mA", unit:"Stk", minutes:12, material_ek:0},
{kfe:"05.02.02", leistung:"FI-Schalter einbauen", text:"FI-Schalter 4-polig 30mA", unit:"Stk", minutes:15, material_ek:0},
{kfe:"05.03.01", leistung:"Fehlerstrom-Modul einbauen", text:"RCD 2-polig 30mA Typ A", unit:"Stk", minutes:10, material_ek:0},

/* ===== VERTEILER / SCHRÄNKE ===== */
{kfe:"06.01.01", leistung:"Unterverteiler montieren", text:"Unterverteiler 1-reihig", unit:"Stk", minutes:25, material_ek:0},
{kfe:"06.01.02", leistung:"Unterverteiler montieren", text:"Unterverteiler 2-reihig", unit:"Stk", minutes:35, material_ek:0},
{kfe:"06.01.03", leistung:"Unterverteiler montieren", text:"Wandverteiler Kunststoff", unit:"Stk", minutes:30, material_ek:0},
{kfe:"06.02.01", leistung:"Sicherungskasten verkabeln", text:"Verdrahtung je Modul/LS", unit:"Stk", minutes:5, material_ek:0},

/* ===== HEIZUNGSANSCHLÜSSE ===== */
{kfe:"07.01.01", leistung:"Elektro-Heizelement anschließen", text:"Heizelement 230V 3 kW", unit:"Stk", minutes:20, material_ek:0},
{kfe:"07.01.02", leistung:"Elektro-Heizelement anschließen", text:"Heizelement 400V 6 kW", unit:"Stk", minutes:25, material_ek:0},
{kfe:"07.02.01", leistung:"Temperaturfühler montieren", text:"Oberflächenfühler / Immersionsfühler", unit:"Stk", minutes:15, material_ek:0},

/* ===== SPRECHANLAGE / TÜRKLINGEL ===== */
{kfe:"08.01.01", leistung:"Klingeltaster installieren", text:"Oberflächenklingel", unit:"Stk", minutes:10, material_ek:0},
{kfe:"08.01.02", leistung:"Türklingel montieren", text:"Unterputz-Klingel / Relais", unit:"Stk", minutes:12, material_ek:0},
{kfe:"08.02.01", leistung:"Sprechanlage einbauen", text:"Video-Sprechanlage (Außenstation)", unit:"Stk", minutes:30, material_ek:0},
{kfe:"08.02.02", leistung:"Sprechanlage einbauen", text:"Video-Sprechanlage (Innenstation)", unit:"Stk", minutes:25, material_ek:0},

/* ===== BRANDSCHUTZ / RAUCHMELDER ===== */
{kfe:"09.01.01", leistung:"Rauchmelder montieren", text:"Funk-Rauchmelder", unit:"Stk", minutes:15, material_ek:0},
{kfe:"09.01.02", leistung:"Rauchmelder montieren", text:"vernetzte Rauchmelder (verdrahtet)", unit:"Stk", minutes:12, material_ek:0},
{kfe:"09.02.01", leistung:"Rauchwarnanlage installieren", text:"zentrale Rauchwarnanlage", unit:"Stk", minutes:60, material_ek:0},

/* ===== BLITZSCHUTZ ===== */
{kfe:"10.01.01", leistung:"Blitzschutzanlage", text:"Blitzableiter / Fangstange montieren", unit:"m", minutes:5, material_ek:0},
{kfe:"10.01.02", leistung:"Blitzschutzanlage", text:"Erdungsleitung verlegen", unit:"m", minutes:2, material_ek:0},
{kfe:"10.02.01", leistung:"Überspannungsschutz montieren", text:"Überspannungsschutz-Modul LS-Schrank", unit:"Stk", minutes:12, material_ek:0},

/* ===== LEITUNGSKANÄLE / KABELRINNEN ===== */
{kfe:"11.01.01", leistung:"Leitungskanal anbringen", text:"PVC-Kanal 30x30 mm", unit:"m", minutes:2.0, material_ek:0},
{kfe:"11.01.02", leistung:"Leitungskanal anbringen", text:"PVC-Kanal 40x40 mm", unit:"m", minutes:2.5, material_ek:0},
{kfe:"11.01.03", leistung:"Leitungskanal anbringen", text:"PVC-Kanal 60x40 mm", unit:"m", minutes:3.0, material_ek:0},
{kfe:"11.02.01", leistung:"Kabelrinne montieren", text:"Stahlkabelrinne 50 mm", unit:"m", minutes:3.5, material_ek:0},
{kfe:"11.02.02", leistung:"Kabelrinne montieren", text:"Stahlkabelrinne 100 mm", unit:"m", minutes:4.5, material_ek:0},
{kfe:"11.03.01", leistung:"Kabelpritschen montieren", text:"Stahlpritsche 50x50 mm", unit:"m", minutes:3.0, material_ek:0},

/* ===== LEERROHR-SYSTEME ===== */
{kfe:"12.01.01", leistung:"Leerrohr System Montage", text:"Ø 16 mm PVC", unit:"m", minutes:1.0, material_ek:0},
{kfe:"12.01.02", leistung:"Leerrohr System Montage", text:"Ø 20 mm PVC", unit:"m", minutes:1.3, material_ek:0},
{kfe:"12.01.03", leistung:"Leerrohr System Montage", text:"Ø 25 mm PVC", unit:"m", minutes:1.6, material_ek:0},
{kfe:"12.02.01", leistung:"Leerrohr Einsatz Kabel", text:"Kabel in PVC-Rohr einziehen", unit:"m", minutes:0.5, material_ek:0},

/* ===== BELEUCHTUNGSANLAGE KOMPLETT ===== */
{kfe:"13.01.01", leistung:"Beleuchtungsstromkreis komplett", text:"Stromkreis mit LS, Draht u. Schalter", unit:"Stk", minutes:45, material_ek:0},
{kfe:"13.01.02", leistung:"Beleuchtungsstromkreis komplett", text:"Stromkreis mit FI + Unterputzleuchte", unit:"Stk", minutes:55, material_ek:0},

/* ===== STECKDOSENSTROMKREISE ===== */
{kfe:"13.02.01", leistung:"Steckdosen-Stromkreis komplett", text:"Stromkreis 4er Steckdosenleiste", unit:"Stk", minutes:50, material_ek:0},
{kfe:"13.02.02", leistung:"Steckdosen-Stromkreis komplett", text:"Stromkreis Küche (4 Steckdosen)", unit:"Stk", minutes:60, material_ek:0},

/* ===== SPEZIAL-ARBEITEN ===== */
{kfe:"14.01.01", leistung:"Kernbohrung", text:"Kernbohrung Ø 40 mm (Stahlbeton)", unit:"Stk", minutes:25, material_ek:0},
{kfe:"14.01.02", leistung:"Kernbohrung", text:"Kernbohrung Ø 50 mm (Stahlbeton)", unit:"Stk", minutes:35, material_ek:0},
{kfe:"14.01.03", leistung:"Kernbohrung", text:"Kernbohrung Ø 65 mm (Stahlbeton)", unit:"Stk", minutes:50, material_ek:0},
{kfe:"14.02.01", leistung:"Meißelarbeit", text:"Meißelarbeit Mauerwerk pro 10 cm", unit:"Stk", minutes:8, material_ek:0},
{kfe:"14.03.01", leistung:"Oberflächenbearbeitung", text:"Anputzen/Verspachtelung nach Kanal/Rohr", unit:"m", minutes:3, material_ek:0},

/* ===== WARTUNG / INSTANDHALTUNG ===== */
{kfe:"15.01.01", leistung:"Wartung Stromkreis", text:"Überprüfung Sicherungen / LS-Schalter", unit:"Stk", minutes:15, material_ek:0},
{kfe:"15.02.01", leistung:"Reparatur Doppelsteckdose", text:"Austausch beschädigte Steckdose", unit:"Stk", minutes:20, material_ek:0},
{kfe:"15.03.01", leistung:"Reparatur Schalter", text:"Austausch beschädigter Schalter", unit:"Stk", minutes:18, material_ek:0},

];
