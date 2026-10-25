# Structure technique simplifiee

## Architecture

Afrimatch reprend une architecture SPA + API :
- frontend Vue 3 avec Vite et Pinia ;
- backend Symfony 6.4 expose en API REST ;
- base locale MySQL 8 ;
- base production PostgreSQL sur Render ;
- authentification JWT ;
- Nginx en reverse proxy Docker.

## Structure prevue

```text
Afrimatch/
├── backend/   # API Symfony 6.4 + Doctrine + JWT
├── frontend/  # SPA Vue 3 + Vite + Pinia
├── docker/    # reverse proxy nginx
├── docs/
├── docker-compose.yml
├── render.yaml
├── afrimatch.http
└── REGISTRE_TRAITEMENTS_RGPD.md
```

## Roles

- `ROLE_PROJECT_OWNER`
- `ROLE_PARTNER`
- `ROLE_ADMIN`

## Modele de donnees initial

### User

- email
- password
- firstName
- lastName
- phone
- roles
- profileType
- country
- city
- consentGiven
- consentVersion
- createdAt
- lastActivityAt
- anonymizedAt

### Project

- owner
- title
- slug
- shortDescription
- description
- country
- city
- sector
- stage
- businessModel
- impactTags
- needs
- fundingAmountCfa
- tractionSummary
- teamSummary
- mediaUrls
- documentUrls
- verificationStatus
- isPublished
- isFeatured
- createdAt
- updatedAt

### PartnerProfile

- owner
- organizationName
- partnerType
- description
- countriesOfInterest
- sectorsOfInterest
- stagesOfInterest
- needsSupported
- ticketMinCfa
- ticketMaxCfa
- website
- whatsapp
- isVerified
- isPublished

### ContactRequest

- project
- sender
- recipient
- message
- status
- matchScoreSnapshot
- createdAt
- respondedAt

### MatchRecommendation

- project
- partnerProfile
- score
- reasons
- status
- createdAt

### Conversation

- project
- contactRequest
- participants
- createdAt
- lastMessageAt

### Message

- conversation
- sender
- body
- isRead
- createdAt

## Endpoints principaux

| Methode | Endpoint | Acces | Description |
|---|---|---|---|
| POST | `/api/auth/register` | Public | Creer un compte |
| POST | `/api/auth/login` | Public | Obtenir un JWT |
| GET | `/api/projects` | Public | Liste des projets publies |
| GET | `/api/projects/{slug}` | Public | Detail d'un projet |
| POST | `/api/projects` | Porteur/admin | Creer un projet |
| PUT | `/api/projects/{id}` | Proprietaire/admin | Modifier un projet |
| PATCH | `/api/projects/{id}/submit` | Proprietaire/admin | Soumettre a moderation |
| PATCH | `/api/projects/{id}/publish` | Admin | Publier ou depublier |
| GET | `/api/partners` | Public | Liste des partenaires publies |
| POST | `/api/partners/profile` | Partenaire/admin | Creer un profil partenaire |
| GET | `/api/matching/recommendations` | Auth | Suggestions personnalisees |
| POST | `/api/projects/{id}/contact` | Auth | Demander un contact |
| GET | `/api/messages` | Auth | Conversations |
| POST | `/api/messages` | Auth | Envoyer un message |
| GET | `/api/me` | Auth | Profil utilisateur |
| PUT | `/api/me` | Auth | Rectification |
| GET | `/api/me/export` | Auth | Export RGPD |
| DELETE | `/api/me` | Auth | Anonymisation |

## Statuts

Projet :
- `draft`
- `submitted`
- `needs_changes`
- `verified`
- `published`
- `rejected`
- `archived`

Demande de contact :
- `pending`
- `accepted`
- `declined`
- `closed`

Match :
- `suggested`
- `saved`
- `contacted`
- `dismissed`
