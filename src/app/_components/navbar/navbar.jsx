'use client'

import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import white from '../../../../public/assets/whitelogo.png';
import color from '../../../../public/assets/blacklogo.png';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={styles.nav}>
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
                        <Link href="#services" className={styles.link} onClick={handleLinkClick}><b>Services</b></Link>
                        <Link href="#works" className={styles.link} onClick={handleLinkClick}><b>Works</b></Link>
                        <Link href="#contact" className={styles.contact} onClick={handleLinkClick}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}