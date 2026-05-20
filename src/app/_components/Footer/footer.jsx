import styles from './footer.module.css'
import Link from 'next/link'
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail, MdArrowOutward } from "react-icons/md";
import Marquee from "react-fast-marquee";

export default function Footer() {
    return (
        <div className={styles.footerWrapper} id='contact'>
            <div className={styles.ambientGlow}></div>
            <div className={styles.footer}>
                <div className={styles.topSection}>
                    <div className={styles.ctaWrapper}>
                        <h2>Ready to go beyond reality?</h2>
                        <a href='mailto:hello@unrealrstudios.com' className={styles.bigCta}>
                            <h1>Let&apos;s Talk <MdArrowOutward className={styles.arrow} /></h1>
                        </a>
                    </div>

                    <div className={styles.infoWrapper}>
                        <div className={styles.infoCol}>
                            <p className={styles.colTitle}>Visit Us</p>
                            <Link href="#" className={styles.contactItem}>
                                <div className={styles.iconBox}><FaLocationDot /></div>
                                <span>19 Sylvia Pankhurst Way<br/>M13 9NJ, Manchester, UK</span>
                            </Link>
                        </div>
                        
                        <div className={styles.infoCol}>
                            <p className={styles.colTitle}>Contact</p>
                            <Link href="tel:07437481363" className={styles.contactItem}>
                                <div className={styles.iconBox}><FaPhone /></div>
                                <span>07437481363</span>
                            </Link>
                            <Link href="mailto:hello@unrealrstudios.com" className={styles.contactItem}>
                                <div className={styles.iconBox}><MdOutlineEmail /></div>
                                <span>hello@unrealrstudios.com</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.marqueeContainer}>
                    <Marquee speed={80} autoFill={true} className={styles.marquee}>
                        <span>UNREALR STUDIOS&nbsp;&nbsp;—&nbsp;&nbsp;</span>
                    </Marquee>
                </div>

                <div className={styles.bottomSection}>
                    <p>&copy; {new Date().getFullYear()} Unrealr Studios. All rights reserved.</p>
                    <p>Design & Dev by <Link href="https://muhammedr.me/" target='_blank'><b>MR</b></Link></p>
                </div>
            </div>
        </div>
    )
}
