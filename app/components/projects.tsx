import styles from './ImageGrid.module.css';

const ImageGrid = () => (
  <div className={styles.gridContainer}>
    <div className={styles.card}>
      <img src="public\1.jpg" alt="Project 1" className={styles.image} />
      <p className={styles.text}>Project 1</p>
    </div>
    <div className={styles.card}>
      <img src="/public/2.jpg" alt="Project 2" className={styles.image} />
      <p className={styles.text}>Project 2</p>
    </div>
    <div className={styles.card}>
      <img src="/public/3.jpg" alt="Project 3" className={styles.image} />
      <p className={styles.text}>Project 3</p>
    </div>
    <div className={styles.card}>
      <img src="/public/4.jpg" alt="Project 4" className={styles.image} />
      <p className={styles.text}>Project 4</p>
    </div>
    <div className={styles.card}>
      <img src="/public/5.jpg" alt="Project 5" className={styles.image} />
      <p className={styles.text}>Project 5</p>
    </div>
    <div className={styles.card}>
      <img src="/public/6.jpg" alt="Project 6" className={styles.image} />
      <p className={styles.text}>Project 6</p>
    </div>
    <div className={styles.card}>
      <div className={styles.more}>
        <span>+</span>
        <p className={styles.text}>More</p>
      </div>
    </div>
  </div>
);

export default ImageGrid;

