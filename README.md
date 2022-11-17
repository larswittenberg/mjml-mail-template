# E-Mail / Newsletter Template Kickstarter

E-Mail / Newletter Template auf Basis von [mjml.io](https://mjml.io/)

![alt text](https://raw.githubusercontent.com/larswittenberg/mjml-mail-template/master/screenshot.png?v2 "Screenshot")

## Alternative Nutzung in VS Code

Über das [MJML Plugin](https://marketplace.visualstudio.com/items?itemName=mjmlio.vscode-mjml) für VS Code direkt eine Live Preview im Editor sehen und eine HTML Datei exportieren lassen.

## Eingesetzte Tools

* [mjml.io](https://mjml.io/) (Version 4)
* [Gulp](https://gulpjs.com/)
* [gulp-mjml](https://www.npmjs.com/package/gulp-mjml)
* [Browser-Sync](https://www.browsersync.io/)

## Vorraussetzung

Installiertes Node.js und yarn (bzw. npm) sowie globales Gulp und Browser-Sync

`yarn global add gulp-cli`

`yarn global add browser-sync`

## Installation

`yarn install` installiert die benötigten Packages (oder `npm install`)

## Benutzung

`yarn dev` startet lokalen Browser-Sync-Server

Beim speichern der mjml-Datei im `src`-Ordner wird die Seite im Browser automatisch neu geladen.

## Alternativ: mjml CLI

`mjml -w src/index.mjml`
