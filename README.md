## Description 

Projet perso - création d'une plateforme de revente de jeux de société.

[Lien du figma](https://www.figma.com/file/PCd8JQM0Fk7ySlSOjFY7Vn)

`packages/front` 

Contient l'ensemble de l'application front-end
- NextJs
- Typescript


`packages/server`

Contient l'API REST qui gère les fonctionnalités back end de la plateforme.
- express
- Typescript
- TypeORM

`packages/common`

Contiens les éléments partagés entre la partie front et back-end (types, interfaces, règles de validation, etc). Ce fichier est automatiquement dupliqué dans le package "Server" au moment de construire les images docker.


## Installer le projet: 

```shell
$ make install
```

## Lancer le projet

Avant de lancer le projet, s'assurer qu'une base de donnée postgres est bien lancée sur le port 5432

```shell
$ make start
```

## Lancer le linter de code

```shell
$ make lint
```

Vous pouvez aussi lancer la commande `$ make lint.fix` pour fixer automatiquement certaines petites erreurs.