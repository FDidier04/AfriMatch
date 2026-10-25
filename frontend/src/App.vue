<script setup>
import { computed, nextTick, onMounted, ref } from 'vue'
import {
  ArrowRight,
  BriefcaseBusiness,
  Eye,
  EyeOff,
  Handshake,
  LockKeyhole,
  Mail,
  Newspaper,
  Search,
  Send,
  Target,
  UsersRound,
  UserPlus,
} from 'lucide-vue-next'
import { useProjectsStore } from './stores/projects'

const store = useProjectsStore()
const currentPage = ref('home')
const language = ref('fr')
const projectFilters = ref({
  search: '',
  country: 'Tous',
  city: 'Toutes',
  sector: 'Tous',
  cost: 'Tous',
})
const defaultProjectForm = () => ({
  title: '',
  company: '',
  sector: '',
  country: '',
  city: '',
  launchDate: '',
  website: '',
  description: '',
  problem: '',
  products: '',
  clients: '',
  employees: '',
  stage: '',
  revenue: '',
  profitEstimate: '',
  currentPartners: '',
  partnershipType: '',
    fundingAmount: '',
  partnerExpectations: '',
  partnerContribution: '',
  contactName: '',
  contactRole: '',
  email: '',
  phone: '',
  linkedin: '',
  confirmed: false,
})
const projectForm = ref(defaultProjectForm())
const projectSubmissionSent = ref(false)
const defaultPartnerForm = () => ({
  status: '',
  name: '',
  profession: '',
  organization: '',
  country: '',
  city: '',
  email: '',
  phone: '',
  presentation: '',
  consent: false,
})
const partnerForm = ref(defaultPartnerForm())
const partnerSubmissionSent = ref(false)
const selectedProject = ref(null)
const matchRequestSent = ref(false)
const accountCreationSent = ref(false)
const signupForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  birthDate: '',
  phone: '',
  password: '',
  confirmPassword: '',
  consent: false,
})
const signupSubmitted = ref(false)
const signupAttempted = ref(false)
const showSignupPassword = ref(false)
const showSignupConfirmation = ref(false)

const signupErrors = computed(() => {
  const errors = {}
  const email = signupForm.value.email.trim()

  if (!email) errors.email = "L'adresse e-mail est obligatoire."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Saisissez une adresse e-mail valide."

  if (!signupForm.value.password) errors.password = 'Le mot de passe est obligatoire.'
  else if (signupForm.value.password.length < 8) errors.password = 'Le mot de passe doit contenir au moins 8 caracteres.'

  if (!signupForm.value.confirmPassword) errors.confirmPassword = 'La confirmation du mot de passe est obligatoire.'
  else if (signupForm.value.password !== signupForm.value.confirmPassword) errors.confirmPassword = 'Les mots de passe ne correspondent pas.'

  return errors
})

