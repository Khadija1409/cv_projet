# 001

Projet React créé avec [Vite]

##  Les Étapes de création du projet

### 1. Ouvrir le terminal dans le dossier de travail

Dans mon cas le terminal (PowerShell) est ouvert dans le dossier suivant :


C:\Users\Khadidiatou KANDJI\OneDrive\Desktop\Cours GL l2


### 2. Lancer la création du projet et répondre aux questions

Commande exécutée :

```bash
npm create vite@latest 001
```

Résultat dans le terminal :

```
PS C:\Users\Khadidiatou KANDJI\OneDrive\Desktop\Cours GL l2> npm create vite@latest 001
Need to install the following packages:
create-vite@9.3.3
Ok to proceed? (y)

> npx
> cva 001

create-vite v9.3.3

◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Which linter to use?
│  Oxlint
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in C:\Users\Khadidiatou KANDJI\OneDrive\Desktop\Cours GL l2\001...
│
◇  Installing dependencies with npm...

added 24 packages, and audited 25 packages in 2m

9 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> 001@0.0.0 dev
> vite

  VITE v8.3.5  ready in 895 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 3.  Les Réponses choisies

| Question                          | Réponse    | 
| Ok to proceed?(installer create-vite) | `y`   |
| Select a framework                | React      |
| Select a variant                  | JavaScript |
| Which linter to use?              | Oxlint     |
| Install with npm and start now?   | Yes        |

Avec `Yes`, Vite a installé automatiquement les dépendances (`npm install`) et lancé le serveur de développement (`npm run dev`).

### 4.J' ouvre le projet dans le navigateur

Adresse du projet : http://localhost:5173/

La page d'accueil Vite + React s'affiche.

## Relancer le projet plus tard quand j'en n'aurais encore besoin au ca ou je quitterai

```bash
cd 001
npm run dev
```



## Structure du projet :  le rôle des dossiers et des fichiers indispensables
Il existe plusieurs dossiers dans le projet 001:
node_modules
public
Ici dans le dossier 'src' nous avons plusieurs fichiers:
assets/
App.css
App.jsx
index.css
main.jsx
Ici ous avons les autres dossiers du projet 001
.gitignore
index.html
package.json
package-lock.json
vite.config.js
README.md

## Les differentes dossiers:
## Le role des Dossiers	:
node_modules:	Contient toutes les bibliothèques installées par npm install (React, Vite, etc.).
public:	Fichiers statiques copiés tels quels (icône du site, images fixes).
src: Le code source de l'application. C'est ici que l'on travaille.
src/assets:	Images et ressources utilisées dans le code .
## Les fichiers indispensables:
## Le role des differentes Fichiers:
index.html:	La page HTML unique du projet. Elle contient <div id="root"> où React affiche l'application et charge main.jsx.
src/main.jsx: Le point d'entrée : il démarre React et affiche le composant App dans #root.
src/App.jsx: Le composant principal de l'application. C'est le premier fichier à modifier.
src/App.css: Les styles du composant App.
src/index.css: Les styles globaux de toute la page.
package.json: La carte d'identité du projet : nom, version, dépendances et scripts (dev, build, preview).
package-lock.json::	Enregistre les versions exactes des paquets installés. Généré automatiquement, à ne pas modifier.
vite.config.js:	La configuration de Vite (par exemple l'activation du plugin React).
.gitignore:	Liste les fichiers que Git doit ignorer, comme node_modules.
README.md:	La documentation du projet.



