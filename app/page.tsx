import Image from 'next/image';
import styles from '@styles/home.module.scss';
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.img_container}>
        <Image
          className={styles.banner_img}
          src="/banner4.jpg"  // Kép útvonala a public mappában
          alt="Banner kép"    // Kép leírása
          width={2200}        // Kép szélessége pixelben
          height={400}        // Kép magassága pixelben
        />
        <div className={styles.text_container}>

          <h1>Üdvözöllek a Főoldalon!</h1>
          <p>Itt találod a legjobb recepteket!</p>
        </div>
      </div>
    </div>
  );
}
