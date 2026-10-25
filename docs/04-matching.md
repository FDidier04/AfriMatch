# Systeme de matching intelligent

## Objectif

Le matching Afrimatch doit proposer des projets compatibles aux partenaires et des partenaires pertinents aux porteurs de projets. Le MVP peut fonctionner sans IA generative, avec un moteur de regles ponderees, explicable et facile a ajuster.

## Score de compatibilite

Score final : 0 a 100.

Ponderation MVP :
- pays cible compatible : 20 points ;
- secteur compatible : 20 points ;
- type de besoin compatible : 20 points ;
- stade de projet compatible : 15 points ;
- ticket financier compatible : 10 points ;
- impact ou thematique compatible : 5 points ;
- niveau de verification : 5 points ;
- activite recente : 5 points.

## Exemple

Un investisseur interesse par la Cote d'Ivoire, le Senegal, l'agritech, les projets en traction et les besoins d'investissement recevra prioritairement :
- projets en Cote d'Ivoire ou Senegal ;
- secteur agriculture, agro-industrie, logistique alimentaire ou climat ;
- besoin `investissement` ;
- stade `traction` ou `croissance` ;
- montant recherche dans son ticket.

## Explicabilite

Chaque match doit afficher des raisons simples :
- meme pays cible ;
- secteur prioritaire ;
- besoin compatible ;
- stade adapte ;
- montant recherche dans la fourchette ;
- projet verifie par Afrimatch.

## Evolution

Phase 1 :
- matching par filtres et poids.

Phase 2 :
- apprentissage a partir des sauvegardes, contacts et refus.

Phase 3 :
- recommandations semantiques par similarite de descriptions.

Phase 4 :
- assistant de qualification : amelioration automatique des fiches projet, detection de champs manquants, score de qualite du dossier.

## Gardes-fous

- ne pas masquer totalement les projets a score faible ;
- permettre a l'utilisateur de comprendre pourquoi un match est propose ;
- eviter les biais contre les pays ou secteurs moins representes ;
- privilegier la fraicheur et la qualite des informations ;
- separer score de compatibilite et score de credibilite.
