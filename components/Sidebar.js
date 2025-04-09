import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Sidebar.module.css';

const Sidebar = ({ isOpen, toggle }) => {
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <>
     {isOpen && <div className={styles.overlay} onClick={toggle}></div>}
     <motion.nav
        className={styles.sidebar}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/" onClick={toggle}>Home</Link></li>
          <li className={styles.navItem}><Link href="/contact" onClick={toggle}>Contact</Link></li>
        </ul>
      </motion.nav>
    </>
  );
};

export default Sidebar;