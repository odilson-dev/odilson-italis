import type { Translations } from "../types";

const wordCycle = (
  ideas: string,
  concepts: string,
  designs: string,
  code: string,
) => [
  { text: ideas, imgPath: "/images/ideas.svg" },
  { text: concepts, imgPath: "/images/concepts.svg" },
  { text: designs, imgPath: "/images/designs.svg" },
  { text: code, imgPath: "/images/code.svg" },
  { text: ideas, imgPath: "/images/ideas.svg" },
  { text: concepts, imgPath: "/images/concepts.svg" },
  { text: designs, imgPath: "/images/designs.svg" },
  { text: code, imgPath: "/images/code.svg" },
];

export const fr: Translations = {
  meta: {
    documentTitle: "Odilson Italis — Développeur FullStack",
  },
  nav: {
    role: "Développeur FullStack",
    resume: "CV",
    hireMe: "Embauchez-moi",
  },
  navLinks: [
    { name: "À propos", link: "#about" },
    { name: "Projets", link: "#work" },
    { name: "Expérience", link: "#experience" },
    { name: "Compétences", link: "#skills" },
    { name: "Témoignages", link: "#testimonials" },
    { name: "Communauté", link: "#community" },
  ],
  hero: {
    shaping: "Transformer",
    intoRealProjects: "en Projets Concrets",
    thatDeliverResults: "qui Génèrent des Résultats",
    bio: "Salut, je suis Odilson. Je crée des applications web et mobiles qui transforment les visiteurs en clients.",
    cta: "Voir mes projets",
  },
  words: wordCycle("Idées", "Concepts", "Designs", "Code"),
  about: {
    title: "À propos de moi",
    sub: "👨‍💻 Qui je suis",
    paragraphs: [
      "Bonjour ! Je suis Odilson, un développeur passionné dédié à la création d'expériences numériques exceptionnelles. Avec une solide base en technologies web et mobiles, j'excelle à transformer des problèmes complexes en solutions élégantes et conviviales.",
      "Mon parcours dans la tech est guidé par la curiosité et une envie constante d'apprendre. Que ce soit pour concevoir des interfaces front-end réactives ou architecturer des systèmes back-end robustes, j'aborde chaque projet avec un souci de qualité, de performance et d'évolutivité.",
      "Quand je ne code pas, vous me trouverez en train d'explorer de nouvelles technologies, de contribuer à des projets open source ou de partager mes connaissances avec la communauté. Je suis aussi membre du",
    ],
    communityLink: "Coding Club Cayes",
    communitySuffix:
      ", contribuant à faire grandir l'écosystème tech haïtien dans le sud.",
    viewWork: "Voir mes projets",
  },
  counterItems: [
    { value: 15, suffix: "+", label: "Années d'expérience" },
    { value: 200, suffix: "+", label: "Clients satisfaits" },
    { value: 108, suffix: "+", label: "Projets réalisés" },
    { value: 90, suffix: "%", label: "Taux de fidélisation" },
  ],
  showcase: {
    title: "Projets en vedette",
    sub: "🚀 Mon travail",
    github: "GitHub",
    liveView: "Voir en ligne",
  },
  projects: [
    {
      id: "not-whatsapp",
      title: "Not WhatsApp — Messagerie temps réel avec Convex",
      description:
        "Une appli de chat inspirée de WhatsApp : messages 1:1 et groupes, statuts, accusés de lecture, présence et panneau d'admin — Next.js 16, Convex et Clerk.",
      imgPath: "/images/project-not-whatsapp.png",
      githubUrl: "https://github.com/odilson-dev/whatsapp-clone",
      liveUrl: "https://not-whatsapp-three.vercel.app",
      stars: 0,
      forks: 0,
    },
    {
      id: "rplace-convex",
      title: "r/place × Convex — Toile collaborative en temps réel",
      description:
        "Une toile collaborative style r/place avec synchronisation instantanée via Convex — requêtes réactives, mutations groupées et UI optimiste sur Next.js 16 & React 19.",
      imgPath: "/images/project-rplace-convex.png",
      bgColor: "#FFF5E1",
      githubUrl: "https://github.com/odilson-dev/rpkace-convex",
      liveUrl: "https://rplace-convex-lime.vercel.app/",
      stars: 0,
      forks: 0,
    },
    {
      id: "yc-directory",
      title: "YC Directory — Application vitrine de startups",
      description:
        "Une plateforme pour découvrir et mettre en avant des startups innovantes.",
      imgPath: "/images/project3.png",
      bgColor: "#FFE7EB",
      githubUrl: "https://github.com/odilson-dev/yc-directory",
      liveUrl: "https://yc-directory-demo.com",
      stars: 210,
      forks: 64,
    },
  ],
  abilities: [
    {
      imgPath: "/images/seo.png",
      title: "Focus qualité",
      desc: "Des résultats de haute qualité avec une attention portée à chaque détail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Communication fiable",
      desc: "Vous tenir informé à chaque étape pour garantir transparence et clarté.",
    },
    {
      imgPath: "/images/time.png",
      title: "Livraison dans les délais",
      desc: "Des projets livrés à temps, avec qualité et souci du détail.",
    },
  ],
  experience: {
    title: "Expérience professionnelle",
    sub: "💼 Mon parcours",
    responsibilities: "Responsabilités",
  },
  expCards: [
    {
      review:
        "Odilson a apporté créativité et expertise technique à l'équipe, améliorant significativement les performances front-end. Son travail a été inestimable pour offrir des expériences plus rapides.",
      imgPath: "/images/logos/creaticshub_2.png",
      logoPath: "/images/logos/creaticshub_1.png",
      title: "Développeur Frontend",
      date: "Novembre 2024 - Présent",
      responsibilities: [
        "Développement et maintenance des fonctionnalités de l'application web CreaticsHub.",
        "Collaboration étroite avec les designers UI/UX pour des expériences utilisateur fluides.",
        "Optimisation des applications web pour une vitesse et une évolutivité maximales.",
      ],
    },
    {
      review:
        "Sur AGRONOU, Odilson a été un véritable atout. Son sens des responsabilités ressort : il vise les résultats, pas seulement les tâches. Il creuse le pourquoi, pose des questions pertinentes sur les défis en Haïti et dans les Caraïbes, et construit pour les vrais besoins des utilisateurs.",
      imgPath: "/images/logos/nou-logo.svg",
      logoPath: "/images/logos/nou-logo.svg",
      logoBgColor: "#F7F3EB",
      title: "Développeur Full-Stack · AGRONOU (NOU Marketplace)",
      date: "Juin 2026 - Présent",
      responsibilities: [
        "Conception des tableaux de bord admin et vendeur pour NOU — marketplace multi-vendeurs pour les PME haïtiennes (Next.js, Convex, Clerk).",
        "Livraison de la gestion produits, de la vérification des entreprises et des parcours multi-devises sur le web et l'app Expo.",
        "Intégration des e-mails transactionnels (Resend), de la sync auth et des flux marketplace liés aux paiements (Stripe, MonCash, PayPal).",
      ],
    },
  ],
  techStack: {
    title: "Comment je peux contribuer & mes compétences clés",
    sub: "🤝 Ce que j'apporte",
  },
  techStackImgs: [
    {
      name: "Développeur React",
      imgPath: "/images/logos/react.png",
      level: 95,
    },
    {
      name: "Développeur Next.js",
      imgPath: "/images/logos/nextjs-logo.png",
      level: 90,
    },
    {
      name: "Développeur Backend",
      imgPath: "/images/logos/node.png",
      level: 85,
    },
    {
      name: "Développeur Expo",
      imgPath: "/images/logos/expo.jpeg",
      level: 80,
    },
    {
      name: "Chef de projet",
      imgPath: "/images/logos/git.svg",
      level: 85,
    },
  ],
  testimonials: {
    title: "Ce que les gens disent de moi",
    sub: "⭐️ Témoignages clients",
    items: [
      {
        name: "Joberno Birlado Joseph",
        role: "Développeur Full-Stack senior | PDG de CreaticsHub",
        review:
          "J'ai eu le plaisir de collaborer avec Odilson chez CreaticsHub sur plusieurs projets de développement. C'est un développeur sérieux, autonome et très investi dans son travail. Il comprend rapidement les besoins, propose des solutions pertinentes et veille toujours à produire un code propre, maintenable et évolutif. J'ai également apprécié sa capacité à apprendre rapidement de nouvelles technologies et à s'adapter aux défis rencontrés. C'est un professionnel sur qui l'on peut compter et que je recommande avec confiance.",
        imgPath: "/images/profile-pictures/joberno.jpeg",
      },
      {
        name: "Yuri G",
        role: "Développeur Backend",
        review:
          "Chez CreaticsHub, j'ai eu l'occasion de travailler avec Odilson sur plusieurs aspects techniques de nos projets. C'est un développeur qui cherche à comprendre les problèmes en profondeur avant de proposer une solution. Il fait preuve de rigueur, communique efficacement avec son équipe et cherche constamment à améliorer ses compétences. Son état d'esprit collaboratif et sa volonté de progresser font de lui un excellent coéquipier.",
        imgPath: "/images/profile-pictures/yuri.jpeg",
      },
      {
        name: "Mario Sylainx S. Gauthier",
        role: "Ingénieur logiciel (Spécialiste IoT et Cybersécurité)",
        review:
          "J’ai rencontré Odilson à ses débuts. Il m’a confié qu’il souhaitait relever de nouveaux défis, notamment sur React et Ruby on Rails. Peu de temps après, nous avons fait appel à lui pour renforcer l’équipe sur le projet CreaticsHub, où il a rapidement gagné notre confiance. Professionnel, à l’écoute, curieux et passionné, il n’hésite pas à proposer des solutions pertinentes. Aujourd’hui, il est capable de travailler sur de gros projets avec rigueur et efficacité. C’est une personne avec qui j’apprécie collaborer.",
        imgPath: "/images/profile-pictures/sylainx.jpeg",
      },
      {
        name: "Cosy Joseph",
        role: "Directrice de la transformation numérique | Constructeur d'écosystème",
        review:
          "Sur AGRONOU, Odilson a été un véritable atout. Son sens des responsabilités ressort : il n'attend pas qu'on lui dise quoi développer ; il vise les résultats, pas seulement les tâches. Il creuse le « pourquoi », pose des questions pertinentes sur les défis concrets en Haïti et dans les Caraïbes, et conçoit pour les vrais besoins des utilisateurs, pas seulement ce qui est techniquement pratique. L'un des ingénieurs les plus naturellement curieux avec lesquels j'ai travaillé, il assimile vite les nouveaux outils, cherche le contexte business et marché au-delà de son domaine, et aligne ses décisions techniques sur la vision d'ensemble. Apprentissage rapide, curiosité sincère, sens des responsabilités : je l'aurais dans toute équipe qui construit du nouveau.",
        imgPath: "/images/profile-pictures/cosy.jpg",
      },
      {
        name: "Samandina Jerome",
        role: "UI/UX Designer | Développeuse Front-End",
        review:
          "Collaborer avec Odilson sur les projets de CreaticsHub a été une expérience très agréable. Il accorde une réelle importance à la qualité de l'expérience utilisateur et veille à respecter les maquettes tout en apportant des propositions pertinentes lorsque cela est nécessaire. La communication avec lui est fluide et il est toujours ouvert aux retours afin d'améliorer le produit. C'est un développeur consciencieux qui facilite le travail entre les équipes design et développement.",
        imgPath: "/images/profile-pictures/samandina.jpg",
      },
      {
        name: "Albert Flores",
        role: "Directeur technique",
        review:
          "Odilson a été un plaisir à travailler. Il a parfaitement compris nos besoins et livré un site qui a dépassé nos attentes. Ses compétences en front-end et back-end sont excellentes.",
        imgPath: "/images/client6.png",
      },
    ],
  },
  community: {
    title: "Communauté & Open Source",
    sub: "🌐 Implication tech & activité",
    memberSince: "Membre depuis",
    branchOf: "Une antenne de",
    visitOrg: "Visiter Coding Club Haïti",
    integrationCeremony: "Cérémonie d'intégration",
    githubActivity: "Activité GitHub",
    githubContributions: "Mes contributions open source de la dernière année.",
    viewLarger: "Voir en grand",
    highlight: {
      id: "coding-club-cayes",
      title: "Coding Club Cayes",
      subtitle: "Cérémonie d'intégration · Les Cayes, Haïti",
      organization: "Coding Club Haïti",
      organizationUrl: "https://codingclubhaiti.com",
      memberSince: "27 juin 2026",
      location: "Les Cayes, Sud, Haïti",
      description: [
        "En juin 2026, j'ai été officiellement intégré comme membre du Coding Club Cayes — la plus récente antenne du Coding Club Haïti dans le sud du pays. La cérémonie d'intégration a réuni de jeunes développeurs passionnés unis par une mission commune : apprendre, créer, innover et impacter.",
        "Coding Club Haïti est une communauté nationale à but non lucratif lancée en 2022 pour démocratiser les compétences numériques à travers Haïti. Avec des hubs à Carrefour, Cap-Haïtien et maintenant Les Cayes, le mouvement forme la prochaine génération de développeurs haïtiens via des ateliers, hackathons et programmes inclusifs comme NUMECO et Women TechUp.",
        "Faire partie du Coding Club Cayes, c'est contribuer à un écosystème tech local dès le départ — collaborer avec les autres membres, grandir en tant que développeur et aider à élargir l'accès à la technologie dans la région sud d'Haïti.",
      ],
      photos: [
        {
          src: "/images/coding-club-cayes/certificate.png",
          alt: "Certificat d'adhésion pour Italis Odilson Woody — Coding Club Cayes",
          caption: "Mon certificat officiel d'adhésion",
          featured: true,
        },
        {
          src: "/images/coding-club-cayes/group-on-stage.png",
          alt: "Membres du Coding Club Cayes sur scène lors de la cérémonie d'intégration",
          caption: "Les membres sur scène lors de la cérémonie",
        },
        {
          src: "/images/coding-club-cayes/banner.png",
          alt: "Bannière Coding Club Haïti — Apprendre, Créer, Innover, Impacter",
          caption: "Coding Club Haïti — Apprendre, Créer, Innover, Impacter",
        },
        {
          src: "/images/coding-club-cayes/certificate-presentation.png",
          alt: "Remise des certificats d'adhésion lors de la cérémonie d'intégration",
          caption: "Moment de remise des certificats",
        },
        {
          src: "/images/coding-club-cayes/audience-listening.png",
          alt: "Membres du Coding Club Cayes assistant à la cérémonie d'intégration",
          caption: "Les membres à la cérémonie d'intégration",
        },
      ],
    },
  },
  contact: {
    title: "Contactez-moi – Travaillons ensemble",
    sub: "💬 Des questions ou des idées ? Parlons-en ! 🚀",
    nameLabel: "Votre nom",
    namePlaceholder: "Comment vous appelez-vous ?",
    emailLabel: "Votre email",
    emailPlaceholder: "Quelle est votre adresse email ?",
    messageLabel: "Votre message",
    messagePlaceholder: "Comment puis-je vous aider ?",
    sending: "Envoi en cours...",
    send: "Envoyer le message",
    successTitle: (name: string) => `Merci ${name} !`,
    successDescription: "Je vous répondrai dès que possible.",
    errorMessage: "Oups, une erreur s'est produite. Veuillez réessayer.",
  },
  footer: {
    rights: "Tous droits réservés.",
    madeWith: "Fait avec",
    backToTop: "Retour en haut",
  },
  lightbox: {
    preview: "Aperçu de l'image",
    closePreview: "Fermer l'aperçu",
    close: "Fermer",
    previous: "Image précédente",
    next: "Image suivante",
  },
};