const copy = computed(() => {
  const content = {
    fr: {
      navHome: 'Accueil',
      navProjects: 'Projet',
      navNews: 'Actualite',
      navContact: 'Nous contacter',
      navTrust: "Je m'inspire",
      navLogin: 'Connexion',
      signup: "Je m'inscris",
      publishProject: 'Publier un projet',
      becomePartner: 'Devenir partenaire',
      eyebrow: 'Plateforme B2B Afrique francophone',
      heroTitle: 'Projets reels, partenaires qualifies.',
      team: 'Equipe',
      objective: 'Objectif',
      documents: 'Documents',
      contactOwner: 'Contacter',
      bestMatch: 'Meilleur match',
      verifiedProject: 'Projet verifie',
      whyMatch: 'Pourquoi ce match',
      reasonCountry: 'Pays cible compatible',
      reasonSector: 'Secteur prioritaire',
      reasonNeed: 'Besoin clairement exprime',
      requestIntro: 'Demander une mise en relation',
      partners: 'Ils nous font confiance',
      partnersTitle: 'Nos partenaires',
      fullName: 'Nom complet',
      email: 'Email professionnel',
      ownerProfile: 'Je suis porteur de projet',
      partnerProfile: 'Je suis partenaire',
      loginEyebrow: 'Espace utilisateur',
      loginTitle: 'Connexion',
      backProjects: "Retour a l'accueil",
      loginIdentifier: 'Login ou email',
      password: 'Mot de passe',
      resetAccess: "J'ai oublie mon login ou mon mot de passe",
      resetHelp: 'Cochez cette case pour recevoir une procedure de reinitialisation du compte.',
      continue: 'Se connecter',
      signupEyebrow: 'Rejoindre Afrimatch',
      signupTitle: 'Creer mon compte',
      signupIntro: 'Quelques informations suffisent pour commencer a creer des connexions utiles.',
      birthDate: 'Date de naissance',
      confirmPassword: 'Confirmer le mot de passe',
      signupConsent: "J'accepte les conditions d'utilisation et la politique de confidentialite.",
      createAccount: 'Creer mon compte',
      alreadyRegistered: 'Vous avez deja un compte ?',
      signupSuccess: 'Votre compte a bien ete cree. Vous pouvez maintenant vous connecter.',
      matchShort: 'Match',
      contactTitle: 'Nous contacter',
      contactIntro:
        'Vous avez une question, une proposition de partenariat ou un projet a partager ? Ce formulaire est fait pour vous.',
      firstName: 'Prenom',
      lastName: 'Nom',
      phone: 'Telephone',
      quality: 'Qualite',
      choose: '-- Choisir --',
      qualityOwner: 'Porteur de projet',
      qualityPartner: 'Partenaire',
      qualityInvestor: 'Investisseur',
      qualityInstitution: 'Institution',
      qualityOther: 'Autre',
      needLabel: 'Votre besoin',
      needInfo: "Demande d'informations",
      needPartnership: 'Partenariat',
      needProject: 'Soumettre un projet',
      needSupport: 'Support technique',
      subject: 'Sujet',
      message: 'Message',
      newsletter: 'Je souhaite recevoir les actualites Afrimatch.',
      sendMessage: 'Envoyer',
      followers: 'Ils nous suivent',
      newsletterTitle: 'Nous avons aussi une newsletter.',
      newsletterPlaceholder: 'Votre adresse email',
    },
    en: {
      navHome: 'Home',
      navProjects: 'Project',
      navNews: 'News',
      navContact: 'Contact us',
      navTrust: 'Get inspired',
      navLogin: 'Sign in',
      signup: 'Sign up',
      publishProject: 'Publish a project',
      becomePartner: 'Become a partner',
      eyebrow: 'Francophone Africa B2B platform',
      heroTitle: 'Real projects, qualified partners.',
      team: 'Team',
      objective: 'Goal',
      documents: 'Documents',
      contactOwner: 'Contact',
      bestMatch: 'Best match',
      verifiedProject: 'Verified project',
      whyMatch: 'Why this match',
      reasonCountry: 'Compatible target country',
      reasonSector: 'Priority sector',
      reasonNeed: 'Clearly expressed need',
      requestIntro: 'Request an introduction',
      partners: 'Trusted by',
      partnersTitle: 'Our partners',
      fullName: 'Full name',
      email: 'Professional email',
      ownerProfile: 'I am a project owner',
      partnerProfile: 'I am a partner',
      loginEyebrow: 'User workspace',
      loginTitle: 'Sign in',
      backProjects: 'Back to home',
      loginIdentifier: 'Login or email',
      password: 'Password',
      resetAccess: 'I forgot my login or password',
      resetHelp: 'Tick this box to receive the account reset procedure.',
      continue: 'Sign in',
      signupEyebrow: 'Join Afrimatch',
      signupTitle: 'Create my account',
      signupIntro: 'A few details are all you need to start building valuable connections.',
      birthDate: 'Birth date',
      confirmPassword: 'Confirm password',
      signupConsent: 'I accept the terms of use and privacy policy.',
      createAccount: 'Create my account',
      alreadyRegistered: 'Already have an account?',
      signupSuccess: 'Your account has been created. You can now sign in.',
      matchShort: 'Match',
      contactTitle: 'Contact us',
      contactIntro:
        'Have a question, a partnership proposal or a project to share? This form is for you.',
      firstName: 'First name',
      lastName: 'Last name',
      phone: 'Phone',
      quality: 'Profile',
      choose: '-- Choose --',
      qualityOwner: 'Project owner',
      qualityPartner: 'Partner',
      qualityInvestor: 'Investor',
      qualityInstitution: 'Institution',
      qualityOther: 'Other',
      needLabel: 'Your need',
      needInfo: 'Information request',
      needPartnership: 'Partnership',
      needProject: 'Submit a project',
      needSupport: 'Technical support',
      subject: 'Subject',
      message: 'Message',
      newsletter: 'I want to receive Afrimatch updates.',
      sendMessage: 'Send',
      followers: 'They follow us',
      newsletterTitle: 'We also have a newsletter.',
      newsletterPlaceholder: 'Your email address',
    },
  }

  return content[language.value]
})

const openHome = () => {
  currentPage.value = 'home'
  window.location.hash = 'accueil'
}

const openLogin = () => {
  currentPage.value = 'login'
  window.location.hash = 'connexion'
}

const openSignup = () => {
  currentPage.value = 'signup'
  signupSubmitted.value = false
  signupAttempted.value = false
  window.location.hash = 'inscription'
}

const submitSignup = () => {
  signupAttempted.value = true
  if (Object.keys(signupErrors.value).length > 0) return
  signupSubmitted.value = true
}

const openContact = () => {
  currentPage.value = 'contact'
  window.location.hash = 'contact'
}

const openNews = async () => {
  currentPage.value = 'home'
  window.location.hash = 'actualites'
  await nextTick()
  document.getElementById('actualites')?.scrollIntoView({ behavior: 'smooth' })
}

const openProjectForm = () => {
  currentPage.value = 'project-form'
  projectSubmissionSent.value = false
  window.location.hash = 'presenter-projet'
}

const openPartnerForm = () => {
  currentPage.value = 'partner-form'
  partnerSubmissionSent.value = false
  window.location.hash = 'devenir-partenaire'
}

const openProjectMatch = (project) => {
  selectedProject.value = project
  matchRequestSent.value = false
  accountCreationSent.value = false
  currentPage.value = 'match-access'
  window.location.hash = `acces-match-${project.id}`
}

const openMatchForm = () => {
  if (!selectedProject.value) return

  matchRequestSent.value = false
  currentPage.value = 'project-match'
  window.location.hash = `matcher-${selectedProject.value.id}`
}

const submitAccountCreation = () => {
  accountCreationSent.value = true
}

const submitMatchRequest = () => {
  matchRequestSent.value = true
}

const getProjectCostRange = (amount) => {
  const numericAmount = Number(String(amount).replace(/[^\d]/g, ''))

  if (!numericAmount) return 'A preciser'
  if (numericAmount < 500000) return 'Moins de 500 000 FCFA'
  if (numericAmount < 2000000) return 'De 500 000 à 2 000 000 FCFA'
  if (numericAmount < 5000000) return 'De 2 000 000 à 5 000 000 FCFA'
  return 'Plus de 5 000 000 FCFA'
}

