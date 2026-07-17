'use client'

import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import white from '../../../../public/assets/whitelogo.png';
import color from '../../../../public/assets/blacklogo.png';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, id) => {
        if (e && id) {
            e.preventDefault();
            setIsMobileMenuOpen(false);
            
            if (pathname !== '/') {
                router.push(`/#${id}`);
                return;
            }

            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav 
            className={styles.nav}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
        >
            <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isMobileMenuOpen ? styles.open : ''}`}>
                <div className={`${styles.menuIcon} ${isMobileMenuOpen ? styles.open : ''}`} onClick={handleMobileMenuToggle}>
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                </div>

                <Link href="/" aria-label='logo' onClick={handleLinkClick} className={styles.white}>
                    <Image
                        className={styles.logo}
                        src={white}
                        alt='logo'
                        width={500}
                        height={500}
                    />
                </Link>

                <Link href="/" aria-label='logo' onClick={handleLinkClick} className={styles.color}>
                    <Image
                        className={styles.color_logo}
                        src={color}
                        alt='logo'
                        width={500}
                        height={500}
                    />
                </Link>

                <div className={`${styles.links} ${isMobileMenuOpen ? styles.open : ''} ${isScrolled ? styles.scrolled : ''}`}>
                    <Link href="/" aria-label='logo' onClick={handleLinkClick}>
                        <Image
                            className={styles.logo_Mobile}
                            src={color}
                            alt='logo'
                            width={500}
                            height={500}
                        />
                    </Link>

                    <div className={styles.linkBlocks}>
                        <Link href="/#services" className={styles.link} onClick={(e) => handleLinkClick(e, 'services')}><b>Services</b></Link>
                        <Link href="/#works" className={styles.link} onClick={(e) => handleLinkClick(e, 'works')}><b>Works</b></Link>
                        <Link href="/pricing" className={styles.link} onClick={handleLinkClick}><b>Pricing</b></Link>
                        <Link href="/#contact" className={`${styles.contact} ${pathname === '/pricing' ? styles.pricingContact : ''}`} onClick={(e) => handleLinkClick(e, 'contact')}>Contact</Link>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}