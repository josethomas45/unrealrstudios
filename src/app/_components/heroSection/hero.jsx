import styles from './hero.module.css'
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import Link from 'next/link'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.videoContainer}>
                <video
                    autoPlay
                    loop
                    muted
                    className={styles.video}
                >
                    <source
                        id='webm'
                        src='/assets/hero.mp4'
                        type='video/mp4'
                    />
                </video>
                <div className={styles.stats}>
                    <span>200+ Clients</span>
                    <span>5+ years of service
                    </span>
                </div>
            </div>
            <div className={styles.heroContent}>
                <div className={styles.head}>
                    <h1>Unrealr Studios</h1>
                    <p>Where Imagination Meets Scalable Production</p>
                </div>
                <div className={styles.text}>
                    <h3>High-quality advertising should not be limited to big brands.</h3>
                    <p>At Unrealr Studios, we craft visually striking, story-driven content that helps brands stand out—without burning through massive budgets. By combining AI-powered production with traditional filmmaking techniques, we deliver high-quality ads that are fast, flexible, and cost-effective.</p>
                    <div className={styles.socials}>
                        {/* <Link href='#'>Contact Us</Link> */}
                        <Link href="#contact">Contact Us</Link>
                        <Link 
                            href="https://www.youtube.com/@UnrealrStudios/shorts"
                            target="_blank"
                        ><FaYoutube /></Link>
                        <Link 
                            target="_blank"
                            href="https://www.instagram.com/UnrealrStudios"><FaInstagram /></Link>
                    </div>
                </div>
            </div>
            <hr className={styles.hr} />
        </div>
    )
}