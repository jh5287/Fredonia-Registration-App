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
    <div className='m-3 grid grid-cols-2 gap-5 h-full'> {/* Apply container class */}
      {/* First div spans across 3 columns */}
      {/* Remaining divs */}
      <UserInfo classname={`${styles.item} row-start-1 col-span-2`} />

      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 1
        </div>
        <div>
          lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 2
        </div>
        <div>
          lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 3
        </div>
        <div>
          lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 4
        </div>
        <div>
          lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 5
        </div>
        <div>
          lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 6
        </div>
        <div>
          lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 7
        </div>
        <div>
          lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles['item-header']}>
          Semester 8
        </div>
        <div>
          lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
