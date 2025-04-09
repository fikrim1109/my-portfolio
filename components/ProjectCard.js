import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={project.imageUrl}
          alt={`${project.name} screenshot`}
          layout="fill" // Use fill layout
          objectFit="cover" // Cover the container
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>
        {/* Optional: Add links (GitHub, Live Demo) here */}
        {/* <div className={styles.links}>
          <a href="#">GitHub</a>
          <a href="#">Live Demo</a>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;