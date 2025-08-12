export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoUrl?: string;
    githubUrl?: string;
    features: string[];
    category: 'frontend' | 'backend' | 'fullstack';
  }