const submitProject = () => {
  const partnershipNeed = projectForm.value.partnershipType || 'Partenariat'
  const submittedProject = {
    id: `pending-${Date.now()}`,
    status: 'pending-review',
    title: projectForm.value.title,
    country: projectForm.value.country,
    city: projectForm.value.city,
    sector: projectForm.value.sector,
    need: partnershipNeed,
    stage: projectForm.value.stage,
    cost: getProjectCostRange(projectForm.value.fundingAmount),
    launchDate: projectForm.value.launchDate || 'A preciser',
    revenue: projectForm.value.revenue || 'A preciser',
    previousRevenueEstimate: projectForm.value.profitEstimate || 'A preciser',
    score: 74,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=70',
    summary: projectForm.value.description,
    traction: projectForm.value.clients
      ? `${projectForm.value.clients} clients actuels`
      : 'Projet recemment publie',
    team: projectForm.value.employees
      ? `${projectForm.value.employees} employes`
      : projectForm.value.contactRole,
    objectives: projectForm.value.partnerExpectations,
    documents: ['Fiche projet publiee'],
    submittedAt: new Date().toISOString(),
  }

  store.submitProjectForReview(submittedProject)
  projectForm.value = defaultProjectForm()
  projectSubmissionSent.value = true
}

const submitPartner = () => {
  store.submitPartnerRequestForReview({
    id: `partner-request-${Date.now()}`,
    status: 'pending-review',
    ...partnerForm.value,
    submittedAt: new Date().toISOString(),
  })
  partnerForm.value = defaultPartnerForm()
  partnerSubmissionSent.value = true
}

onMounted(() => {
  store.loadPublishedProjects()
  store.loadPendingProjects()
  store.loadPendingPartnerRequests()
  currentPage.value =
    window.location.hash === '#connexion'
      ? 'login'
      : window.location.hash === '#inscription'
        ? 'signup'
      : window.location.hash === '#contact'
        ? 'contact'
        : window.location.hash === '#presenter-projet'
          ? 'project-form'
          : window.location.hash === '#devenir-partenaire'
            ? 'partner-form'
            : 'home'
})

const trustedPartners = computed(() => [...store.partners, ...store.partners])

const cityOptions = computed(() => {
  if (projectFilters.value.country === 'Tous') return store.cities

  return store.countryCities[projectFilters.value.country] ?? []
})

const filteredProjects = computed(() => {
  const search = projectFilters.value.search.trim().toLowerCase()

  return store.projects.filter((project) => {
    const searchable = [
      project.title,
      project.city,
      project.country,
      project.sector,
      project.need,
      project.stage,
      project.cost,
    ]
      .join(' ')
      .toLowerCase()

    return (
      (!search || searchable.includes(search)) &&
      (projectFilters.value.country === 'Tous' ||
        project.country === projectFilters.value.country) &&
      (projectFilters.value.city === 'Toutes' || project.city === projectFilters.value.city) &&
      (projectFilters.value.sector === 'Tous' || project.sector === projectFilters.value.sector) &&
      (projectFilters.value.cost === 'Tous' || project.cost === projectFilters.value.cost)
    )
  })
})

const howSteps = [
  {
    number: '1',
    title: 'Creez votre compte',
    text: 'Inscrivez-vous sur AfriMatch et indiquez votre statut : porteur de projet ou partenaire.',
  },
  {
    number: '2',
    title: 'Presentez votre projet',
    text:
      'Decrivez votre projet, deja lance ou en cours de lancement, ainsi que vos realisations et vos besoins.',
  },
  {
    number: '3',
    title: 'Nous verifions votre projet',
    text:
      'Notre equipe examine les informations fournies avant publication. Votre projet est mis en ligne sous 48h apres validation.',
  },
  {
    number: '4',
    title: 'Rencontrez des partenaires',
    text:
      'Votre projet est presente a des partenaires interesses : investisseurs, entreprises, experts, fournisseurs ou futurs associes.',
  },
  {
    number: '5',
    title: 'Collaborez et developpez votre projet',
    text:
      "Echangez, construisez votre partenariat et beneficiez du suivi d'AfriMatch tout au long de la collaboration.",
  },
]

const platformStats = [
  { value: '+250', label: 'Projets qualifies' },
  { value: '+400', label: 'Mises en relation' },
  { value: '+20', label: 'Pays couverts' },
  { value: '+100', label: 'Partenaires actifs' },
  { value: '+50', label: 'Investisseurs et experts' },
  { value: '+120', label: 'Opportunites suivies' },
]

const values = [
  {
    title: 'Serieux',
    text: 'Nous mettons en avant uniquement des projets reels, deja lances ou en phase avancee.',
    image:
      'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=900&q=75',
  },
  {
    title: 'Connexion',
    text: 'Nous rapprochons les porteurs de projets des partenaires capables de creer un impact concret.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=75',
  },
  {
    title: 'Impact durable',
    text: 'Chaque mise en relation doit soutenir une croissance utile, inclusive et durable en Afrique.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=75',
  },
]

