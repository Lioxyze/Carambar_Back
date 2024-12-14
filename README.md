Backend (NestJS avec Prisma)
Description
L'API Carambar permet de gérer des blagues avec des endpoints pour ajouter, consulter, et récupérer des blagues aléatoires. L'API est construite avec NestJS et utilise Prisma pour interagir avec une base de données SQLite.

Technologies utilisées
Node.js
NestJS
Prisma
SQLite
Installation et lancement du backend
Clonez ce repo :

bash
Copier le code
git clone https://github.com/Lioxyze/Carambar_Back
Installez les dépendances :

bash
Copier le code
cd Carambar_Back
npm install
Lancez le serveur de développement :

bash
Copier le code
npm run start:dev
L'API sera disponible sur http://localhost:3000.

Endpoints disponibles
POST /blagues : Ajouter une nouvelle blague.

Body :
json
Copier le code
{
  "blagues": "Une blague ici",
  "reponse": "Une réponse ici"
}
GET /blagues : Obtenir toutes les blagues.

GET /blagues/:id : Obtenir une blague par son ID.

GET /blagues/random : Obtenir une blague aléatoire.

Déploiement en ligne
L'API est déployée sur Heroku :

Voir l'API en ligne
Documentation Swagger
L'API est documentée avec Swagger. Consultez la documentation ici :

Accéder à Swagger
