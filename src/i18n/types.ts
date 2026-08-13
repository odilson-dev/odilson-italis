import type {
  Ability,
  CommunityHighlight,
  CounterItem,
  ExpCard,
  NavLink,
  Project,
  Testimonial,
  Word,
} from "../constants/types";

export type Locale = "en" | "fr";

export interface Translations {
  meta: {
    documentTitle: string;
  };
  nav: {
    role: string;
    resume: string;
    hireMe: string;
  };
  navLinks: NavLink[];
  hero: {
    shaping: string;
    intoRealProjects: string;
    thatDeliverResults: string;
    bio: string;
    cta: string;
  };
  words: Word[];
  about: {
    title: string;
    sub: string;
    paragraphs: string[];
    communityLink: string;
    communitySuffix: string;
    viewWork: string;
  };
  counterItems: CounterItem[];
  showcase: {
    title: string;
    sub: string;
    github: string;
    liveView: string;
  };
  projects: Project[];
  abilities: Ability[];
  experience: {
    title: string;
    sub: string;
    responsibilities: string;
  };
  expCards: ExpCard[];
  techStack: {
    title: string;
    sub: string;
  };
  techStackImgs: { name: string; imgPath: string; level?: number }[];
  testimonials: {
    title: string;
    sub: string;
    items: Testimonial[];
  };
  certifications: {
    title: string;
    sub: string;
    viewCertificate: string;
    viewLarger: string;
  };
  community: {
    title: string;
    sub: string;
    memberSince: string;
    branchOf: string;
    visitOrg: string;
    integrationCeremony: string;
    githubActivity: string;
    githubContributions: string;
    viewLarger: string;
    highlight: CommunityHighlight;
  };
  contact: {
    title: string;
    sub: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sending: string;
    send: string;
    successTitle: (name: string) => string;
    successDescription: string;
    errorMessage: string;
  };
  footer: {
    rights: string;
    madeWith: string;
    backToTop: string;
  };
  lightbox: {
    preview: string;
    closePreview: string;
    close: string;
    previous: string;
    next: string;
  };
}
