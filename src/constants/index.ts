import {
  backend,
  battleship,
  creaticshub,
  creator,
  css,
  figma,
  git,
  javascript,
  mobile,
  mongodb,
  nextjs,
  nodejs,
  prisma,
  reactjs,
  shoppingcart,
  tailwind,
  threejs,
  typescript,
  weather,
  web,
} from "../assets";
import {
  ExperienceType,
  NavLink,
  Project,
  Service,
  Social,
  Technology,
  Testimonial,
} from "../types";

// Update existing constants to use the defined interfaces
const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "resume",
    title: "Resume",
    url: "https://rxresu.me/odilson-dev/odilson-italis-resume",
  },
  {
    id: "contact",
    title: "Hire me",
  },
];

const services: Service[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: Technology[] = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  { name: "Next JS", icon: nextjs },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: ExperienceType[] = [
  {
    title: "Web/Mobile Developer",
    company_name: "CreaticsHub",
    icon: creaticshub,
    iconBg: "#383E56",
    date: "November 2024 - Now",
    points: [
      "Developing and maintaining web applications using React/Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Backend Developer",
    company_name: "Notiflow (Open Source)",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "September 2024 - November 2024",
    points: [
      "Contributed as a backend developer to an open-source notification platform.",
      "Built RESTful APIs using Express and Node.js with robust validation and error handling.",
      "Integrated data persistence and caching, and optimized endpoints for performance.",
      "Wrote unit/integration tests and participated in code reviews and documentation.",
    ],
  },

  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials: Testimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: Project[] = [
  {
    name: "Weather App",
    description: "A weather forecast site using the open map weather API.",
    tags: [
      {
        name: "promises",
        color: "blue-text-gradient",
      },
      {
        name: "html-css-js",
        color: "green-text-gradient",
      },
      {
        name: "async await",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/weather-app",
  },
  {
    name: "Battleship",
    description:
      "Battleship is a classic two-player guessing game where each player attempts to sink the other player's fleet of ships by guessing the coordinates of the ships on a grid.",
    tags: [
      {
        name: "tdd",
        color: "blue-text-gradient",
      },
      {
        name: "jest-test",
        color: "green-text-gradient",
      },
      {
        name: "html-css-js",
        color: "pink-text-gradient",
      },
    ],
    image: battleship,
    source_code_link: "https://github.com/battleship",
  },
  {
    name: "Shopping Cart",
    description:
      "Shopping Cart is a classic React project that allows users to browse and purchase products using a simulated shopping cart.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "state management",
        color: "pink-text-gradient",
      },
    ],
    image: shoppingcart,
    source_code_link: "https://github.com/shopping-cart",
  },
];

const socials: Social[] = [
  {
    name: "GitHub",

    url: "https://github.com/odilson-dev",
  },
  {
    name: "Twitter",

    url: "https://twitter.com/odilsondev",
  },
  {
    name: "LinkedIn",

    url: "https://linkedin.com/in/odilson-dev",
  },
  // {
  //   name: "Instagram",

  //   url: "https://instagram.com/odilson.dev",
  // },
  // {
  //   name: "Facebook",
  //   url: "https://facebook.com/odilson-dev",
  // },
];

// Export the constants
export {
  experiences,
  navLinks,
  projects,
  services,
  socials,
  technologies,
  testimonials,
};
