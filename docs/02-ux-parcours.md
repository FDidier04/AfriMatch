# UX et parcours utilisateur

## Architecture de navigation

La navigation principale comprend :
- Accueil ;
- Projets ;
- Partenaires ;
- Matching ;
- Comment ca marche ;
- Communaute ;
- Tarifs ;
- Contact ;
- Connexion / Inscription.

Sur mobile, la navigation prioritaire peut etre reduite a cinq entrees :
- Accueil ;
- Projets ;
- Matching ;
- Messages ;
- Profil.

## Accueil

Objectif : donner immediatement acces aux projets actifs.

Contenus :
- feed dynamique de projets ;
- projets mis en avant ;
- filtres rapides par pays, secteur et besoin ;
- CTA `Publier un projet` ;
- CTA `Devenir partenaire`.

Le feed doit ressembler a un reseau professionnel : cartes compactes, informations essentielles, score ou badge de verification, besoin principal visible, action rapide.

## Parcours porteur de projet

1. Creation de compte.
2. Choix du profil `Porteur de projet`.
3. Acceptation du consentement RGPD.
4. Creation du profil personnel.
5. Creation d'un projet.
6. Ajout des informations essentielles : pays, secteur, stade, equipe, traction, besoins.
7. Ajout de medias ou documents.
8. Soumission a moderation.
9. Publication apres validation.
10. Reception de demandes de contact et matches.
11. Suivi depuis le dashboard.

Dashboard porteur :
- mes projets ;
- statut de moderation ;
- vues ;
- contacts recus ;
- matches recommandes ;
- messages ;
- statistiques par pays/secteur si disponible.

## Parcours partenaire

1. Creation de compte.
2. Choix du profil `Partenaire`.
3. Selection du type : investisseur, ONG, entreprise, expert, distributeur, institution.
4. Definition des criteres : pays, secteurs, tickets, stades, types de besoins.
5. Consultation des projets.
6. Sauvegarde de projets.
7. Reception de suggestions de matching.
8. Demande de contact.
9. Echange via messagerie.

Dashboard partenaire :
- projets sauvegardes ;
- matches recus ;
- demandes envoyees ;
- conversations ;
- preferences de matching ;
- alertes de nouveaux projets.

## Fiche projet

Sections recommandees :
- resume court ;
- pays, ville, zone d'operation ;
- secteur ;
- stade du projet ;
- equipe ;
- probleme traite ;
- solution ;
- traction ou indicateurs ;
- besoins ;
- type de partenariat recherche ;
- documents et medias ;
- badges de verification ;
- bouton `Contacter`.

## Filtres projets

Filtres MVP :
- pays ;
- secteur ;
- type de besoin ;
- stade ;
- modele : B2B, B2C, B2B2C, associatif ;
- impact social ou environnemental ;
- montant recherche si applicable.

## Experience faible consommation de donnees

- cartes sans videos en autoplay ;
- images compressees et lazy-loaded ;
- documents ouverts sur demande ;
- pagination ou infinite scroll controle ;
- texte visible meme avec connexion lente ;
- endpoints filtres cote serveur.

