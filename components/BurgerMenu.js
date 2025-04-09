import { motion } from 'framer-motion';
import styles from '../styles/BurgerMenu.module.css';

const BurgerMenu = ({ isOpen, toggle }) => {
  const topVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 6 },
  };
  const middleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -6 },
  };
  const lineProps = {
    strokeWidth: "2",
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: isOpen ? "open" : "closed",
    transition: { type: "spring", stiffness: 260, damping: 20 },
    className: styles.line
  };

  return (
    <button onClick={toggle} className={styles.burgerButton} aria-label="Toggle menu">
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.line x1="2" y1="5" x2="21" y2="5" variants={topVariants} {...lineProps} />
        <motion.line x1="2" y1="11.5" x2="21" y2="11.5" variants={middleVariants} {...lineProps} />
        <motion.line x1="2" y1="18" x2="21" y2="18" variants={bottomVariants} {...lineProps} />
      </svg>
    </button>
  );
};

export default BurgerMenu;