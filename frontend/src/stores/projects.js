import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    targetCountries: [
      'Benin',
      'Burkina Faso',
      'Cap-Vert',
      'Cameroun',
      'Centrafrique',
      'Congo',
      'Cote d Ivoire',
      'Gabon',
      'Gambie',
      'Ghana',
      'Guinee',
      'Guinee-Bissau',
      'Guinee equatoriale',
      'Liberia',
      'Mali',
      'Mauritanie',
      'Niger',
      'Nigeria',
      'RDC',
      'Sao Tome-et-Principe',
      'Senegal',
      'Sierra Leone',
      'Tchad',
      'Togo',
    ],
    countryCities: {
      Benin: ['Cotonou', 'Porto-Novo'],
      'Burkina Faso': ['Ouagadougou', 'Bobo-Dioulasso'],
      'Cap-Vert': ['Praia', 'Mindelo'],
      Cameroun: ['Douala', 'Yaounde'],
      Centrafrique: ['Bangui', 'Bimbo'],
      Congo: ['Brazzaville', 'Pointe-Noire'],
      'Cote d Ivoire': ['Abidjan', 'Bouake'],
      Gabon: ['Libreville', 'Port-Gentil'],
      Gambie: ['Banjul', 'Serekunda'],
      Ghana: ['Accra', 'Kumasi'],
      Guinee: ['Conakry', 'Kankan'],
      'Guinee-Bissau': ['Bissau', 'Bafata'],
      'Guinee equatoriale': ['Malabo', 'Bata'],
      Liberia: ['Monrovia', 'Gbarnga'],
      Mali: ['Bamako', 'Sikasso'],
      Mauritanie: ['Nouakchott', 'Nouadhibou'],
      Niger: ['Niamey', 'Maradi'],
      Nigeria: ['Lagos', 'Abuja'],
      RDC: ['Kinshasa', 'Goma'],
      'Sao Tome-et-Principe': ['Sao Tome', 'Santo Antonio'],
      Senegal: ['Dakar', 'Thies'],
      'Sierra Leone': ['Freetown', 'Bo'],
      Tchad: ["N'Djamena", 'Moundou'],
      Togo: ['Lome', 'Sokode'],
    },
    projectSectors: [
      'Agriculture & Agroalimentaire',
      'Elevage & Peche',
      'Energie & Energies renouvelables',
      'Environnement & Developpement durable',
      'Batiment, Construction & Immobilier',
      'Industrie & Production',
      "Artisanat & Metiers d'art",
      'Commerce & Distribution',
      'Transport & Logistique',
      'Technologie, Numerique & Innovation',
      'Telecommunications',
      'Finance, Banque & Assurance',
      'Sante & Bien-etre',
      'Education & Formation',
      'Tourisme, Hotellerie & Restauration',
      'Culture, Medias & Divertissement',
      'Mode, Textile & Beaute',
      'Services aux entreprises',
      'Economie sociale & Impact',
      'Eau, Assainissement & Infrastructures',
    ],
    projectCosts: [
      'Moins de 500 000 FCFA',
      'De 500 000 à 2 000 000 FCFA',
      'De 2 000 000 à 5 000 000 FCFA',
      'Plus de 5 000 000 FCFA',
    ],
    projects: [
      {
        id: 1,
        title: 'AgriPay Cacao',
        country: 'Cote d Ivoire',
        city: 'Abidjan',
        sector: 'Agriculture & Agroalimentaire',
        need: 'Investissement',
        stage: 'Traction',
        cost: 'Plus de 5 000 000 FCFA',
        launchDate: 'Mars 2023',
        revenue: '82 000 EUR / an',
        previousRevenueEstimate: '60 000 EUR sur l annee precedente',
        score: 92,
        featured: true,
        image:
          'https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=900&q=70',
        summary:
          'Solution de paiement et de suivi pour cooperatives cacao, deja pilotee avec 1 200 producteurs references.',
        traction: '3 cooperatives pilotes',
        team: 'Equipe produit, operations terrain et finance',
        objectives: 'Etendre le pilote a 20 cooperatives en 12 mois',
        documents: ['Pitch deck', 'Resultats pilote'],
      },
      {
        id: 2,
        title: 'SanteLink Rural',
        country: 'Senegal',
        city: 'Thies',
        sector: 'Sante & Bien-etre',
        need: 'Partenaire expert',
        stage: 'MVP lance',
        cost: 'De 2 000 000 à 5 000 000 FCFA',
        launchDate: 'Janvier 2024',
        revenue: '18 000 EUR / an',
        previousRevenueEstimate: '9 000 EUR sur les 12 derniers mois',
        score: 86,
        featured: true,
        image:
          'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=70',
        summary:
          'Plateforme de coordination entre centres de sante ruraux, medecins referents et agents communautaires.',
        traction: '8 centres connectes',
        team: 'Medecin referent, lead technique, responsable operations',
        objectives: 'Connecter 50 centres ruraux au Senegal',
        documents: ['Note medicale', 'Plan de deploiement'],
      },
      {
        id: 3,
        title: 'EduPro Mobile',
        country: 'Benin',
        city: 'Cotonou',
        sector: 'Education & Formation',
        need: 'Distribution',
        stage: 'Croissance',
        cost: 'De 500 000 à 2 000 000 FCFA',
        launchDate: 'Septembre 2022',
        revenue: '46 000 EUR / an',
        previousRevenueEstimate: '31 000 EUR sur l annee precedente',
        score: 81,
        featured: false,
        image:
          'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=70',
        summary:
          'Formations courtes pour jeunes professionnels, accessibles sur mobile avec parcours hors-ligne.',
        traction: '4 500 apprenants',
        team: 'Equipe pedagogique, mobile et partenariats ecoles',
        objectives: 'Signer 30 partenariats de distribution',
        documents: ['Catalogue formation', 'Statistiques apprenants'],
      },
      {
        id: 4,
        title: 'Kivu Solar Cold',
        country: 'RDC',
        city: 'Goma',
        sector: 'Energie & Energies renouvelables',
        need: 'Financement',
        stage: 'Pilote',
        cost: 'Plus de 5 000 000 FCFA',
        launchDate: 'Juin 2024',
        revenue: '12 000 EUR / an',
        previousRevenueEstimate: '3 500 EUR sur le trimestre precedent',
        score: 78,
        featured: false,
        image:
          'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=70',
        summary:
          'Chambres froides solaires pour reduire les pertes agricoles dans les zones de production.',
        traction: '2 sites pilotes',
        team: 'Ingenieur energie, responsable agricole, technicien terrain',
        objectives: 'Financer 10 nouvelles chambres froides',
        documents: ['Plan technique', 'Budget pilote'],
      },
      {
        id: 5,
        title: 'Mboa Fresh Market',
        country: 'Cameroun',
        city: 'Douala',
        sector: 'Commerce & Distribution',
        need: 'Partenaire logistique',
        stage: 'Croissance',
        cost: 'De 2 000 000 Ã  5 000 000 FCFA',
        launchDate: 'Avril 2023',
        revenue: '58 000 EUR / an',
        previousRevenueEstimate: '39 000 EUR sur l annee precedente',
        score: 89,
        featured: true,
        image:
          'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=75',
        summary:
          'Marketplace de produits frais qui relie les producteurs locaux aux commerces et restaurants urbains.',
        traction: '180 producteurs references',
        team: 'Equipe logistique, commerciale et produit numerique',
        objectives: 'Ouvrir deux nouveaux centres de distribution',
        documents: ['Etude de marche', 'Donnees de ventes'],
      },
      {
        id: 6,
        title: 'Lome Recycle Hub',
        country: 'Togo',
        city: 'Lome',
        sector: 'Environnement & Developpement durable',
        need: 'Investissement',
        stage: 'Traction',
        cost: 'Plus de 5 000 000 FCFA',
        launchDate: 'Aout 2022',
        revenue: '34 000 EUR / an',
        previousRevenueEstimate: '22 000 EUR sur l annee precedente',
        score: 84,
        featured: false,
        image:
          'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=75',
        summary:
          'Collecte et transformation de dechets plastiques en materiaux destines aux artisans et industriels.',
        traction: '95 tonnes recyclees',
        team: 'Specialistes environnement, collecte et production',
        objectives: 'Doubler la capacite annuelle de transformation',
        documents: ['Bilan environnemental', 'Plan industriel'],
      },
      {
        id: 7,
        title: 'Sahel Trans Express',
        country: 'Burkina Faso',
        city: 'Ouagadougou',
        sector: 'Transport & Logistique',
        need: 'Partenaire commercial',
        stage: 'MVP lance',
        cost: 'De 2 000 000 Ã  5 000 000 FCFA',
        launchDate: 'Fevrier 2024',
        revenue: '27 000 EUR / an',
        previousRevenueEstimate: '14 000 EUR sur les 8 derniers mois',
        score: 76,
        featured: false,
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=75',
        summary:
          'Service de mutualisation des livraisons pour les PME et commercants entre les grandes villes du Sahel.',
        traction: '620 livraisons realisees',
        team: 'Equipe operations, chauffeurs partenaires et technologie',
        objectives: 'Etendre le reseau a trois pays limitrophes',
        documents: ['Rapport operations', 'Plan d expansion'],
      },
      {
        id: 8,
        title: 'Nilewa Finances',
        country: 'Congo',
        city: 'Brazzaville',
        sector: 'Finance, Banque & Assurance',
        need: 'Partenaire financier',
        stage: 'Pilote',
        cost: 'De 500 000 Ã  2 000 000 FCFA',
        launchDate: 'Mai 2024',
        revenue: '15 000 EUR / an',
        previousRevenueEstimate: '6 000 EUR sur le semestre precedent',
        score: 73,
        featured: false,
        image:
          'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=75',
        summary:
          'Outil mobile de gestion de tresorerie et de facturation adapte aux petites entreprises africaines.',
        traction: '310 entreprises utilisatrices',
        team: 'Experts finance, produit et accompagnement PME',
        objectives: 'Atteindre 2 000 entreprises utilisatrices',
        documents: ['Demonstration produit', 'Indicateurs pilote'],
      },
    ],
    pendingProjects: [],
    pendingPartnerRequests: [],
    partners: [
      {
        name: 'Investisseurs early-stage',
        type: 'Investisseurs',
        focus: 'Tickets pre-seed et seed pour projets en traction.',
        logo: '/trust/invest.svg',
      },
      {
        name: 'ONG et bailleurs',
        type: 'ONG',
        focus: 'Projets a impact social, sante, education et climat.',
        logo: '/trust/impact.svg',
      },
      {
        name: 'Entreprises de distribution',
        type: 'Entreprises',
        focus: 'Acces marche, reseaux terrain et partenariats commerciaux.',
        logo: '/trust/distrib.svg',
      },
      {
        name: 'Experts metiers',
        type: 'Experts',
        focus: 'Mentorat, structuration, finance, produit et operations.',
        logo: '/trust/expert.svg',
      },
      {
        name: 'Reseaux de diaspora',
        type: 'Diaspora',
        focus: 'Ouverture de marche, mentorat et relais d opportunites.',
        logo: '/trust/diaspora.svg',
      },
      {
        name: 'Incubateurs et hubs',
        type: 'Ecosystemes',
        focus: 'Acceleration, preparation pitch et accompagnement terrain.',
        logo: '/trust/hub.svg',
      },
      {
        name: 'Institutions publiques',
        type: 'Institutions',
        focus: 'Programmes nationaux, innovation et developpement economique.',
        logo: '/trust/institution.svg',
      },
      {
        name: 'Distributeurs regionaux',
        type: 'Distribution',
        focus: 'Acces aux canaux commerciaux en Afrique centrale et de l Ouest.',
        logo: '/trust/region.svg',
      },
    ],
    articles: [
      {
        title: "Guide pratique de l'entrepreneuriat en République du Congo",
        subtitle: 'Entreprendre au Congo : les étapes essentielles pour lancer et structurer son activité',
        category: 'Guide pratique',
        text:
          "Découvrez Le Guide pratique de l'entrepreneuriat en République du Congo, un ouvrage destiné aux entrepreneurs et porteurs de projets souhaitant mieux comprendre les démarches, les réalités et les étapes liées à la création et au développement d'une activité.",
        button: 'Découvrir le livre',
        link:
          'https://www.editions-harmattan.fr/catalogue/livre/guide-pratique-de-l-entrepreneuriat-en-republique-du-congo/79647',
        image:
          'https://www.editions-harmattan.fr/media/368063/download/9782336540368r.jpg?v=1',
        imageType: 'book',
      },
      {
        title: 'Creer son entreprise au Benin',
        subtitle: "Des demarches de creation d'entreprise accessibles en ligne",
        category: 'Formalisation',
        text:
          'Vous souhaitez creer ou formaliser votre entreprise au Benin ? Decouvrez les dispositifs et services numeriques mis a disposition des entrepreneurs pour effectuer leurs demarches et structurer leur activite.',
        button: 'En savoir plus',
        link: 'https://monentreprise.bj/',
        image:
          "https://commons.wikimedia.org/wiki/Special:FilePath/L%27Amazone%20statue.jpg?width=900",
      },
      {
        title: "Cote d'Ivoire - Comment creer son entreprise ?",
        subtitle:
          "Decouvrez les demarches essentielles pour creer, formaliser et developper une activite en Cote d'Ivoire.",
        category: 'Creation entreprise',
        text:
          "Un point d'entree utile pour comprendre les procedures de creation d'entreprise, les formalites et les services d'accompagnement disponibles en Cote d'Ivoire.",
        button: 'En savoir plus',
        link: 'https://cotedivoire.eregulations.org/menu/1?l=fr',
        image:
          'https://commons.wikimedia.org/wiki/Special:FilePath/Basilique%20notre%20Dame%20de%20la%20Paix%20de%20Yamoussoukro%2013.jpg?width=900',
      },
      {
        title: 'Senegal - Les etapes pour creer son entreprise',
        subtitle:
          "Un guide pratique pour mieux comprendre les demarches de creation et de formalisation d'une entreprise au Senegal.",
        category: 'Creation entreprise',
        text:
          "Retrouvez les informations utiles sur les demarches de formalisation, les documents demandes et les services d'appui a la creation d'entreprise au Senegal.",
        button: 'En savoir plus',
        link: 'https://senegal.eregulations.org/procedure/print/45/26/step/0?l=fr&showCertification=false&showRecourses=true',
        image:
          'https://commons.wikimedia.org/wiki/Special:FilePath/African%20Renaissance%20Monument%20Dakar%202025.jpg?width=900',
      },
    ],
  }),
  getters: {
    countries: (state) => state.targetCountries,
    cities: (state) => [...new Set(Object.values(state.countryCities).flat())],
    sectors: (state) => state.projectSectors,
    costs: (state) => state.projectCosts,
    needs: (state) => [...new Set(state.projects.map((project) => project.need))],
    stages: (state) => [...new Set(state.projects.map((project) => project.stage))],
  },
  actions: {
    loadPublishedProjects() {
      const savedProjects = localStorage.getItem('afrimatch-published-projects')

      if (!savedProjects) return

      try {
        const parsedProjects = JSON.parse(savedProjects)
        const existingIds = new Set(this.projects.map((project) => project.id))
        parsedProjects
          .filter((project) => !existingIds.has(project.id))
          .forEach((project) => this.projects.unshift(project))
      } catch {
        localStorage.removeItem('afrimatch-published-projects')
      }
    },
    addPublishedProject(project) {
      this.projects.unshift(project)
      const savedProjects = this.projects.filter((item) => String(item.id).startsWith('published-'))
      localStorage.setItem('afrimatch-published-projects', JSON.stringify(savedProjects))
    },
    loadPendingProjects() {
      const savedProjects = localStorage.getItem('afrimatch-pending-projects')

      if (!savedProjects) return

      try {
        this.pendingProjects = JSON.parse(savedProjects)
      } catch {
        localStorage.removeItem('afrimatch-pending-projects')
      }
    },
    submitProjectForReview(project) {
      this.pendingProjects.unshift(project)
      localStorage.setItem('afrimatch-pending-projects', JSON.stringify(this.pendingProjects))
    },
    approvePendingProject(projectId) {
      const projectIndex = this.pendingProjects.findIndex((project) => project.id === projectId)

      if (projectIndex === -1) return

      const [approvedProject] = this.pendingProjects.splice(projectIndex, 1)
      this.addPublishedProject({
        ...approvedProject,
        id: approvedProject.id.replace('pending-', 'published-'),
        status: 'published',
      })
      localStorage.setItem('afrimatch-pending-projects', JSON.stringify(this.pendingProjects))
    },
    loadPendingPartnerRequests() {
      const savedRequests = localStorage.getItem('afrimatch-pending-partner-requests')

      if (!savedRequests) return

      try {
        this.pendingPartnerRequests = JSON.parse(savedRequests)
      } catch {
        localStorage.removeItem('afrimatch-pending-partner-requests')
      }
    },
    submitPartnerRequestForReview(request) {
      this.pendingPartnerRequests.unshift(request)
      localStorage.setItem(
        'afrimatch-pending-partner-requests',
        JSON.stringify(this.pendingPartnerRequests),
      )
    },
  },
})
