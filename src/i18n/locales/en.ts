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

export const en: Translations = {
  meta: {
    documentTitle: "Odilson Italis — FullStack Developer",
  },
  nav: {
    role: "FullStack Developer",
    resume: "Resume",
    hireMe: "Hire me",
  },
  navLinks: [
    { name: "About me", link: "#about" },
    { name: "Works", link: "#work" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Community", link: "#community" },
  ],
  hero: {
    shaping: "Shaping",
    intoRealProjects: "into Real Projects",
    thatDeliverResults: "that Deliver Results",
    bio: "Hi, I'm Odilson, I build web & mobile apps that turns visitors into customers.",
    cta: "See My Work",
  },
  words: wordCycle("Ideas", "Concepts", "Designs", "Code"),
  about: {
    title: "About Me",
    sub: "👨‍💻 Who I Am",
    paragraphs: [
      "Hello! I'm Odilson, a passionate developer dedicated to building exceptional digital experiences. With a strong foundation in both web and mobile technologies, I thrive on turning complex problems into elegant, user-friendly solutions.",
      "My journey in tech has been driven by curiosity and a relentless desire to learn. Whether it's crafting responsive front-end interfaces or architecting robust back-end systems, I approach every project with a focus on quality, performance, and scalability.",
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the community. I'm also a member of",
    ],
    communityLink: "Coding Club Cayes",
    communitySuffix: ", helping grow Haiti's tech ecosystem in the south.",
    viewWork: "View My Work",
  },
  counterItems: [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ],
  showcase: {
    title: "Featured Projects",
    sub: "🚀 My Work",
    github: "GitHub",
    liveView: "Live View",
  },
  projects: [
    {
      id: "not-whatsapp",
      title: "Not WhatsApp — Real-Time Messaging with Convex",
      description:
        "A WhatsApp-inspired chat app with 1:1 & group messaging, statuses, read receipts, presence, and an admin moderation panel — built with Next.js 16, Convex, and Clerk.",
      imgPath: "/images/project-not-whatsapp.png",
      githubUrl: "https://github.com/odilson-dev/whatsapp-clone",
      liveUrl: "https://not-whatsapp-three.vercel.app",
      stars: 0,
      forks: 0,
    },
    {
      id: "rplace-convex",
      title: "r/place × Convex — Real-Time Collaborative Pixel Canvas",
      description:
        "A multiplayer r/place-style canvas with instant sync powered by Convex—reactive queries, batched mutations, and optimistic UI on Next.js 16 & React 19.",
      imgPath: "/images/project-rplace-convex.png",
      bgColor: "#FFF5E1",
      githubUrl: "https://github.com/odilson-dev/rpkace-convex",
      liveUrl: "https://rplace-convex-lime.vercel.app/",
      stars: 0,
      forks: 0,
    },
    {
      id: "yc-directory",
      title: "YC Directory - A Startup Showcase App",
      description: "A platform to discover and showcase innovative startups.",
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
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ],
  experience: {
    title: "Professional Work Experience",
    sub: "💼 My Career Overview",
    responsibilities: "Responsibilities",
  },
  expCards: [
    {
      review:
        "Odilson brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "/images/logos/creaticshub_2.png",
      logoPath: "/images/logos/creaticshub_1.png",
      title: "Frontend Developer",
      date: "November 2024 - Present",
      responsibilities: [
        "Developed and maintained user-facing features for the CreaticsHub WebApp.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      review:
        "On AGRONOU, Odilson has been a genuine asset. His sense of ownership stands out—he owns outcomes, not just tasks. He digs into the why, asks sharp questions about real-world challenges in Haiti and the Caribbean, and builds for users' real needs.",
      imgPath: "/images/logos/nou-logo.svg",
      logoPath: "/images/logos/nou-logo.svg",
      logoBgColor: "#F7F3EB",
      title: "Full-Stack Developer · AGRONOU (NOU Marketplace)",
      date: "May 2026 - Present",
      responsibilities: [
        "Built admin and seller dashboards for NOU — multi-vendor marketplace for Haitian SMEs (Next.js, Convex, Clerk).",
        "Shipped product management, business verification, and multi-currency storefront flows across web and Expo mobile.",
        "Integrated transactional email (Resend), auth sync, and payment-related marketplace workflows (Stripe, MonCash, PayPal).",
      ],
    },
  ],
  techStack: {
    title: "How I Can Contribute & My Key Skills",
    sub: "🤝 What I Bring to the Table",
  },
  techStackImgs: [
    { name: "React Developer", imgPath: "/images/logos/react.png", level: 95 },
    {
      name: "Next.js Developer",
      imgPath: "/images/logos/nextjs-logo.png",
      level: 90,
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
      level: 85,
    },
    { name: "Expo Developer", imgPath: "/images/logos/expo.jpeg", level: 80 },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
      level: 85,
    },
  ],
  testimonials: {
    title: "What People Say About Me?",
    sub: "⭐️ Customer feedback highlights",
    items: [
      {
        name: "Joberno Birlado Joseph",
        role: "CEO of CreaticsHub | Lead Full-Stack Developer",
        review:
          "I had the pleasure of working with Odilson at CreaticsHub on several development projects. He is a dedicated, self-motivated developer who is deeply committed to his work. He quickly understands requirements, proposes relevant solutions, and always ensures that the code he produces is clean, maintainable, and scalable. I also appreciated his ability to quickly learn new technologies and adapt to the challenges he faces. He is a professional you can count on, and I highly recommend him  with confidence.",
        imgPath: "/images/profile-pictures/joberno.jpeg",
      },
      {
        name: "Yuri G",
        role: "Full-Stack Developer | Cybersecurity & Robotics Enthusiast",
        review:
          "At CreaticsHub, I had the opportunity to work with Odilson on several technical aspects of our projects. He is a developer who strives to understand problems in depth before proposing a solution. He is thorough, communicates effectively with his team, and constantly seeks to improve his skills. His collaborative attitude and desire to grow make him an excellent teammate.",
        imgPath: "/images/profile-pictures/yuri.jpeg",
      },
      {
        name: "Mario Sylainx S. Gauthier",
        role: "Software Engineer | IoT and Cybersecurity Specialist",
        review:
          "I met Odilson early in his career. He told me he wanted to take on new challenges, particularly with React and Ruby on Rails. Shortly thereafter, we brought him on board to strengthen the team working on the CreaticsHub project, where he quickly earned our trust. Professional, attentive, curious, and passionate, he doesn’t hesitate to propose relevant solutions. Today, he’s capable of working on large projects with rigor and efficiency. He’s someone I really appreciate working with...",
        imgPath: "/images/profile-pictures/sylainx.jpeg",
      },
      {
        name: "Cosy Joseph",
        role: "Digital Transformation Executive | Ecosystem Builder",
        review:
          "On AGRONOU, Odilson has been a genuine asset. His sense of ownership stands out—he doesn't wait to be told what to build; he owns outcomes, not just tasks. He digs into the \"why,\" asks sharp questions about real-world challenges in Haiti and the Caribbean, and builds for users' real needs, not just technical convenience. One of the most naturally curious engineers I've worked with, he learns new tools fast, seeks business and market context beyond his lane, and aligns technical decisions with the bigger picture. Fast learner, genuine curiosity, real ownership: I'd want him on any team building something new.",
        imgPath: "/images/profile-pictures/cosy.jpg",
      },
      {
        name: "Samandina Jerome",
        role: "UI/UX Designer | Front-End Developer",
        review:
          "Working with Odilson on CreaticsHub projects has been a very pleasant experience. He places real importance on the quality of the user experience and makes sure to follow the mockups while offering relevant suggestions when necessary. Communication with him is smooth, and he’s always open to feedback to improve the product. He’s a conscientious developer who facilitates collaboration between the design and development teams.",
        imgPath: "/images/profile-pictures/samandina.jpg",
      },
      {
        name: "Albert Flores",
        role: "CTO",
        review:
          "Odilson was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
      },
    ],
  },
  community: {
    title: "Community & Open Source",
    sub: "🌐 Tech Involvement & Activity",
    memberSince: "Member since",
    branchOf: "A branch of",
    visitOrg: "Visit Coding Club Haïti",
    integrationCeremony: "Integration Ceremony",
    githubActivity: "GitHub Activity",
    githubContributions: "My open-source contributions over the last year.",
    viewLarger: "View larger",
    highlight: {
      id: "coding-club-cayes",
      title: "Coding Club Cayes",
      subtitle: "Integration Ceremony · Les Cayes, Haiti",
      organization: "Coding Club Haïti",
      organizationUrl: "https://codingclubhaiti.com",
      memberSince: "June 27, 2026",
      location: "Les Cayes, Sud, Haiti",
      description: [
        "In June 2026, I was officially integrated as a member of Coding Club Cayes — the newest branch of Coding Club Haïti in the south of the country. The integration ceremony brought together passionate young developers united by a shared mission: learn, create, innovate, and impact.",
        "Coding Club Haïti is a national nonprofit community launched in 2022 to democratize digital skills across Haiti. With hubs in Carrefour, Cap-Haïtien, and now Les Cayes, the movement trains the next generation of Haitian developers through workshops, hackathons, and inclusive programs like NUMECO and Women TechUp.",
        "Being part of Coding Club Cayes means contributing to a local tech ecosystem from the ground up — collaborating with fellow members, growing as a developer, and helping expand access to technology in the southern region of Haiti.",
      ],
      photos: [
        {
          src: "/images/coding-club-cayes/certificate.png",
          alt: "Certificate of membership for Italis Odilson Woody — Coding Club Cayes",
          caption: "My official membership certificate",
          featured: true,
        },
        {
          src: "/images/coding-club-cayes/group-on-stage.png",
          alt: "Coding Club Cayes members on stage during the integration ceremony",
          caption: "Members on stage at the ceremony",
        },
        {
          src: "/images/coding-club-cayes/banner.png",
          alt: "Coding Club Haïti banner — Apprendre, Créer, Innover, Impacter",
          caption: "Coding Club Haïti — Learn, Create, Innovate, Impact",
        },
        {
          src: "/images/coding-club-cayes/certificate-presentation.png",
          alt: "Presentation of membership certificates during the integration ceremony",
          caption: "Certificate presentation moment",
        },
        {
          src: "/images/coding-club-cayes/audience-listening.png",
          alt: "Coding Club Cayes members attending the integration ceremony",
          caption: "Members at the integration ceremony",
        },
      ],
    },
  },
  contact: {
    title: "Get in Touch – Let's Work Together",
    sub: "💬 Have questions or ideas? Let's talk! 🚀",
    nameLabel: "Your name",
    namePlaceholder: "What's your good name?",
    emailLabel: "Your Email",
    emailPlaceholder: "What's your email address?",
    messageLabel: "Your Message",
    messagePlaceholder: "How can I help you?",
    sending: "Sending...",
    send: "Send Message",
    successTitle: (name: string) => `Thank you ${name}!`,
    successDescription: "I will get back to you as soon as possible.",
    errorMessage: "Ahh, something went wrong. Please try again.",
  },
  footer: {
    rights: "All rights reserved.",
    madeWith: "Made with",
    backToTop: "Back to top",
  },
  lightbox: {
    preview: "Image preview",
    closePreview: "Close preview",
    close: "Close",
    previous: "Previous image",
    next: "Next image",
  },
};
