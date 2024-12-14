# Carambar API

## Description
L'API Carambar permet de gérer et de consulter des blagues via une API REST. Ce projet suit une architecture MVC et utilise un environnement comprenant NestJS, Prisma, MySQL, et Swagger pour la documentation.

## Fonctionnalités principales
- Ajouter une blague en base de données (via Postman).
- Consulter toutes les blagues.
- Consulter une blague spécifique par son ID.
- Consulter une blague aléatoire.
- API versionnée et documentée avec Swagger.

## Déploiement
L'API est déployée sur [Heroku](https://www.heroku.com/).
- [Lien vers Swagger](https://malabar-1805984ed8b4.herokuapp.com/api-docs#/)

## Installation locale
1. Clonez le repository :
```bash
https://github.com/Lioxyze/Carambar_Back.git
```
2. Installez les dépendances :
```bash
npm install
```
3. Configurez les variables d'environnement dans un fichier `.env` :
```
DATABASE_URL=<votre_url_de_base_de_données>
PORT=3000
```
4. Exécutez les migrations Prisma :
```bash
npx prisma migrate dev
```
5. Lancez le serveur en mode développement :
```bash
npm run start:dev
```

## Endpoints
- `POST /blagues` : Ajouter une blague.
- `GET /blagues` : Consulter toutes les blagues.
- `GET /blagues/:id` : Consulter une blague spécifique par ID.
- `GET /blagues/random` : Consulter une blague aléatoire.

Consultez la documentation complète sur [Swagger](https://malabar-1805984ed8b4.herokuapp.com/api-docs#/).

---

## Liens utiles
- [Repo GitHub Backend](https://github.com/Lioxyze/Carambar_Back)
- [Repo GitHub Frontend](https://github.com/Lioxyze/Carambar_Front)
- [Documentation Swagger](https://malabar-1805984ed8b4.herokuapp.com/api-docs#/)
