'use client'
import styles from './why.module.css';
import { MdOutlineRocketLaunch, MdOutlineTimer, MdOutlineAutoAwesome } from 'react-icons/md';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <MdOutlineRocketLaunch />,
    number: '01',
    title: 'Cost-Effective Production',
    description: 'We reduce traditional production costs by up to 60–80% using AI workflows and lean crews — without sacrificing cinematic quality.',
    points: ['No expensive sets or locations', 'AI-powered post-production', 'Lean crew, maximum output'],
  },
  {
    icon: <MdOutlineTimer />,
    number: '02',
    title: 'Fast Turnaround',
    description: 'What usually takes weeks, we deliver in days. Our AI-integrated pipeline compresses timelines without cutting corners.',
    points: ['Rapid concept to delivery', 'Parallel AI & live workflows', 'Platform-ready outputs'],
  },
  {
    icon: <MdOutlineAutoAwesome />,
    number: '03',
    title: 'Future-Ready Approach',
    description: 'We stay ahead by integrating AI video tools, virtual environments, and digital production pipelines into every project.',
    points: ['AI video generation', 'Virtual LED environments', 'Scalable multi-platform content'],
  },
];

export default function Why() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] } }
  };

  return (
    <div className={styles.why} id='why'>
      <motion.div 
        className={styles.head}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <span className={styles.label}>WHY UNREALR</span>
        <h1>High Quality. Lower Cost.<br />Zero Compromise.</h1>
        <p>Premium advertising should not be limited to big brands. We make cinematic storytelling accessible.</p>
      </motion.div>
      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((f, i) => (
          <motion.div variants={itemVariants} className={styles.card} key={i}>
            <div className={styles.cardTop}>
              <span className={styles.number}>{f.number}</span>
              <div className={styles.icon}>{f.icon}</div>
            </div>
            <h2>{f.title}</h2>
            <p>{f.description}</p>
            <ul>
              {f.points.map((p, j) => (
                <li key={j}><span className={styles.dot}></span>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
