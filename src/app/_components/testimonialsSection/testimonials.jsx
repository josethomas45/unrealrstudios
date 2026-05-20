'use client'
import styles from './testimonials.module.css';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Unrealr Studios transformed our brand story into a cinematic masterpiece. The AI-hybrid approach gave us big-budget visuals at a startup budget. Genuinely blown away.",
    name: "Sarah K.",
    role: "CEO",
    company: "Bloom & Co.",
    initials: "SK",
  },
  {
    quote: "Delivered our campaign in 5 days. The quality blew us away — we looked like we spent 5× more than we did. Our engagement rates doubled within the first week.",
    name: "James R.",
    role: "Marketing Director",
    company: "Horizon Eats",
    initials: "JR",
  },
  {
    quote: "Working with Unrealr was effortless. They understood our vision instantly and created content that our audience absolutely loved. Will 100% work with them again.",
    name: "Amara O.",
    role: "Founder",
    company: "Vivid Wellness",
    initials: "AO",
  },
];

export default function Testimonials() {
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] } }
  };

  return (
    <div className={styles.testimonials} id='testimonials'>
      <motion.div 
        className={styles.head}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <span className={styles.label}>TESTIMONIALS</span>
        <h1>Brands That Went Unreal.</h1>
      </motion.div>
      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {testimonials.map((t, i) => (
          <motion.div variants={itemVariants} className={styles.card} key={i}>
            <div className={styles.quote}>&ldquo;</div>
            <p className={styles.text}>{t.quote}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.meta}>{t.role}, {t.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

