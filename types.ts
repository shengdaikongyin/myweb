export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}

export interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
  comments: Comment[];
}

export enum Section {
  HERO = 'home',
  ABOUT = 'about',
  PROJECTS = 'projects',
  BLOG = 'blog',
  CONTACT = 'contact'
}