import React from 'react';
import styles from '@styles/footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.content_wrapper}>

                <div className={styles.social}></div>
                <div className={styles.links}></div>
                <div className={styles.contact}></div>

            </div>
            <div className={styles.copyright}>
                <p>CopyRight &copy;2024 Thomas Horvath</p>
            </div>
        </div>
    )
}

export default Footer