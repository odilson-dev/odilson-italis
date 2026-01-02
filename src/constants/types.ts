/**
 * Type definitions for constants used throughout the application
 */

/**
 * Navigation link item
 */
export interface NavLink {
  name: string;
  link: string;
}

/**
 * Word item with associated image path
 */
export interface Word {
  text: string;
  imgPath: string;
}

/**
 * Counter/Statistics item
 */
export interface CounterItem {
  value: number;
  suffix: string;
  label: string;
}

/**
 * Company logo icon
 */
export interface LogoIcon {
  imgPath: string;
}

/**
 * Ability/Feature item
 */
export interface Ability {
  imgPath: string;
  title: string;
  desc: string;
}

/**
 * Tech stack image item
 */
export interface TechStackImg {
  name: string;
  imgPath: string;
  level?: number;
}

/**
 * 3D Tech stack icon with model configuration
 */
export interface TechStackIcon {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
}

/**
 * Experience card with detailed information
 */
export interface ExpCard {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
}

/**
 * Experience logo item
 */
export interface ExpLogo {
  name: string;
  imgPath: string;
}

/**
 * Client testimonial
 */
export interface Testimonial {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
}

/**
 * Social media link with Lucide icon
 */
export interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
}

/**
 * Project showcase item with links
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  imgPath: string;
  bgColor?: string;
  githubUrl: string;
  liveUrl: string;
  stars?: number;
  forks?: number;
}

/**
 * Certification or course item
 */
export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  imgPath?: string;
}

/**
 * Tech community involvement item
 */
export interface CommunityLink {
  name: string;
  platform: string;
  url: string;
  stats?: string;
  icon: React.ComponentType<{ className?: string }>;
}
