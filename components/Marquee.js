import { motion } from 'framer-motion';
import styles from '../styles/Marquee.module.css';

const Marquee = ({ items, speed = 25 }) => { // Slower speed for icons maybe
  const marqueeVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        },
      },
    },
  };

  // Duplicate items for seamless loop
  const extendedItems = [...items, ...items];

  return (
    <div className={styles.marqueeContainer}>
      <motion.div
        className={styles.marqueeTrack}
        variants={marqueeVariants}
        animate="animate"
      >
        {extendedItems.map((item, index) => (
          <div key={index} className={styles.marqueeItem}>
            {item.icon && <span className={styles.iconWrapper}>{item.icon}</span>}
            <span className={styles.itemName}>{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;