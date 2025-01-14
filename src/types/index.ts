// Define export interfaces for the objects
export interface NavLink {
  id: string;
  title: string;
  url?: string;
}

export interface Service {
  title: string;
  icon: string; // Assuming icon is a string (path to the icon)
}

export interface Technology {
  name: string;
  icon: string; // Assuming icon is a string (path to the icon)
}

export interface Experience {
  title: string;
  company_name: string;
  icon: string; // Assuming icon is a string (path to the icon)
  iconBg: string;
  date: string;
  points: string[];
}

export interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export interface Project {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string; // Assuming image is a string (path to the image)
  source_code_link: string;
}
