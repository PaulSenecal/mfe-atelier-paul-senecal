# Micro Frontend avec Module Federation pour EFREI par Paul Senecal

Ce projet est une démonstration simple d'une architecture Micro Frontend utilisant Webpack 5 Module Federation. Il consiste en une application hôte (shell) et un micro frontend pour le header.

## Architecture

```
/mfe-project
  /host                 # Application hôte (shell)
    /public
      - index.html
    /src
      - App.js         # Composant principal qui charge le header
      - bootstrap.js   # Configuration React
      - index.js       # Point d'entrée
    - package.json
    - webpack.config.js
  /header              # Micro frontend du header
    /public
      - index.html
    /src
      - App.js        # Composant header
      - bootstrap.js
      - index.js
    - package.json
    - webpack.config.js
```

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (inclus avec Node.js)

## Installation

1. Clonez le repository :
```bash
git clone [URL_DU_REPO]
cd mfe-project
```

2. Installez les dépendances pour le header :
```bash
cd header
npm install
```

3. Installez les dépendances pour l'application hôte :
```bash
cd ../host
npm install
```

## Démarrage

1. Démarrez d'abord le micro frontend header :
```bash
cd header
npm start
```

2. Dans un nouveau terminal, démarrez l'application hôte :
```bash
cd host
npm start
```

L'application sera accessible aux URLs suivantes :
- Application hôte : http://localhost:3000
- Header MFE : http://localhost:3001

## Technologies utilisées

- React 18
- Webpack 5
- Module Federation

## Structure du Module Federation

### Host (Shell)
- Port : 3000
- Consomme le module remote "header"

### Header MFE
- Port : 3001
- Expose le composant Header

## Développement

Pour ajouter de nouveaux composants au header :
1. Créez votre composant dans `header/src`
2. Exposez-le dans le `webpack.config.js` du header
3. Importez-le dans l'application hôte via Module Federation

## Scripts disponibles

Dans chaque projet (host et header) :
- `npm start` : Démarre le serveur de développement
- `npm build` : Crée une version de production

## Dépannage

Si vous rencontrez des erreurs :
1. Vérifiez que les deux applications sont en cours d'exécution
2. Assurez-vous que les ports 3000 et 3001 sont disponibles
3. Vérifiez les versions de React dans les deux projets
4. Nettoyez le cache et les node_modules si nécessaire :
```bash
rm -rf node_modules
npm cache clean --force
npm install
```
