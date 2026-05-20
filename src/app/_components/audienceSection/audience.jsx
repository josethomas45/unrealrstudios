'use client'
import styles from './audience.module.css';
import { motion } from 'framer-motion';

const audiences = [
  'Startups & Small Businesses',
  'Local Brands',
  'E-commerce Businesses',
  'Restaurants & Lifestyle',
  'Creators & Personal Brands',
  'Product Launches',
  'Growing Businesses',
  'Social-First Brands',
];

export default function Audience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  return (
    <div className={styles.audience} id='audience'>
      <div className={styles.inner}>
        <motion.div 
          className={styles.left}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <span className={styles.label}>WHO WE WORK WITH</span>
          <h1>Built for Brands<br />at Every Stage.</h1>
          <p>From your first campaign to your hundredth — we scale with you. Whether you have a clear idea or just a vision, we'll turn it into powerful visual content.</p>
        </motion.div>
        <div className={styles.right}>
          <motion.div 
            className={styles.tags}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {audiences.map((a, i) => (
              <motion.span variants={itemVariants} className={styles.tag} key={i}>{a}</motion.span>
            ))}
          </motion.div>
          <motion.p 
            className={styles.promise}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <strong>Our Promise:</strong> High-quality advertising is not limited to big brands. At Unrealr Studios, we make premium storytelling accessible — helping you launch faster, spend smarter, and look bigger than your budget.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

