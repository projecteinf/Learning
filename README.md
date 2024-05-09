# Learning TTD with examples
# Create a new angular app
```bash
ng new <app-name>
```

# Execució de testos
```bash
ng test
```

## Errors d'execució
```
09 05 2024 09:39:46.254:ERROR [launcher]: No binary for Chrome browser on your platform.
  Please, set "CHROME_BIN" env variable.
```

L'error no és rellevant i es pot ignorar.

## Obtenció de resultats
En el navegador que s'obre, accedir a debug per a veure el resultat dels testos.


# Best practices

## Ubicació dels fitxers de testos
Place your spec file next to the file it tests
It's a good idea to put unit test spec files in the same folder as the application source code files that they test. 