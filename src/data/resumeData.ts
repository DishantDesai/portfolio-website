export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link?: string; // Optional, as resume didn't have specific links
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  school: string;
  duration: string;
  gpa: string;
}

export const resumeData = {
  personalInfo: {
    name: "Dishant Desai",
    title: "Frontend Developer (React)",
    email: "dishant.j.desai@gmail.com",
    phone: "514–998–1500",
    location: "Ottawa, ON",
    summary:
      "Frontend Developer with 6+ years of experience building and delivering scalable, high-performance web applications across Retail and Finance domains. Strong expertise in React, TypeScript, and modern frontend architecture. Proven feature owner with an 'own-it' mindset, collaborating cross-functionally to deliver customer-focused solutions.",
    social: {
      linkedin: "#", // User to fill
      github: "#",   // User to fill
    },
  },
  experience: [
    {
      id: 1,
      company: "Morgan Stanley",
      role: "Frontend Developer",
      duration: "Nov 2022 – Present",
      location: "Ottawa, ON",
      description: [
        "Developed a React-based visualisation dashboard for reconciliation stats, reducing time consumption by 25%.",
        "Migrated components to React 18, leveraging concurrent rendering for improved performance.",
        "Implemented Redux for state management and optimization of asynchronous operations.",
        "Integrated SonarQube to increase code coverage by 35% and reduce technical debt by 20%.",
        "Seamlessly integrated React components with existing C# WPF UI.",
        "Conducted unit testing with Jest and React Testing Library (80% coverage).",
      ],
      techStack: ["React", "Redux", "TypeScript", "SCSS", "Jest", "C# WPF", "SonarQube"],
    },
    {
      id: 2,
      company: "HeyCollab",
      role: "Frontend Developer",
      duration: "April 2021 – Oct 2022",
      location: "Remote/Hybrid", // Assumed based on dates
      description: [
        "Designed and developed responsive web app using Vue.js, GraphQL, and Websocket.",
        "Implemented Drag and Drop functionality for Kanban board.",
        "Built file management system for organizing shared files.",
        "Optimized app performance by reducing backend calls, improving efficiency by 30%.",
        "Integrated real-time notifications using Pusher.",
      ],
      techStack: ["Vue.js", "GraphQL", "WebSocket", "Sass", "Pusher", "Apollo Client"],
    },
    {
      id: 3,
      company: "Openxcell Technolabs",
      role: "Software Engineer",
      duration: "Aug 2018 – April 2021",
      location: "India", // Assumed based on university
      description: [
        "Developed RESTful APIs using C# and ASP.NET, ensuring seamless frontend integration.",
        "Created a React project start-up kit increasing development speed by 20%.",
        "Implemented React lazy load, boosting Lighthouse performance score from 50 to 77.",
        "Mentored junior developers in React and Next.js.",
      ],
      techStack: ["React", "Next.js", "C#", "ASP.NET", "Redux", "Node.js"],
    },
  ] as ExperienceItem[],
  projects: [
    {
      id: 1,
      title: "Reconciliation Dashboard",
      description:
        "A high-performance visualization dashboard for financial data, enhancing user accessibility and workflow efficiency.",
      techStack: ["React", "Redux", "D3.js", "TypeScript"],
      featured: true,
    },
    {
      id: 2,
      title: "Kanban Board & File System",
      description:
        "Interactive project management tool with drag-and-drop capabilities and organized file sharing system.",
      techStack: ["Vue.js", "GraphQL", "WebSockets"],
      featured: true,
    },
    {
      id: 3,
      title: "React Startup Kit",
      description:
        "A comprehensive boilerplate for React projects including auth, UI components, and testing setup.",
      techStack: ["React", "Webpack", "Babel"],
      featured: false,
    },
  ] as ProjectItem[],
  skills: [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Redux", "HTML5", "CSS3/SCSS", "Tailwind"],
    },
    {
      category: "Backend & API",
      skills: ["Node.js", "Express", "C#", "ASP.NET", "GraphQL", "REST", "WebSockets"],
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "Jenkins", "Docker", "Webpack", "Jest", "SonarQube", "Figma"],
    },
  ] as SkillCategory[],
  education: [
    {
      id: 1,
      degree: "Mobile Application Development",
      school: "Cégep de la Gaspésie et des Îles",
      duration: "Mar 2021 - Sept 2022",
      gpa: "9.14 / 10",
    },
    {
      id: 2,
      degree: "Bachelor’s in Information Technology",
      school: "Kadi Sarva Vishwavidyalaya University",
      duration: "Aug 2015 – Jun 2019",
      gpa: "7.85 / 10",
    },
  ] as EducationItem[],
};
