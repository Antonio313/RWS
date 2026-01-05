export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
}
