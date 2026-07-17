'use client'

import { useState, useRef } from 'react';
import styles from './showcase.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    video: '/assets/Perfume Ad_03.mp4',
    title: 'Locali',
    type: 'Brand Campaign',
    desc: 'A full brand campaign for Locali — combining AI-assisted visuals and live-action filming to tell a compelling local story.',
    tags: ['Brand Campaign', 'AI Hybrid', 'Commercial'],
  },
  {
    video: '/assets/Locali Ad_01_Final For Client.mp4',
    title: 'Dubai Ad',
    type: 'Commercial',
    desc: 'A high-energy commercial produced for the Dubai market — cinematic visuals, fast cuts, and a premium brand feel on a lean budget.',
    tags: ['Commercial', 'Dubai', 'Fast Turnaround'],
  },
];

export default function Showcase() {
  const [activeVideo, setActiveVideo] = useState(null);
  const modalRef = useRef(null);

  const openModal = (video) => setActiveVideo(video);
  const closeModal = () => setActiveVideo(null);
  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) closeModal();
  };

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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] } }
  };

  return (
    <div className={styles.showcase} id='works'>
      <motion.div
        className={styles.head}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <span className={styles.label}>OUR WORK</span>
        <h1>SELECTED PROJECTS</h1>
        <p>Two real campaigns. The start of something unreal.</p>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((item, index) => (
          <motion.div
            variants={itemVariants}
            className={styles.card}
            key={index}
            onClick={() => openModal(item.video)}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className={styles.videoWrap}>
              <video
                className={styles.cardVideo}
                src={item.video}
                muted
                loop
                playsInline
                onMouseEnter={e => e.currentTarget.play()}
                onMouseLeave={e => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
              />
              <div className={styles.overlay}>
                <div className={styles.playBtn}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardMeta}>
                <h2>{item.title}</h2>
                <span className={styles.type}>{item.type}</span>
              </div>
              <p>{item.desc}</p>
              <div className={styles.tags}>
                {item.tags.map((tag, j) => (
                  <span className={styles.tag} key={j}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className={styles.modal}
            ref={modalRef}
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button className={styles.closeBtn} onClick={closeModal} aria-label="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <video
                src={activeVideo}
                controls
                autoPlay
                className={styles.modalVideo}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}