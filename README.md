# gitflow-learning

## Ziele
Erstellen einer Einkaufsliste mit html, js, gitflow.
Abläufe mit git gitflow kennelernen

## Info

Show History Graph
```git log --graph```

## Aufgaben

### git clone
1. Übungsprojekt clonen ```git clone```

### git init [master]
1. Einen neuen Ordner ausserhalb des Projekts erstellen.
2. Ein neues lokales Repository erzeugen. ```git init```
3. README.md und .gitignore in den neuen Projektordner kopieren
4. Alle neuen Dateien stagen ```git add *```
5. Projekt committen. ```git commit -m "Init project with readme and gitignore"```

### Form [feature/form]
Branch Master angewählt ```git checkout master```

1. Branch Develop erstellen ```git checkout -b develop```
2. Branch feature/form erstellen ```git checkout -b feature/form```
3. src Ordner in das Projekt kopieren und stagen ```git add *```
4. Änderungen committen ```git commit -m "Create base template"```
5. Aus 2-feature-form das Template nach Input Form im index.html kopieren
6. Änderungen stagen ```git add *```
7. Änderungen committen ```git commit -m "Place inputfields of grocerylist"```
8. Funktionen testen: Inputfelder Name, Menge und Einheit sind vorhanden
9. Branch Develop anwählen ```git checkout develop```
10. Branch feature/form in den Branch mergen ```git merge feature/form --no-ff```

### Einträge erstellen [feature/entries]
Branch Develop angewählt ```git checkout develop```

1. Branch feature/entries erstellen ```git checkout -b feature/entries```
2. Inhalt aus 3-feature-entries/list.html ins index.html kopieren
3. Änderungen stagen ```git add *```
4. Änderungen committen ```git commit -m "Add grocery list into template"```
5. Skript skript.js in den Src-Ordner kopieren
6. Änderungen stagen ```git add *```
7. Änderungen committen ```git commit -m "Create entry register function"```
8. Funktionen testen: Neue Einträge können erstellt werden
9. Branch Develop anwählen ```git checkout develop```
10. Branch feature/form in den Branch mergen ```git merge feature/entries --no-ff```

### Release v1.0.1 [release/v1.0.0]
Branch Develop angewählt ```git checkout develop```

1. Branch release/v1.0.0 erstellen ```git checkout -b release/v1.0.0```
2. Inhalt aus release.html ins index.html kopieren
3. Änderungen stagen ```git add *```
4. Änderungen committen ```git commit -m "Add version tag into template"```
5. Testen ob Inputfelder und Funktionen vorhanden
6. Branch Master anwählen ```git checkout master```
7. Branch release/v1.0.0 in den Branch mergen ```git merge release/v1.0.0 --no-ff```
8. Version 1.0.0 taggen ```git tag -a v1.0.0 -m "Basis function of grocery list"```
9. Branch Develop anwählen ```git checkout develop```
10. Branch release/v1.0.0 in den Branch mergen ```git merge release/v1.0.0 --no-ff```

### Bugfix [hotfix/unit-selection]
Ein Bug wurde entdeckt. Einträge können auch ohne Wahl der Masseinheit erstellt werden.
Branch Master angewählt ```git checkout master```

1. Branch hotfix/unit-selection-issue erstellen ```git checkout -b hotfix/unit-selection```
2. Inhalt aus bugfix.html in das index.html kopieren
3. Testen ob die Änderung funktioniert
4. Änderungen stagen ```git add *```
5. Änderungen committen ```git commit -m "Fix unit selection"```
6. Branch Master anwählen ```git checkout master```
7. Branch hotfix/unit-selection-issue in den Branch mergen ```git merge hotfix/unit-selection --no-ff```
8. Version 1.0.1 taggen ```git tag -a v1.0.1 -m "Fixed unit selection"```
9. Branch Develop anwählen ```git checkout develop```
10. Branch hotfix/unit-selection-issue in den Branch mergen ```git merge hotfix/unit-selection --no-ff```