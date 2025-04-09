import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Sidebar.module.css';

const Sidebar = ({ isOpen, toggle }) => {
  // Variants for animating from the right
  const sidebarVariants = {
    open: { x: 0 }, // Target position when open
    closed: { x: '100%' }, // Start position off-screen to the right
  };

  return (
    <>
     {/* Overlay remains the same */}
     {isOpen && <div className={styles.overlay} onClick={toggle}></div>}

     <motion.nav
        className={styles.sidebar}
        initial="closed" // Start closed (off-screen right)
        animate={isOpen ? 'open' : 'closed'} // Animate based on isOpen state
        variants={sidebarVariants} // Use the defined variants
        transition={{ type: 'tween', duration: 0.3 }} // Animation timing
      >
        {/* Close button inside sidebar for mobile is good practice */}
        {/* <button onClick={toggle} className={styles.closeButton}>X</button> */}
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/" onClick={toggle}>Home</Link></li>
          <li className={styles.navItem}><Link href="/contact" onClick={toggle}>Contact</Link></li>
        </ul>
      </motion.nav>
    </>
  );
};

export default Sidebar;