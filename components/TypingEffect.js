import { useState, useEffect } from 'react';
import styles from '../styles/TypingEffect.module.css';

const TypingEffect = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  return <span className={styles.typingText}>{displayedText}<span className={styles.cursor}>|</span></span>;
};

export default TypingEffect;