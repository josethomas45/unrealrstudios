'use client'
import styles from './process.module.css';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Brief',
    description: 'We listen deeply to your vision, goals, and budget. No templates — every project starts from scratch.',
  },
  {
    number: '02',
    title: 'Concept',
    description: 'Our creative team develops a tailored visual strategy, mood boards, and AI-assisted pre-visualisation.',
  },
  {
    number: '03',
    title: 'Produce',
    description: 'AI workflows + lean crew + smart tech deliver cinematic results — faster than traditional studios.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Fast, platform-optimised content ready to deploy across Instagram, YouTube, TikTok, and beyond.',
  },
];

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] } }
  };

  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    show: { scaleX: 1, originX: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }
  };

  return (
    <div className={styles.process} id='process'>
      <motion.div 
        className={styles.head}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <span className={styles.label}>HOW IT WORKS</span>
        <h1>From Brief to Brilliant,<br />in Record Time.</h1>
      </motion.div>
      <motion.div 
        className={styles.steps}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {steps.map((step, i) => (
          <motion.div variants={itemVariants} className={styles.step} key={i}>
            <div className={styles.stepHead}>
              <motion.span 
                className={styles.number}
                whileHover={{ scale: 1.1, color: '#fff', backgroundColor: '#ff6b00' }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >{step.number}</motion.span>
              {i < steps.length - 1 && (
                <motion.div 
                  className={styles.line} 
                  variants={lineVariants}
                />
              )}
            </div>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

