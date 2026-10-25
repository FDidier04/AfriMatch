# Afrimatch

Afrimatch est une plateforme digitale B2B de mise en relation entre projets africains deja lances ou en phase avancee et partenaires strategiques : investisseurs, entreprises, ONG, experts, distributeurs et institutions.

La plateforme ne publie pas des idees. Elle valorise uniquement des projets reels, verifies, avec un niveau d'avancement, une equipe, des besoins explicites et une capacite de partenariat.

## Vision produit

Afrimatch doit devenir le reflexe professionnel pour identifier, qualifier et connecter les projets serieux en Afrique francophone.

Objectifs principaux :
- aider les porteurs de projets a trouver financement, partenaires, experts, distribution et visibilite ;
- aider les partenaires a decouvrir des projets credibles selon leurs criteres ;
- reduire le bruit des reseaux sociaux et des annuaires generalistes ;
- structurer la confiance par verification, scoring, messagerie et historique des mises en relation.

## Stack technique

Stack technique cible du projet Afrimatch :
- Symfony 6.4 pour l'API REST ;
- Vue 3, Vite et Pinia pour la SPA mobile-first ;
- MySQL 8 en local ;
- PostgreSQL sur Render ;
- authentification JWT ;
- Docker Compose et reverse proxy Nginx ;
- socle RGPD : consentement, export, rectification, anonymisation.

## Navigation cible

- Accueil : feed dynamique, projets mis en avant, CTA publier/devenir partenaire.
- Projets : liste, filtres avances, fiches projet detaillees.
- Partenaires : liste et profils de partenaires.
- Matching : recommandations personnalisees et scores de compatibilite.
- Comment ca marche : parcours porteurs, partenaires, mise en relation.
- Communaute : articles, success stories, interviews, conseils business Afrique.
- Tarifs : gratuit, premium, boost, visibilite sponsorisee.
- Contact : support, partenariats institutionnels, email et WhatsApp Business.
- Connexion / Inscription : compte porteur ou partenaire.

## Fonctionnalites MVP

- inscription et connexion JWT ;
- choix du profil : porteur de projet, partenaire, admin ;
- creation et moderation d'un projet ;
- feed public de projets verifies ;
- filtres par pays, secteur, stade et type de besoin ;
- page detail projet avec equipe, objectifs, besoins, medias et documents ;
- profils partenaires avec criteres d'interet ;
- bouton Contacter et demandes de contact ;
- matching initial par regles ponderees ;
- tableaux de bord porteur et partenaire ;
- gestion RGPD minimale.

## Documents de cadrage

- [Vision produit](docs/01-vision-produit.md)
- [UX et parcours utilisateur](docs/02-ux-parcours.md)
- [Structure technique](docs/03-structure-technique.md)
- [Systeme de matching](docs/04-matching.md)
- [Modele economique](docs/05-modele-economique.md)
- [Strategie de lancement](docs/06-lancement-afrique-francophone.md)
- [Roadmap 12 mois](docs/07-roadmap-12-mois.md)
- [Identite de marque](docs/08-identite-marque.md)
- [Registre RGPD](REGISTRE_TRAITEMENTS_RGPD.md)

## Installation locale prevue

Backend :

```bash
cd backend
composer install
cp .env.example .env
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
php -S 127.0.0.1:8000 -t public
```

Frontend :

```bash
cd frontend
npm install
cp .env.example .env
npm run dev -- --host 127.0.0.1 --port 5173
```

URLs :
- frontend : `http://127.0.0.1:5173`
- API : `http://127.0.0.1:8000/api`

Docker :

```bash
docker compose up --build
```
