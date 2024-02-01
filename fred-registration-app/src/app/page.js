import React from 'react';
import styles from './Page.module.css'; // Import CSS module

const Page = () => {
  return (
    <div className={styles.container}> {/* Apply container class */}
      {/* Render 8 evenly spaced divs */}
      <div className={styles.item}>1</div>
      <div className={styles.item}>2</div>
      <div className={styles.item}>3</div>
      <div className={styles.item}>4</div>
      <div className={styles.item}>5</div>
      <div className={styles.item}>6</div>
      <div className={styles.item}>7</div>
      <div className={styles.item}>8</div>
    </div>
  );
};

export default Page;
