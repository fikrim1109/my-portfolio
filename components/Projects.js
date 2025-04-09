import ProjectCard from './ProjectCard';
import styles from '../styles/Projects.module.css';

// Define your project data here
const projectData = [
  {
    id: 1,
    name: 'Project Alpha',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/project1.jpg', // Relative to /public
  },
  {
    id: 2,
    name: 'Project Beta',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: '/project2.jpg',
  },
  {
    id: 3,
    name: 'Project Gamma',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageUrl: '/project3.jpg',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;