</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <a class="brand" href="#accueil" aria-label="Afrimatch accueil" @click.prevent="openHome">
        <span class="brand-mark"><Handshake :size="30" :stroke-width="2.4" /></span>
        <span>Afrimatch</span>
      </a>

      <nav class="main-nav" aria-label="Navigation principale">
        <a href="#accueil" @click="currentPage = 'home'">{{ copy.navHome }}</a>
        <a href="#projets" @click="currentPage = 'home'">{{ copy.navProjects }}</a>
        <a href="#actualites" @click.prevent="openNews">{{ copy.navNews }}</a>
        <a href="#contact" @click.prevent="openContact">{{ copy.navContact }}</a>
      </nav>

      <div class="top-actions">
        <a class="primary-button" href="#inscription" @click.prevent="openSignup">
          <span>{{ copy.signup }}</span>
          <ArrowRight :size="17" />
        </a>
        <a class="ghost-button" href="#connexion" @click.prevent="openLogin">{{ copy.navLogin }}</a>
      </div>
    </header>

    <main v-if="currentPage === 'home'">
      <section id="accueil" class="hero-stage">
        <div class="hero-visual">
          <div class="hero-copy-panel">
            <span class="paint-stroke"></span>
            <h1>Des projets ancres en Afrique, des partenaires sans frontieres.</h1>
            <p>
              AfriMatch connecte les projets concrets aux partenaires capables de les faire grandir.
            </p>
            <strong>Connectez-vous. Collaborez. Developpez.</strong>
          </div>
          <div class="hero-photo" aria-hidden="true"></div>
        </div>

        <div class="hero-choice-row">
          <a class="choice-card choice-project" href="#presenter-projet" @click.prevent="openProjectForm">
            <span class="choice-icon"><BriefcaseBusiness :size="34" /></span>
            <strong>J'ai un PROJET<br />A PRESENTER</strong>
            <ArrowRight :size="34" />
          </a>
          <a class="choice-card choice-partner" href="#devenir-partenaire" @click.prevent="openPartnerForm">
            <span class="choice-icon"><Target :size="34" /></span>
            <strong>Je veux devenir<br />PARTENAIRE</strong>
            <ArrowRight :size="34" />
          </a>
        </div>
      </section>

      <section class="welcome-section">
        <div class="confetti" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1>Bienvenue sur AfriMatch</h1>
        <h2>
          La plateforme qui connecte les porteurs de projets en Afrique a des partenaires
          strategiques
        </h2>
        <p>
          AfriMatch valorise des projets reels, deja lances et implantes sur le continent africain.
          La plateforme facilite leur mise en relation avec des investisseurs, entreprises, ONG,
          experts et institutions situes dans le meme pays, ailleurs en Afrique ou a
          l'international.
        </p>
      </section>

      <section id="projets" class="projects-section">
        <div class="section-heading">
          <h2>Les projets prêts à la collaboration</h2>
        </div>

        <div class="project-intro">
          <h3>Des projets ancres en Afrique, des partenaires sans frontieres.</h3>
        </div>

        <div class="project-search-panel">
          <label class="project-search-field" for="project-search">
            <Search :size="21" />
            <input
              id="project-search"
              v-model="projectFilters.search"
              type="search"
              placeholder="Rechercher un projet, un pays ou un secteur"
            />
          </label>
          <div class="project-filter-grid">
            <label>
              <span>Pays</span>
              <select v-model="projectFilters.country" @change="projectFilters.city = 'Toutes'">
                <option>Tous</option>
                <option v-for="country in store.countries" :key="country">{{ country }}</option>
              </select>
            </label>
            <label>
              <span>Ville</span>
              <select v-model="projectFilters.city">
                <option>Toutes</option>
                <option v-for="city in cityOptions" :key="city">{{ city }}</option>
              </select>
            </label>
            <label>
              <span>Secteur</span>
              <select v-model="projectFilters.sector">
                <option>Tous</option>
                <option v-for="sector in store.sectors" :key="sector">{{ sector }}</option>
              </select>
            </label>
            <label>
              <span>Cout du projet</span>
              <select v-model="projectFilters.cost">
                <option>Tous</option>
                <option v-for="cost in store.costs" :key="cost">{{ cost }}</option>
              </select>
            </label>
          </div>
        </div>

        <div class="territory-grid">
          <article v-for="project in filteredProjects" :key="project.id" class="territory-card">
            <div class="territory-image">
              <img :src="project.image" :alt="project.title" loading="lazy" />
            </div>
            <div class="territory-body">
              <div>
                <h2>{{ project.title }}</h2>
                <p>{{ project.city }}, {{ project.country }}</p>
                <p>{{ project.sector }}</p>
                <span class="project-people">
                  <UsersRound :size="18" />
                  {{ project.score }} personnes ont matche
                </span>
                <button class="match-button" type="button" @click="openProjectMatch(project)">
                  Matcher
                  <ArrowRight :size="17" />
                </button>
              </div>
              <div class="project-map" aria-hidden="true">
                <span></span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="how-afrimatch-section">
        <div class="how-heading">
          <h2>Comment <span>ca marche&nbsp;?</span></h2>
        </div>
        <div class="how-step-grid">
          <article v-for="step in howSteps" :key="step.number" class="how-step-card">
            <span class="how-step-number">{{ step.number }}</span>
            <div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
          </article>
        </div>
        <div class="stats-strip">
          <article v-for="stat in platformStats" :key="stat.label" class="stat-item">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </article>
        </div>
      </section>

      <section id="partenaires" class="band">
        <div class="section-heading">
          <p class="eyebrow">{{ copy.partners }}</p>
          <h2>{{ copy.partnersTitle }}</h2>
        </div>
        <div class="trust-marquee" :aria-label="copy.partners">
          <div class="trust-track">
            <article
              v-for="(partner, index) in trustedPartners"
              :key="`${partner.name}-${index}`"
              class="trust-logo-card"
            >
              <img :src="partner.logo" :alt="partner.name" loading="lazy" />
            </article>
          </div>
        </div>
      </section>

      <section class="values-section">
        <div class="section-heading">
          <p class="eyebrow">Ce qui nous guide</p>
          <h2>Nos valeurs</h2>
        </div>
        <div class="values-grid">
          <article v-for="value in values" :key="value.title" class="value-card">
            <img :src="value.image" :alt="value.title" loading="lazy" />
            <div class="value-overlay">
              <h3>{{ value.title }}</h3>
              <p>{{ value.text }}</p>
            </div>
          </article>
        </div>
        <div class="values-quote">
          <span>"</span>
          <p>
            La reussite d'un projet africain repose sur une vision claire, des partenaires
            de confiance et une collaboration qui s'inscrit dans la duree.
          </p>
        </div>
      </section>

      <section id="actualites" class="news-section">
        <div class="section-heading">
          <p class="eyebrow">Actualite</p>
          <h2>Dernieres nouvelles Afrimatch</h2>
        </div>
        <div class="news-grid">
          <article v-for="article in store.articles" :key="article.title" class="news-card">
            <img
              :src="article.image"
              :alt="article.title"
              :class="{ 'book-cover-image': article.imageType === 'book' }"
              loading="lazy"
            />
            <p class="card-kicker">{{ article.category }}</p>
            <h3>{{ article.title }}</h3>
            <strong>{{ article.subtitle }}</strong>
            <p>{{ article.text }}</p>
            <a class="news-link" :href="article.link" target="_blank" rel="noopener noreferrer">
              {{ article.button }}
              <ArrowRight :size="16" />
            </a>
          </article>
        </div>
      </section>

    </main>

    <main v-else-if="currentPage === 'match-access' && selectedProject" class="match-access-page">
      <section class="match-access-hero">
        <div class="contact-heading">
          <p class="eyebrow">Acces au matching</p>
          <h1>Matcher avec {{ selectedProject.title }}</h1>
          <p>
            Pour proteger les porteurs de projets, AfriMatch reserve la mise en relation aux
            utilisateurs identifies.
          </p>
        </div>

        <div class="match-access-grid">
          <article class="account-choice-card">
            <h2>J'ai deja un compte</h2>
            <p>Accedez directement a la fiche de mise en relation du projet.</p>
            <button class="primary-button" type="button" @click="openMatchForm">
              Voir la fiche
              <ArrowRight :size="18" />
            </button>
          </article>

          <form class="account-choice-card account-create-form" @submit.prevent="submitAccountCreation">
            <div v-if="accountCreationSent" class="review-confirmation" role="status">
              <strong>Compte en cours de creation.</strong>
              <p>Vous pourrez ensuite acceder a la fiche de mise en relation.</p>
            </div>
            <h2>Je n'ai pas encore de compte</h2>
            <p>Creez votre compte pour demander une mise en relation qualifiee.</p>
            <input type="text" placeholder="Nom complet" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Telephone" required />
            <select required>
              <option value="">Profil</option>
              <option>Porteur de projet</option>
              <option>Partenaire</option>
              <option>Investisseur</option>
              <option>Expert</option>
              <option>Institution</option>
            </select>
            <input type="password" placeholder="Mot de passe" required />
            <input type="password" placeholder="Confirmer le mot de passe" required />
            <button class="primary-button" type="submit">
              Creer mon compte
              <LockKeyhole :size="18" />
            </button>
          </form>
        </div>
      </section>
    </main>

    <main v-else-if="currentPage === 'project-match' && selectedProject" class="project-match-page">
      <section class="project-match-hero">
        <button class="text-button" type="button" @click="openHome">
          Retour aux projets
          <ArrowRight :size="16" />
        </button>

        <div class="project-match-layout">
          <article class="project-match-summary">
            <img :src="selectedProject.image" :alt="selectedProject.title" />
            <div>
              <p class="eyebrow">{{ selectedProject.sector }}</p>
              <h1>{{ selectedProject.title }}</h1>
              <p>{{ selectedProject.city }}, {{ selectedProject.country }}</p>
              <p>{{ selectedProject.summary }}</p>
            </div>
          </article>

          <aside class="project-match-card">
            <h2>Pourquoi matcher ?</h2>
            <div class="project-detail-grid">
              <span><strong>Interets</strong>{{ selectedProject.score }} personnes</span>
              <span><strong>Cout</strong>{{ selectedProject.cost || 'A preciser' }}</span>
              <span><strong>Besoin</strong>{{ selectedProject.need }}</span>
              <span><strong>Date de lancement</strong>{{ selectedProject.launchDate || 'A preciser' }}</span>
              <span><strong>CA precedent estime</strong>{{ selectedProject.previousRevenueEstimate || 'A preciser' }}</span>
              <span><strong>Stade</strong>{{ selectedProject.stage }}</span>
              <span><strong>Traction</strong>{{ selectedProject.traction }}</span>
              <span><strong>Equipe</strong>{{ selectedProject.team }}</span>
            </div>
          </aside>
        </div>

        <div class="match-contact-layout">
          <div class="contact-heading compact-heading">
            <p class="eyebrow">Mise en relation</p>
            <h2>Rencontrer le porteur du projet</h2>
            <p>
              Envoyez une demande de contact. Afrimatch transmettra votre interet au porteur
              du projet pour organiser la suite.
            </p>
          </div>

          <form class="contact-form contact-card" @submit.prevent="submitMatchRequest">
            <div v-if="matchRequestSent" class="review-confirmation" role="status">
              <strong>Demande de match envoyee.</strong>
              <p>Le porteur du projet sera contacte via Afrimatch.</p>
            </div>
            <div class="form-row">
              <input type="text" placeholder="Nom et prenom" required />
              <input type="email" placeholder="Adresse e-mail" required />
            </div>
            <div class="form-row">
              <input type="tel" placeholder="Telephone" required />
              <input type="text" placeholder="Organisation / fonction" />
            </div>
            <textarea placeholder="Expliquez votre interet pour ce projet" required></textarea>
            <button class="primary-button" type="submit">
              Contacter le porteur
              <Send :size="18" />
            </button>
          </form>
        </div>
      </section>
    </main>

    <main v-else-if="currentPage === 'partner-form'" class="project-form-page" id="devenir-partenaire">
      <section class="project-form-hero">
        <div class="contact-heading">
          <p class="eyebrow">Formulaire</p>
          <h1>Je veux devenir partenaire</h1>
          <p>
            Presentez votre profil et le type de partenariat que vous souhaitez proposer
            ou rechercher avec les porteurs de projets Afrimatch.
          </p>
        </div>

        <div v-if="partnerSubmissionSent" class="review-confirmation" role="status">
          <strong>Demande partenaire envoyee.</strong>
          <p>
            L'equipe Afrimatch va examiner votre profil avant de vous mettre en relation
            avec les porteurs de projets concernes.
          </p>
        </div>

        <form class="project-submission-form" @submit.prevent="submitPartner">
          <fieldset class="form-section">
            <legend>Informations generales</legend>
            <label>
              Statut *
              <select v-model="partnerForm.status" required>
                <option value="">Choisir</option>
                <option>Particulier</option>
                <option>Entreprise</option>
                <option>Organisation / ONG</option>
                <option>Investisseur</option>
                <option>Institution publique</option>
                <option>Autre</option>
              </select>
            </label>
            <label>
              Nom et prenom (ou Nom de l'organisation si applicable) *
              <input v-model="partnerForm.name" type="text" required />
            </label>
            <div class="form-row">
              <label>Profession *<input v-model="partnerForm.profession" type="text" required /></label>
              <label>Entreprise / Organisation<input v-model="partnerForm.organization" type="text" /></label>
            </div>
            <div class="form-row">
              <label>Pays *<input v-model="partnerForm.country" type="text" required /></label>
              <label>Ville *<input v-model="partnerForm.city" type="text" required /></label>
            </div>
          </fieldset>

          <fieldset class="form-section">
            <legend>Coordonnees</legend>
            <div class="form-row">
              <label>Adresse e-mail *<input v-model="partnerForm.email" type="email" required /></label>
              <label>Telephone *<input v-model="partnerForm.phone" type="tel" required /></label>
            </div>
          </fieldset>

          <fieldset class="form-section">
            <legend>Presentation</legend>
            <label>
              Presentez-vous et indiquez le type de partenariat que vous souhaitez proposer ou rechercher. *
              <textarea v-model="partnerForm.presentation" required></textarea>
            </label>
            <label class="newsletter-check">
              <input v-model="partnerForm.consent" type="checkbox" required />
              <span>J'accepte d'etre contacte par les porteurs de projets via AfriMatch.</span>
            </label>
          </fieldset>

          <button class="primary-button form-submit-button" type="submit">
            Devenir partenaire
            <Send :size="18" />
          </button>
        </form>
      </section>
    </main>

    <main v-else-if="currentPage === 'project-form'" class="project-form-page" id="presenter-projet">
      <section class="project-form-hero">
        <div class="contact-heading">
          <p class="eyebrow">Formulaire</p>
          <h1 class="project-form-title">Presenter mon projet</h1>
          <p>
            Partagez les informations essentielles pour permettre a Afrimatch de qualifier
            votre projet et de le rapprocher du bon partenaire.
          </p>
          <div class="project-review-note">
            <p>
              Apres son depot, votre projet est examine par l'equipe AfriMatch. Nous verifions les
              informations transmises, l'identite du porteur et les elements permettant de confirmer
              l'existence du projet.
            </p>
            <strong>
              Si les informations sont completes et conformes, le projet est publie sur la
              plateforme sous 48 heures.
            </strong>
          </div>
        </div>

        <div v-if="projectSubmissionSent" class="review-confirmation" role="status">
          <strong>Projet envoye pour verification.</strong>
          <p>
            L'equipe Afrimatch va controler les informations, les medias et la coherence du
            besoin de partenariat. Le projet apparaitra dans le menu principal apres validation
            par les administrateurs.
          </p>
        </div>

        <form class="project-submission-form" @submit.prevent="submitProject">
          <fieldset class="form-section">
            <legend>1. Informations generales</legend>
            <div class="form-row">
              <label>Nom du projet *<input v-model="projectForm.title" type="text" required /></label>
              <label>Nom de l'entreprise (si existante)<input v-model="projectForm.company" type="text" /></label>
            </div>
            <div class="form-row">
              <label>
                Secteur d'activite *
                <select v-model="projectForm.sector" required>
                  <option value="">Choisir</option>
                  <option v-for="sector in store.sectors" :key="sector">{{ sector }}</option>
                </select>
              </label>
              <label>Pays *<input v-model="projectForm.country" type="text" required /></label>
            </div>
            <div class="form-row">
              <label>Ville *<input v-model="projectForm.city" type="text" required /></label>
              <label>Date de lancement du projet *<input v-model="projectForm.launchDate" type="date" required /></label>
            </div>
            <label>Site web (optionnel)<input v-model="projectForm.website" type="url" placeholder="https://" /></label>
          </fieldset>

          <fieldset class="form-section">
            <legend>2. Presentation du projet</legend>
            <label>Description detaillee du projet *<textarea v-model="projectForm.description" required></textarea></label>
            <label>Probleme que le projet resout *<textarea v-model="projectForm.problem" required></textarea></label>
            <label>Produits ou services proposes *<textarea v-model="projectForm.products" required></textarea></label>
            <div class="form-row">
              <label>Nombre de clients actuels<input v-model="projectForm.clients" type="number" min="0" /></label>
              <label>Nombre d'employes<input v-model="projectForm.employees" type="number" min="0" /></label>
            </div>
          </fieldset>

          <fieldset class="form-section">
            <legend>3. Situation actuelle</legend>
            <label>
              Stade du projet *
              <select v-model="projectForm.stage" required>
                <option value="">Choisir</option>
                <option>En activite</option>
                <option>En croissance</option>
                <option>En expansion</option>
                <option>Recherche de developpement</option>
              </select>
            </label>
            <div class="form-row">
              <label>Chiffre d'affaires annuel (optionnel)<input v-model="projectForm.revenue" type="text" /></label>
              <label>Estimation des benefices realises depuis le lancement *<input v-model="projectForm.profitEstimate" type="text" required /></label>
            </div>
            <label>Nombre de partenaires actuels<input v-model="projectForm.currentPartners" type="number" min="0" /></label>
          </fieldset>

          <fieldset class="form-section">
            <legend>4. Recherche de partenariat</legend>
            <label>
              Type de partenariat recherche *
              <select v-model="projectForm.partnershipType" required>
                <option value="">Choisir</option>
                <option>Investisseur</option>
                <option>Associe</option>
                <option>Partenaire commercial</option>
                <option>Partenaire technique</option>
                <option>Distributeur</option>
                <option>Mentor</option>
                <option>Autre</option>
              </select>
            </label>
            <label>Montant recherche (si financement)<input v-model="projectForm.fundingAmount" type="text" /></label>
            <label>Ce que vous attendez du partenaire *<textarea v-model="projectForm.partnerExpectations" required></textarea></label>
            <label>Ce que vous pouvez apporter au partenaire *<textarea v-model="projectForm.partnerContribution" required></textarea></label>
          </fieldset>

          <fieldset class="form-section">
            <legend>5. Medias du projet</legend>
            <label>Photos du projet * (minimum 3 images)<input type="file" accept="image/*" multiple required /></label>
            <label>Logo de l'entreprise (optionnel)<input type="file" accept="image/*" /></label>
            <label>Video de presentation (optionnel)<input type="url" placeholder="Lien YouTube, Vimeo..." /></label>
            <label>Documents de presentation (PDF, Business Plan...)<input type="file" accept=".pdf,.doc,.docx,.ppt,.pptx" multiple /></label>
          </fieldset>

          <fieldset class="form-section">
            <legend>6. Coordonnees</legend>
            <div class="form-row">
              <label>Nom et prenom *<input v-model="projectForm.contactName" type="text" required /></label>
              <label>Fonction *<input v-model="projectForm.contactRole" type="text" required /></label>
            </div>
            <div class="form-row">
              <label>Email *<input v-model="projectForm.email" type="email" required /></label>
              <label>Telephone *<input v-model="projectForm.phone" type="tel" required /></label>
            </div>
            <label>LinkedIn (optionnel)<input v-model="projectForm.linkedin" type="url" placeholder="https://linkedin.com/in/..." /></label>
          </fieldset>

          <fieldset class="form-section">
            <legend>7. Validation</legend>
            <label class="newsletter-check">
              <input v-model="projectForm.confirmed" type="checkbox" required />
              <span>Je certifie que les informations fournies sont exactes.</span>
            </label>
          </fieldset>

          <button class="primary-button form-submit-button" type="submit">
            Soumettre mon projet
            <Send :size="18" />
          </button>
        </form>
      </section>
    </main>

    <main v-else-if="currentPage === 'contact'" class="contact-page" id="contact">
      <section class="contact-hero">
        <div class="contact-heading">
          <h1>{{ copy.contactTitle }}</h1>
          <p>{{ copy.contactIntro }}</p>
        </div>

        <div class="contact-layout">
          <form class="contact-form contact-card">
            <div class="form-row">
              <input type="text" :placeholder="copy.firstName" />
              <input type="text" :placeholder="copy.lastName" />
            </div>
            <div class="form-row">
              <input type="email" :placeholder="copy.email" />
              <input type="tel" :placeholder="copy.phone" />
            </div>
            <div class="form-row">
              <select>
                <option>{{ copy.quality }}</option>
                <option>{{ copy.qualityOwner }}</option>
                <option>{{ copy.qualityPartner }}</option>
                <option>{{ copy.qualityInvestor }}</option>
                <option>{{ copy.qualityInstitution }}</option>
                <option>{{ copy.qualityOther }}</option>
              </select>
              <select>
                <option>{{ copy.needLabel }}</option>
                <option>{{ copy.needInfo }}</option>
                <option>{{ copy.needPartnership }}</option>
                <option>{{ copy.needProject }}</option>
                <option>{{ copy.needSupport }}</option>
              </select>
            </div>
            <input type="text" :placeholder="copy.subject" />
            <textarea :placeholder="copy.message"></textarea>
            <label class="newsletter-check">
              <input type="checkbox" />
              <span>{{ copy.newsletter }}</span>
            </label>
            <button class="primary-button" type="button">
              {{ copy.sendMessage }}
              <Send :size="18" />
            </button>
          </form>

          <aside class="contact-side">
            <div class="contact-follow">
              <p>{{ copy.followers }}</p>
              <ArrowRight :size="30" />
            </div>
            <div class="follow-logos">
              <span>LinkedIn</span>
              <span>WhatsApp</span>
              <span>Email</span>
            </div>
            <div class="newsletter-box">
              <Mail :size="24" />
              <h2>{{ copy.newsletterTitle }}</h2>
              <input type="email" :placeholder="copy.newsletterPlaceholder" />
            </div>
          </aside>
        </div>
      </section>
    </main>

    <main v-else-if="currentPage === 'login'" class="login-page" id="connexion">
      <section class="auth-hero">
        <div>
          <h1>{{ copy.loginTitle }}</h1>
        </div>
        <form class="auth-form auth-card">
          <input type="text" :placeholder="copy.loginIdentifier" />
          <input type="password" :placeholder="copy.password" />
          <label class="reset-check">
            <input type="checkbox" />
            <span>
              {{ copy.resetAccess }}
              <small>{{ copy.resetHelp }}</small>
            </span>
          </label>
          <button class="primary-button" type="button">
            {{ copy.continue }}
            <LockKeyhole :size="18" />
          </button>
        </form>
      </section>
    </main>

    <main v-else class="signup-page" id="inscription">
      <section class="signup-layout">
        <div class="signup-intro">
          <span class="section-kicker">{{ copy.signupEyebrow }}</span>
          <h1>{{ copy.signupTitle }}</h1>
          <p>{{ copy.signupIntro }}</p>
          <div class="signup-benefit">
            <UserPlus :size="28" />
            <span>Projets reels. Partenaires qualifies. Opportunites concretes.</span>
          </div>
        </div>

        <form class="signup-card" @invalid.capture="signupAttempted = true" @submit.prevent="submitSignup">
          <div v-if="signupSubmitted" class="form-success" role="status">
            {{ copy.signupSuccess }}
          </div>
          <div class="signup-name-row">
            <label>
              <span>{{ copy.firstName }}</span>
              <input v-model.trim="signupForm.firstName" type="text" autocomplete="given-name" required />
            </label>
            <label>
              <span>{{ copy.lastName }}</span>
              <input v-model.trim="signupForm.lastName" type="text" autocomplete="family-name" required />
            </label>
          </div>
          <label>
            <span>Email <b aria-hidden="true">*</b></span>
            <input v-model.trim="signupForm.email" type="email" autocomplete="email" required :aria-invalid="signupAttempted && !!signupErrors.email" aria-describedby="signup-email-error" />
            <small v-if="signupAttempted && signupErrors.email" id="signup-email-error" class="field-error">{{ signupErrors.email }}</small>
          </label>
          <div class="signup-name-row">
            <label>
              <span>{{ copy.birthDate }}</span>
              <input v-model="signupForm.birthDate" type="date" autocomplete="bday" required />
            </label>
            <label>
              <span>{{ copy.phone }}</span>
              <input v-model.trim="signupForm.phone" type="tel" autocomplete="tel" required />
            </label>
          </div>
          <label>
            <span>{{ copy.password }} <b aria-hidden="true">*</b></span>
            <span class="password-field">
              <input v-model="signupForm.password" :type="showSignupPassword ? 'text' : 'password'" autocomplete="new-password" minlength="8" required :aria-invalid="signupAttempted && !!signupErrors.password" aria-describedby="signup-password-error" />
              <button type="button" :aria-label="showSignupPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'" @click="showSignupPassword = !showSignupPassword">
                <EyeOff v-if="showSignupPassword" :size="19" />
                <Eye v-else :size="19" />
              </button>
            </span>
            <small v-if="signupAttempted && signupErrors.password" id="signup-password-error" class="field-error">{{ signupErrors.password }}</small>
          </label>
          <label>
            <span>{{ copy.confirmPassword }} <b aria-hidden="true">*</b></span>
            <span class="password-field">
              <input v-model="signupForm.confirmPassword" :type="showSignupConfirmation ? 'text' : 'password'" autocomplete="new-password" minlength="8" required :aria-invalid="signupAttempted && !!signupErrors.confirmPassword" aria-describedby="signup-confirmation-error" />
              <button type="button" :aria-label="showSignupConfirmation ? 'Masquer la confirmation' : 'Afficher la confirmation'" @click="showSignupConfirmation = !showSignupConfirmation">
                <EyeOff v-if="showSignupConfirmation" :size="19" />
                <Eye v-else :size="19" />
              </button>
            </span>
            <small v-if="(signupAttempted || signupForm.confirmPassword) && signupErrors.confirmPassword" id="signup-confirmation-error" class="field-error">{{ signupErrors.confirmPassword }}</small>
          </label>
          <label class="signup-consent">
            <input v-model="signupForm.consent" type="checkbox" required />
            <span>{{ copy.signupConsent }}</span>
          </label>
          <button class="primary-button signup-submit" type="submit">
            {{ copy.createAccount }}
            <ArrowRight :size="18" />
          </button>
          <p class="signup-login-link">
            {{ copy.alreadyRegistered }}
            <a href="#connexion" @click.prevent="openLogin">{{ copy.navLogin }}</a>
          </p>
        </form>
      </section>
    </main>

    <nav class="mobile-nav" aria-label="Navigation mobile">
      <a href="#accueil" @click.prevent="openHome"><Search :size="19" />{{ copy.navHome }}</a>
      <a href="#projets" @click="currentPage = 'home'">
        <BriefcaseBusiness :size="19" />{{ copy.navProjects }}
      </a>
      <a href="#actualites" @click.prevent="openNews">
        <Newspaper :size="19" />{{ copy.navNews }}
      </a>
      <a href="#connexion" @click.prevent="openLogin">
        <LockKeyhole :size="19" />{{ copy.navLogin }}
      </a>
      <a href="#contact" @click.prevent="openContact">
        <Mail :size="19" />Contact
      </a>
      <button type="button" @click="language = language === 'fr' ? 'en' : 'fr'">
        {{ language === 'fr' ? 'EN' : 'FR' }}
      </button>
    </nav>

    <footer class="site-footer">
      <div class="footer-main">
        <a class="footer-brand" href="#accueil" @click.prevent="openHome">
          <span class="brand-mark"><Handshake :size="24" :stroke-width="2.4" /></span>
          <strong>Afrimatch</strong>
        </a>
        <div>
          <p>Afrique francophone</p>
          <p>Plateforme de mise en relation projets et partenaires</p>
          <p>Lun - Ven · 8h00 - 17h00</p>
        </div>
        <div>
          <p>T : +242 06 647 9724</p>
          <p>E : contact@afrimatch.africa</p>
        </div>
        <div class="footer-social">
          <a href="#actualites" aria-label="Facebook"><span>f</span></a>
          <a href="#partenaires" aria-label="LinkedIn"><span>in</span></a>
          <a href="#actualites" aria-label="X"><span>x</span></a>
          <a href="#actualites" aria-label="YouTube"><span>▶</span></a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Afrimatch. Tous droits reserves.</span>
        <a href="#accueil">Mentions legales</a>
        <a href="#accueil">Confidentialite</a>
        <a href="#accueil">Conditions d'utilisation</a>
      </div>
    </footer>
  </div>
</template>
