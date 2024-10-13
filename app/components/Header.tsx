import React from 'react';
import Link from 'next/link';
import styles from '@styles/header.module.scss';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            {/* <h1>Recept Gyűjtemény</h1> */}
            <div className={styles.header_wrapper}>
                <Link href='/' className={styles.logo_group}>
                    <Image
                        className={styles.logo}
                        src="/kostold-meg/logo.svg"  // Kép útvonala a public mappában
                        alt="logo"    // Kép leírása
                        width={35}        // Kép szélessége pixelben
                        height={35}
                    />
                    <span className={styles.span}>Kóstolj Bele!</span>
                </Link>
                <nav>
                    <Link href="/">Főoldal</Link>
                    <Link href="/pages/recipes">Receptek</Link>
                    <Link href="/pages/login">Bejelentkezés</Link>
                    <Link href="/pages/register">Regisztráció</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
