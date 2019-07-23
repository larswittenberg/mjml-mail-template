# E-Mail Template

E-Mail / Newletter Template auf Basis von [mjml.io](https://mjml.io/)

![alt text](https://raw.githubusercontent.com/larswittenberg/mjml-mail-template/master/screenshot.png "Screenshot")


## Eingesetzte Tools
* [mjml.io](https://mjml.io/) (Version 4)
* [node.js](https://nodejs.org/en/)
* [yarn](https://yarnpkg.com/lang/en/)
* [Gulp 4](https://gulpjs.com/)
* [gulp-mjml](https://www.npmjs.com/package/gulp-mjml)
* [Browser-Sync](https://www.browsersync.io/)


## Vorraussetzung

Installiertes Node.js und yarn (bzw. npm) sowie globales Gulp und Browser-Sync

`yarn global add gulp-cli`

`yarn global add browser-sync`


## Installation

`$ yarn` installiert die benötigten Packages (oder `$ npm install`)


## Benutzung

`$ gulp watch` startet lokalen Browser-Sync-Server

Beim speichern der mjml Datei wird die Seite im Browser automatisch neu geladen.
