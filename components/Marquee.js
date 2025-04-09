import { motion } from 'framer-motion';
import styles from '../styles/Marquee.module.css';

const Marquee = ({ items, speed = 25 }) => {
  const marqueeVariants = {
    animate: {
      // Animate x from 0% to -50%
      // This moves the track exactly the width of one set of items
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed, // Duration controls speed
          ease: 'linear', // Constant speed
        },
      },
    },
  };

  // Duplicate items for seamless loop - IMPORTANT: Keep exactly two copies
  const extendedItems = [...items, ...items];

  return (
    <div className={styles.marqueeContainer}>
      {/* The track contains BOTH copies */}
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