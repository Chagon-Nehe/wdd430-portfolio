// lib/projects-db.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    category: 'school' | 'opensource';
    technologies: string[];
    link?: string;
}

export const projects: Project[] = [
    {
    id: 1,
    title: 'Clinical Patient Triage & Retention Tracker',
    description:
      'A full-stack web application designed to track patient follow-up schedules, flag missed appointments, and visualize retention metrics for community health clinics.',
    category: 'school',
    technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
    link: 'https://github.com/chawanangwa/clinical-retention-tracker',
  },
  {
    id: 2,
    title: 'Role-Based Auth & JWT API Boilerplate',
    description:
      'An open-source Express.js starter template featuring pre-configured JSON Web Token authentication, schema validation middleware, and granular role-based access control.',
    category: 'opensource',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL'],
    link: 'https://github.com/chawanangwa/express-rbac-jwt-starter',
  },
  {
    id: 3,
    title: 'Lilongwe Business Directory & Spotlight Portal',
    description:
      'A responsive corporate catalog built with semantic CSS Grid and Flexbox layouts, featuring dynamic spotlight filtering and localized business profiles.',
    category: 'school',
    technologies: ['HTML', 'CSS', 'JavaScript', 'JSON'],
    link: 'https://github.com/chawanangwa/lilongwe-business-directory',
  },
  {
    id: 4,
    title: 'Dynamic DOM Alert & Notification Engine',
    description:
      'A lightweight, zero-dependency JavaScript library that parses localized JSON alert configurations and renders accessible, asynchronous DOM notifications.',
    category: 'opensource',
    technologies: ['TypeScript', 'JavaScript', 'CSS'],
    link: 'https://github.com/chawanangwa/modular-dom-alerts',
  },
  {
    id: 5,
    title: 'Service Platform Relational Booking System',
    description:
      'A backend-driven service scheduling app enforcing strict relational database constraints, server-side input validation, and normalized booking workflows.',
    category: 'school',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'EJS'],
    link: 'https://github.com/chawanangwa/relational-service-booking',
  },
  {
    id: 6,
    title: 'Epidemiological Data Cleaning CLI',
    description:
      'An open-source Python command-line utility for validating survey CSV exports, standardizing date formats, and detecting missing patient records prior to statistical analysis.',
    category: 'opensource',
    technologies: ['Python', 'Pandas', 'CLI'],
    link: 'https://github.com/chawanangwa/epi-data-validator',
  },
];

export function getProjects(category?: string | null): Project[] {
    if (category) {
        return projects.filter(project => project.category === category);
    }
    return projects;
}

export function getProjectById(id: number): Project | null {
    return projects.find(project => project.id === id) ?? null;
}