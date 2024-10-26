import Image from 'next/image';
import styles from './styles/home.module.scss';
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.img_container}>
        <Image
          className={styles.banner_img}
          src="/banner6.jpg"
          alt="Banner kép"    // Kép leírása
          width={2200}        // Kép szélessége pixelben
          height={400}        // Kép magassága pixelben
        />
        <div className={styles.text_wrapper}>
          <div className={styles.text_container}>
            <h1>Receptek</h1>
            <p>A legjobb receptek egy helyen!</p>
          </div>
        </div>
      </div>



      <div className={styles.content}>
        <div className={styles.main_container}></div>
        <aside className={styles.aside}></aside>
      </div>
    </div>
  );
}
