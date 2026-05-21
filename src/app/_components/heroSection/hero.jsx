'use client';
import styles from './hero.module.css'
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import Link from 'next/link'
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.videoContainer}>
                <motion.div 
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.165, 0.84, 0.44, 1] }}
                    style={{ width: '100%', height: '100%' }}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline={true}
                        className={styles.video}
                    >
                        <source
                            id='webm'
                            src='/assets/hero-showreel.webm'
                            type='video/webm'
                        />
                    </video>
                </motion.div>
                <div className={styles.videoOverlay}></div>
            </div>
            <div className={styles.heroContent}>
                <motion.div 
                    className={styles.head}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
                >
                    <h1>CRAFTING SURREAL ADVERTISING, POWERED BY AI.</h1>
                    <p>WHERE CINEMA MEETS INNOVATION</p>
                </motion.div>
                <motion.div 
                    className={styles.text}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
                >
                    <h3>A HYBRID STUDIO DEFINING THE FUTURE OF COMMERCIAL PRODUCTION.</h3>
                    <p>Unrealr Studios combines LIVE SHOOT, AI, and VFX to deliver SPECTACULAR, LARGE-CANVAS visual campaigns at competitive low costs. Based in London, servicing the UK & EU.</p>
                    <div className={styles.buttons}>
                        <Link href="#works" className={styles.primaryBtn}>WATCH OUR REEL</Link>
                        <Link href="#contact" className={styles.secondaryBtn}>START PROJECT</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}