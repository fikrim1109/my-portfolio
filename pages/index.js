import Head from 'next/head';
import Image from 'next/image';
import TypingEffect from '../components/TypingEffect';
import Marquee from '../components/Marquee';
import Projects from '../components/Projects'; // Import Projects
import styles from '../styles/Home.module.css';

// Import icons for the marquee
import { FaReact, FaLaravel, FaPython, FaJsSquare, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiMysql, SiFlutter, SiNextdotjs } from 'react-icons/si'; // Using SiNextdotjs

// Define tech stack with icons
const techStack = [
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Laravel', icon: <FaLaravel /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'Flutter', icon: <SiFlutter /> },
];

export default function Home() {
  const name = "Fikri Natadiwirya Maulana";
  const status = "Informatics Engineering student IT’21 at UNHAS; Web Developer; Cloud mentee at Google Bangkit Academy.";

  return (
    <div className={styles.container}>
      <Head>
        <title>Fikri Natadiwirya Maulana - Home</title>
      </Head>

      <section className={styles.heroSection}>
        <div className={styles.profileImageContainer}>
          <Image
            src="/profile.jpg"
            alt="Fikri Natadiwirya Maulana Profile Picture"
            width={150}
            height={150}
            className={styles.profileImage}
            priority
          />
        </div>
        <h1 className={styles.name}>
          <TypingEffect text={name} speed={100} />
        </h1>
        <p className={styles.status}>{status}</p>
      </section>

      {/* Pass techStack array with icons to Marquee */}
      <Marquee items={techStack} speed={30} />

      {/* Add the Projects section */}
      <Projects />

    </div>
  );
}