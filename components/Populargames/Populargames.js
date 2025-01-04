import React, { useState, useEffect } from "react";
import styles from './Populargames.module.css';
function Populargames({ names, genres, ratings, images }) {  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);  
    }, 3000);

    return () => clearInterval(interval); 
  }, [names.length]);  
  return (
    <section className={styles.Populargames}>
    <h2>Most Popular</h2>

    <div className={styles.PopularCards}>
      {names.map((name, index) => (  
        <div 
          key={index}
          className={`${styles.PopularCard} ${currentIndex === index ? styles.active : ''}`}
        >
          <div className={styles.Populartext}>
            <img src={images[index]} alt={name} />
            <h3>{name}</h3>
            <span>{genres[index]}</span>
            <div className={styles.rating}>
              <span>{ratings[index]}</span>
              <i className='bx bxs-star bx-flashing bx-flip-horizontal'></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
   
  );
}

export default Populargames;
