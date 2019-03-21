# gitflow-learning

## Ziele
Erstellen einer Einkaufsliste mit html, js, gitflow.
Abläufe mit git gitflow kennelernen

## Aufgaben

### git clone
1. Übungsprojekt clonen ```git clone```

### git init [master]
1. Einen neuen Ordner ausserhalb des Projekts erstellen.
2. Ein neues lokales Repository erzeugen. ```git init```
3. README.md und .gitignore in den neuen Projektordner kopieren
4. Projekt committen. ```git commit master -m "Subject"```

### Form [feature/form]
Branch Master angewählt ```git checkout master```

1. Branch Develop erstellen ```git checkout -b develop```
2. Branch feature/form erstellen ```git checkout -b feature/form```
3. src Ordner in das Projekt kopieren und committen ````git commit feature/form -m "Subject"```
4. Änderungen committen ```git commit feature/form -m "Subject"```
5. Aus 2-feature-form das Template nach Input Form im index.html kopieren
6. Änderungen committen ```git commit feature/form -m "Subject"```
7. Funktionen testen: Inputfelder Name, Menge und Einheit sind vorhanden
8. Branch Develop anwählen ```git checkout develop```
9. Branch feature/form in den Branch mergen ```git merge feature/form --no-ff```

### Einträge erstellen [feature/entries]
Branch Develop angewählt ```git checkout develop```

1. Branch feature/entries erstellen ```git checkout -b feature/entries```
2. Inhalt aus list.html ins index.html kopieren
3. Änderungen committen ```git commit feature/entries -m "Subject"```
4. Skript skript.js in den Src-Ordner kopieren
5. Änderungen committen ```git commit feature/entries -m "Subject"```
6. Funktionen testen: Neue Einträge können erstellt werden
7. Branch Develop anwählen ```git checkout develop```
8. Branch feature/form in den Branch mergen ```git merge feature/entries --no-ff```

### Release v1.0.1 [release/v1.0.0]
Branch Develop angewählt ```git checkout develop```

1. Branch release/v1.0.0 erstellen ```git checkout -b release/v1.0.0```
2. Inhalt aus release.html ins index.html kopieren
3. Testen ob Inputfelder und Funktionen vorhanden
4. Änderungen committen ```git commit release/v1.0.0 -m "Subject"```
5. Branch Master anwählen ```git checkout master```
6. Branch release/v1.0.0 in den Branch mergen ```git merge release/v1.0.0 --no-ff```
7. Version 1.0.0 taggen ```git tag -a v1.0.0 -m "Basis function of grocery list"```
8. Branch Develop anwählen ```git checkout develop```
9. Branch release/v1.0.0 in den Branch mergen ```git merge release/v1.0.0 --no-ff```

### Bugfix [bugfix/unit-selection]
Branch Master angewählt ```git checkout master```

1. Branch hotfix/unit-selection-issue erstellen ```git checkout -b hotfix/unit-selection-issue```
2. Inhalt aus bugfix.html in das index.html kopieren
3. Testen ob die Änderung funktioniert
4. Änderungen committen ```git commit hotfix/unit-selection-issue -m "Subject"```
5. Branch Master anwählen ```git checkout master```
6. Branch hotfix/unit-selection-issue in den Branch mergen ```git merge hotfix/unit-selection-issue --no-ff```
7. Version 1.0.1 taggen ```git tag -a v1.0.1 -m "Fixed unit selection"```
8. Branch Develop anwählen ```git checkout develop```
9. Branch hotfix/unit-selection-issue in den Branch mergen ```git merge hotfix/unit-selection-issue --no-ff```