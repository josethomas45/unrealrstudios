'use client'

import styles from './service.module.css'
import { motion } from 'framer-motion'

const data = [
  {
    number: '01',
    title: 'AI HYBRID ADVERTISING',
    subtitle: 'Our Core Strength',
    description: 'We blend AI-generated visuals with real-world filming to create cinematic ads that look high-budget at a fraction of the cost. No expensive sets. No massive crew.',
    tags: ['AI Visuals', 'Virtual Production', 'Live Shoot Hybrid'],
  },
  {
    number: '02',
    title: 'BRAND FILMS',
    subtitle: 'Budget-Friendly Storytelling',
    description: 'Brand introduction films, founder stories, and product narratives that connect. Minimal crew, smart tech, and strong storytelling — maximum impact, minimum cost.',
    tags: ['Founder Stories', 'Brand Intro', 'Product Narratives'],
  },
  {
    number: '03',
    title: 'SOCIAL CONTENT',
    subtitle: 'Product Ads & Short-Form',
    description: 'Short-form ads designed for where brands grow today. AI-enhanced product visuals, motion graphics, and fast-edit promos for Instagram Reels, YouTube Shorts, and TikTok.',
    tags: ['Instagram Reels', 'YouTube Shorts', 'TikTok'],
  },
  {
    number: '04',
    title: 'VISUAL DEVELOPMENT',
    subtitle: 'Creative Direction',
    description: 'We don\'t just produce — we build your brand\'s visual identity. Concept development, mood boards, AI-assisted pre-visualisation, and full campaign design.',
    tags: ['Concept Dev', 'Mood Boards', 'AI Pre-Viz'],
  },
  {
    number: '05',
    title: 'INDIE & EXPERIMENTAL',
    subtitle: 'Boundary-Pushing Production',
    description: 'For brands that want to genuinely stand out. Experimental ad formats, narrative-driven campaigns, and hybrid cinematic storytelling that breaks the mold.',
    tags: ['Experimental Formats', 'Narrative Campaigns', 'Cinematic Hybrid'],
  },
]

export default function Service() {
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
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] } }
  };

  return (
    <div className={styles.service} id='services'>
      <motion.div 
        className={styles.head}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <span className={styles.label}>WHAT WE DO</span>
        <h1>Five Services.<br />One Hybrid Studio.</h1>
        <p>Combining AI, VFX, and live-action filmmaking to deliver premium results on startup budgets.</p>
      </motion.div>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {data.map((item, index) => (
          <motion.div variants={itemVariants} className={styles.card} key={index}>
            <span className={styles.ghostNumber} aria-hidden="true">{item.number}</span>
            <div className={styles.content}>
              <span className={styles.number}>{item.number}</span>
              <h2>{item.title}</h2>
              <p className={styles.subtitle}>{item.subtitle}</p>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.tags}>
                {item.tags.map((tag, j) => (
                  <span className={styles.tag} key={j}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}