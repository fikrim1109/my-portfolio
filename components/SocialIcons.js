import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/SocialIcons.module.css';

const SocialIcons = () => {
  // Replace '#' with your actual profile URLs
  const socialLinks = [
    { name: 'Instagram', url: '#', icon: FaInstagram },
    { name: 'LinkedIn', url: '#', icon: FaLinkedin },
    { name: 'GitHub', url: '#', icon: FaGithub },
  ];

  return (
    <div className={styles.socialContainer}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Link to ${link.name}`}
          className={styles.socialLink}
        >
          <link.icon size={28} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;