'use client'
import React, {useState} from 'react';
import styles from './page.module.css'; // Import CSS module
import CGPA from '@/components/CGPA';
import UserInfo from '@/components/UserInfo';

const Page = () => {
  const [isSpanning, setIsSpanning] = useState(true);

  const handleClose = () => {
    setIsSpanning(false);
  };

  const handlePutBack = () => {
    setIsSpanning(true);
  };
  return (
    <div>
    <div className={styles.container}> {/* Apply container class */}
      {/* First div spans across 3 columns */}
      <CGPA classname={`${styles.item} ${styles['CGPA']}`} />{/* Second div spans across 3 columns */}
      {/* Remaining divs */}
      <UserInfo classname={`${styles.item} ${styles['user-info']}`} />

      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 1
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 2
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 3
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 4
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 5
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 6
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 7
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 8
        </div>
      </div>
    </div>
    <div className='text-3xl font-bold underline'>Hello world</div>
    </div>
  );
};

export default Page;
