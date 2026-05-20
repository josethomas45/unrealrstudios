'use client'
import { useEffect, useRef, useState } from 'react';
import styles from './stats.module.css';
import { motion } from 'framer-motion';

const stats = [
  { value: 80, suffix: '%+', label: 'Cost Reduction', sub: 'vs traditional studios' },
  { value: 3, suffix: '×', label: 'Faster Delivery', sub: 'weeks become days' },
  { value: 100, suffix: '%', label: 'Cinematic Quality', sub: 'no matter the budget' },
  { value: 0, suffix: '', label: 'Hidden Fees', sub: 'transparent pricing model' },
];

function Counter({ value, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const steps = 60;
    const increment = value / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1800 / steps);
    return () => clearInterval(timer);
  }, [value, active]);
  return <>{count}{suffix}</>;
}

export default function Stats() {
  const [active, setActive] = useState(false);
  
  return (
    <motion.div 
      className={styles.stats}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
      onViewportEnter={() => setActive(true)}
    >
      {stats.map((stat, i) => (
        <div className={styles.stat} key={i}>
          <h2><Counter value={stat.value} suffix={stat.suffix} active={active} /></h2>
          <p className={styles.label}>{stat.label}</p>
          <span className={styles.sub}>{stat.sub}</span>
        </div>
      ))}
    </motion.div>
  );
}

