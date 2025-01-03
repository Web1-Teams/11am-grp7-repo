import React, { useState, useEffect } from "react";
import styles from './Populargames.module.css';

function Populargames() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className={styles.Populargames}>
      <h2>Most Popular</h2>

      <div className={styles.PopularCards}>
        <div className={`${styles.PopularCard} ${currentIndex === 0 ? styles.active : ''}`}>
          <div className={styles.Populartext}>
            <img src="image/fortnite.jpg" alt="Fortnite" />
            <h3>Fortnite</h3>
            <span>survival</span>
            <div className={styles.rating}>
              <span>9.5/10</span>
              <i className='bx bxs-star bx-flashing bx-flip-horizontal'></i>
            </div>
          </div>
        </div>

        <div className={`${styles.PopularCard} ${currentIndex === 1 ? styles.active : ''}`}>
          <div className={styles.Populartext}>
            <img src="image/rdr2.jpg" alt="Rdr2" />
            <h3>Rdr2</h3>
            <span>survival</span>
            <div className={styles.rating}>
              <span>9.1/10</span>
              <i className='bx bxs-star bx-flashing bx-flip-horizontal'></i>
            </div>
          </div>
        </div>

        <div className={`${styles.PopularCard} ${currentIndex === 2 ? styles.active : ''}`}>
          <div className={styles.Populartext}>
            <img src="image/battlefield.jpg" alt="Battlefield" />
            <h3>Battlefield</h3>
            <span>war</span>
            <div className={styles.rating}>
              <span>9.9/10</span>
              <i className='bx bxs-star bx-flashing bx-flip-horizontal'></i>
            </div>
          </div>
        </div>

        <div className={`${styles.PopularCard} ${currentIndex === 3 ? styles.active : ''}`}>
          <div className={styles.Populartext}>
            <img src="image/apex.jpg" alt="Apex Legends" />
            <h3>Apex Legends</h3>
            <span>survival</span>
            <div className={styles.rating}>
              <span>9.9/10</span>
              <i className='bx bxs-star bx-flashing bx-flip-horizontal'></i>
            </div>
          </div>
        </div>

        <div className={`${styles.PopularCard} ${currentIndex === 4 ? styles.active : ''}`}>
          <div className={styles.Populartext}>
            <img src="image/forza.jpg" alt="Forza" />
            <h3>Forza</h3>
            <span>racing</span>
            <div className={styles.rating}>
              <span>9.6/10</span>
              <i className='bx bxs-star bx-flashing bx-flip-horizontal'></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Populargames;
