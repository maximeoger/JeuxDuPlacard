# JeuxDuPlacard



##### But du projet: 

Ce projet est encore au stade de développement, cependant le but est de poser les premières briques de la maniere la plus scallable possible afin de garder une maintenabilité pour les mises à jour futures. 

L'objectif est d'arriver dans un premier temps à une preuve de concept.




##### Description de l'architecture: 


`packages/front` 

Contiens l'ensemble de l'application front-end

- react
- Typescript




`packages/server`

Contiens l'API REST qui gère les fonctionnalités back end de la plateforme.

- express
- Typescript
- TypeORM
- Postgres




`packages/common`

Contiens les éléments partagés entre la partie front et back-end (types, interfaces, règles de validation, etc)


