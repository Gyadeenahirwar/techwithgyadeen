export type Role = "ADMIN" | "INSTRUCTOR" | "USER";

export type CourseStatus = "DRAFT" | "UPCOMING" | "PUBLISHED" | "COMPLETED" | "ARCHIVED";

export type DifficultyLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "ALL_LEVELS";

export type ContentStatus = "DRAFT" | "PUBLISHED" | "SCHEDULED" | "ARCHIVED";

export interface Instructor {
  id: string;
  name: string;
  headline: string;
  avatar: string;
  bio: string;
  linkedin?: string;
  email?: string;
  github?: string;
}

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  durationMin: number;
  orderIndex: number;
  description?: string;
  videoUrl?: string;
  isFreePreview: boolean;
  content?: string;
  completed?: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  orderIndex: number;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  videoPreviewUrl?: string;
  category: string;
  level: DifficultyLevel;
  status: CourseStatus;
  isFree: boolean;
  price: number;
  discountPrice?: number;
  currency: string;
  durationHours: number;
  lessonsCount: number;
  studentsCount: number;
  rating: number;
  reviewsCount: number;
  technologies: string[];
  isFeatured?: boolean;
  requirements: string[];
  learningOutcomes: string[];
  modules: CourseModule[];
  faqs: { question: string; answer: string }[];
  instructor: Instructor;
  updatedAt: string;
}

export interface Technology {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  color: string;
  description: string;
  updatesCount: number;
  coursesCount: number;
  category: string;
}

export interface TechnologyUpdate {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  technology: string;
  technologySlug: string;
  publishedAt: string;
  author: string;
  coverImage?: string;
  sourceUrl?: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: Instructor;
  coverImage: string;
  publishedAt: string;
  readTimeMin: number;
  viewsCount: number;
  tags: string[];
  isFeatured?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  slug: string;
  description: string;
  type: "CHEAT_SHEET" | "INTERVIEW_QUESTIONS" | "CODE_PROJECT" | "PDF_GUIDE" | "TEMPLATE";
  category: string;
  isFree: boolean;
  price?: number;
  downloadUrl?: string;
  format: string;
  size: string;
  downloadsCount: number;
}

export interface InterviewQuestion {
  id: string;
  question: string;
  category: "Admin" | "Developer" | "Apex" | "LWC" | "Integration" | "Agentforce" | "AI" | "Scenario";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  answer: string;
  codeSnippet?: string;
  relatedQuestions?: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  technologies: string[];
  learningOutcomes: string[];
  difficulty: DifficultyLevel;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}
