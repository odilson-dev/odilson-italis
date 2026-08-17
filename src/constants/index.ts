import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import type {
  Certification,
  ExpLogo,
  LogoIcon,
  SocialLink,
  TechStackIcon,
} from "./types";

const logoIconsList: LogoIcon[] = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const techStackIcons: TechStackIcon[] = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expLogos: ExpLogo[] = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

const certifications: Certification[] = [
  {
    title: "Award-Winning Marketing Websites",
    issuer: "Master.dev (Formerly Frontend Masters)",
    date: "2026",
    link: "https://static.frontendmasters.com/ud/c/6766641c13/SzzjuMETMd/winning-websites-masterdev.pdf",
    imgPath: "/images/cert_1.png",
  },
  {
    title: "Deploying Web Applications on AWS, v3",
    issuer: "Master.dev (Formerly Frontend Masters)",
    date: "2026",
    link: "https://static.frontendmasters.com/ud/c/6766641c13/QVoCclqyWg/aws-v3-masterdev.pdf",
    imgPath: "/images/cert_2.png",
  },
];

const socialImgs: SocialLink[] = [
  {
    name: "instagram",
    icon: Instagram,
    url: "https://instagram.com/odilson.dev",
  },
  {
    name: "github",
    icon: Github,
    url: "https://github.com/odilson-dev",
  },
  {
    name: "twitter",
    icon: Twitter,
    url: "https://twitter.com/odilsonDev",
  },
  {
    name: "linkedin",
    icon: Linkedin,
    url: "https://linkedin.com/in/odilson-dev",
  },
];

export { certifications, expLogos, logoIconsList, socialImgs, techStackIcons };
