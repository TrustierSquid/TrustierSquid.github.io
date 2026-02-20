/**
 * Projects Data
 *
 * This file contains all project data for the portfolio.
 * To add a new project, simply add a new object to the projectsData array.
 *
 * Project Object Structure:
 * {
 *   id: 'unique-identifier',
 *   title: 'Project Name',
 *   logoPath: 'path/to/logo.png',
 *   imagePath: 'path/to/screenshot.png',
 *   type: 'PROJECT TYPE',
 *   description: 'Detailed project description...',
 *   keyFeatures: 'Feature 1, Feature 2, Feature 3...',
 *   technologies: [
 *     { name: 'Technology Name', icon: 'fontawesome-icon-class' }
 *   ],
 *   links: [
 *     { text: 'Button Text', url: 'https://...', icon: 'fontawesome-icon-class' }
 *   ]
 * }
 */

const projectsData = [
  {
    id: 'wolflite',
    title: 'WOLFLITE',
    logoPath: 'src/assets/imgs/wolfLogo.png',
    imagePath: 'src/assets/imgs/wlfyy.com_profile.png',
    type: 'SOCIAL MEDIA PLATFORM',
    description: 'Wolflite is a modern social blogging platform featuring interactive polls, real-time engagement, and seamless user profiles. Built with React/Flask and deployed via Docker, it showcases full-stack development with persistent data storage, file uploads, and responsive design.',
    keyFeatures: 'Social posting, interactive polls, user profiles, real-time engagement, file uploads, responsive design.',
    technologies: [
      { name: 'React + Vite', icon: 'fa-brands fa-react' },
      { name: 'CSS', icon: 'fa-brands fa-css3-alt' },
      { name: 'Python + Flask', icon: 'fa-brands fa-python' },
      { name: 'SQLite', icon: 'fa-solid fa-database' }
    ],
    links: [
      { text: 'View Source Code', url: 'https://github.com/TrustierSquid/wolflite', icon: 'fa-brands fa-github' },
      { text: 'Visit WOLFITE', url: 'https://wlfyy.com', icon: 'fa-solid fa-right-from-bracket' }
    ]
  },
  {
    id: 'a8n-tools',
    title: 'a8n.tools SaaS',
    logoPath: 'src/assets/imgs/wolfLogo.png',
    imagePath: 'src/assets/imgs/SAAS.png',
    type: 'SAAS APPLICATION',
    description: 'a8n.tools is home to two applications: RUS, a URL shortener, and RustyLinks, a bookmark manager.',
    keyFeatures: 'Stripe payment integration, user authentication and account creation, subscription management dashboard. RUS: Self-hostable URL shortener with QR code generation. RustyLinks: Bookmark manager with tagging, search, and organization.',
    technologies: [
      { name: 'React', icon: 'fa-brands fa-react' },
      { name: 'Tailwind', icon: 'fa-brands fa-tailwind-css' },
      { name: 'Rust', icon: 'fa-brands fa-rust' },
      { name: 'Postgres', icon: 'fa-solid fa-Sql' },
      { name: 'Docker', icon: 'fa-solid fa-docker' }
    ],
    links: [
      { text: 'View Source Code', url: 'https://github.com/a8n-tools/saas', icon: 'fa-brands fa-github' },
      { text: 'Visit Current Build', url: 'https://app.a8n.run', icon: 'fa-solid fa-right-from-bracket' }
    ]
  }
  // Add more projects here by copying the structure above
];

// Export for use in projectRenderer.js
export default projectsData;
