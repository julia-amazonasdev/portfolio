import { LucideIcon } from "lucide-react";

// Tipos para navegação
export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

// Tipos para seções
export type SectionId = "home" | "about" | "frontend" | "backend" | "contact";

// Tipos para props de componentes
export interface NavbarProps {
  activeSection: SectionId;
  scrollToSection: (sectionId: SectionId) => void;
}

export interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

// Tipos para projetos
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface ProjectCardProps {
  project: Project;
}

// Tipos para contato
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
