# Unternehmens-Kalkulation – Änderungen V2.1

## Neu
- Geschäftsführer-Dashboard als Startseite
- KPIs: Verrechnungssatz, Selbstkosten, produktive Stunden, Personalkosten, Kostenbasis, Zielumsatz/Monat, Angebots-DB, Gewinnzuschlag
- Automatische Plausibilitätsprüfung mit Status 0–100
- Warnungen bei unvollständiger BAB-Verteilung, offenen „prüfen“-Positionen, stark abweichenden produktiven Stunden, negativem/zu niedrigem Gewinnzuschlag, Materialfaktor < 1 und negativem Angebots-DB
- Schnellzugriffe vom Dashboard zu Personal, BAB, Angebot und Backup

## Bereinigt
- Doppelte KI-Funktionen aus `index.html` entfernt; KI-Logik liegt nur noch in `app.js`
- GitHub-Pages-kompatible direkte Anthropic-Anfrage vereinheitlicht
- Hinweis zum API-Key korrigiert: Key wird lokal gespeichert, bei KI-Anfragen aber an Anthropic übertragen
- Einstellungen/KI wieder innerhalb des zentralen Seiten-Containers
- Fehlerhafte CSS-Reste entfernt
- Cache-/App-Version auf V22 angehoben

## Sicherheitshinweise
- Der derzeitige lokale Browser-Login ist kein echter Zugriffsschutz einer öffentlichen GitHub-Pages-Seite.
- Firebase Cloud-Sync nutzt aktuell ein gemeinsames Dokument `kalkulation/projekt1`. Für Mehrbenutzerbetrieb sollte Firebase Authentication + benutzerspezifischer Dokumentpfad ergänzt werden.
- Ein API-Key in einer statischen Browser-App kann nicht so sicher geschützt werden wie in einem serverseitigen Backend.
