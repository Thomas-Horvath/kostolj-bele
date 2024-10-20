"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@styles/header.module.scss';
import Image from 'next/image';
import { RiMenu5Line } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";
// import { headers } from 'next/headers';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            {/* <h1>Recept Gyűjtemény</h1> */}
            <div className={styles.header_wrapper}>
                <Link href='/' className={styles.logo_group} onClick={() => setIsOpen(false)}>
                    <Image
                        className={styles.logo}
                        src="/logo.svg"  // Kép útvonala a public mappában
                        alt="logo"    // Kép leírása
                        width={35}        // Kép szélessége pixelben
                        height={35}
                    />
                    <span className={styles.span}>Kóstolj Bele!</span>
                </Link>
                <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
                    <Link href="/" onClick={() => setIsOpen(false)}>Főoldal</Link>
                    <Link href="/pages/recipes" onClick={() => setIsOpen(false)}>Receptek</Link>
                    <Link href="/pages/login" onClick={() => setIsOpen(false)}>Bejelentkezés</Link>
                    <Link href="/pages/register" onClick={() => setIsOpen(false)}>Regisztráció</Link>
                </nav>
                {isOpen ?
                    <IoCloseCircleOutline className={styles.hamburger_icon} onClick={toggleMenu}/>
                    :
                    <RiMenu5Line className={styles.hamburger_icon} onClick={toggleMenu} />
                }
            </div>
        </header>
    );
};

export default Header;
