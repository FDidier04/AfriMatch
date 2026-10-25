# Registre des Traitements RGPD - Afrimatch

**Responsable du traitement :** Afrimatch  
**DPO fictif designe :** dpo@afrimatch.local  
**Date de mise a jour :** 13/06/2026  
**Version :** 1.0

## Traitement 1 - Creation de compte utilisateur

| Champ | Detail |
|---|---|
| Finalite | Permettre l'authentification et l'acces a la plateforme |
| Base legale | Consentement explicite |
| Donnees concernees | Nom, prenom, email, mot de passe hashe, telephone, role, consentement |
| Destinataires | Application Afrimatch, administrateurs habilites |
| Duree de conservation | 3 ans apres la derniere activite |
| Mesures de securite | Mot de passe hashe, JWT signe, HTTPS en production |

## Traitement 2 - Publication et moderation des projets

| Champ | Detail |
|---|---|
| Finalite | Permettre la publication de projets reels et leur verification |
| Base legale | Execution d'un contrat ou mesures precontractuelles |
| Donnees concernees | Identite du porteur, description projet, equipe, pays, ville, besoins, documents |
| Destinataires | Public pour les champs publies, administrateurs, partenaires contactes |
| Duree de conservation | 5 ans apres archivage du projet |
| Mesures de securite | Moderation admin, droits par role, journalisation |

## Traitement 3 - Profils partenaires

| Champ | Detail |
|---|---|
| Finalite | Presenter les partenaires et permettre le matching |
| Base legale | Execution d'un contrat |
| Donnees concernees | Organisation, type de partenaire, criteres, pays, secteurs, contacts professionnels |
| Destinataires | Utilisateurs, administrateurs |
| Duree de conservation | 5 ans apres fermeture du profil |
| Mesures de securite | Authentification, moderation, controle d'acces |

## Traitement 4 - Matching et recommandations

| Champ | Detail |
|---|---|
| Finalite | Proposer des projets et partenaires compatibles |
| Base legale | Interet legitime et execution du service |
| Donnees concernees | Preferences, pays, secteurs, besoins, stades, interactions |
| Destinataires | Utilisateur concerne, administrateurs habilites |
| Duree de conservation | 3 ans apres derniere activite |
| Mesures de securite | Score explicable, acces restreint, minimisation des donnees |

## Traitement 5 - Demandes de contact et messagerie

| Champ | Detail |
|---|---|
| Finalite | Permettre la mise en relation entre utilisateurs |
| Base legale | Execution du service |
| Donnees concernees | Message, participants, projet concerne, statut, horodatage |
| Destinataires | Participants de la conversation, administrateurs en cas de support ou signalement |
| Duree de conservation | 3 ans apres derniere activite |
| Mesures de securite | Authentification, controle d'acces, journalisation |

## Traitement 6 - Droits utilisateur

| Champ | Detail |
|---|---|
| Finalite | Permettre rectification, export et anonymisation |
| Base legale | Obligation legale |
| Donnees concernees | Donnees de profil, projets, messages, consentements |
| Destinataires | Utilisateur concerne, administrateurs habilites |
| Duree de conservation | Export ponctuel non stocke ; anonymisation irreversible |
| Mesures de securite | Authentification obligatoire, log de chaque action |

## Mesures globales

- Mots de passe hashes.
- Tokens JWT signes et limites dans le temps.
- HTTPS obligatoire en production.
- Acces controle par roles Symfony.
- Moderation obligatoire avant publication publique.
- Secrets exclus du depot Git.
- Donnees de paiement non stockees dans le MVP.
