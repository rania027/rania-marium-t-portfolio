export interface Project {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: 'AI & ML' | 'Full-Stack' | 'Systems & Core';
  subtitle: string;
  description: string;
  fullOverview: string;
  problemStatement: string;
  keyFeatures: string[];
  techStack: string[];
  architectureNotes?: string;
  metrics?: { label: string; value: string }[];
  tags: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  category: 'Languages' | 'Tools & Environment' | 'Frameworks & Web';
  context: string;
  icon?: string;
}

export interface CourseworkItem {
  code?: string;
  title: string;
  focus: string;
  semester?: string;
  topics: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialTag: string;
  skillsAcquired: string[];
}

export interface LearningGoal {
  id: string;
  title: string;
  target: string;
  status: 'In Progress' | 'Planned' | 'Active Daily';
  progress: number;
  description: string;
  milestones: { name: string; completed: boolean }[];
  keyDisciplines: string[];
}
