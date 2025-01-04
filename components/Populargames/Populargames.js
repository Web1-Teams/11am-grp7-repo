import React, { useState, useEffect } from "react";
import styles from './Populargames.module.css';

function Populargames({ games }) {  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);   
    }, 3000);

    return () => clearInterval(interval);
  }, [games.length]);   

  return (
    <section className={styles.Populargames}>
      <h2>Most Popular</h2>

      <div className={styles.PopularCards}>
        {games.map((game, index) => (  
          <div
            key={index}
            className={`${styles.PopularCard} ${currentIndex === index ? styles.active : ''}`}
          >
            <div className={styles.Populartext}>
              <img src={game.image} alt={game.name} />
              <h3>{game.name}</h3>
              <span>{game.genre}</span>
              <div className={styles.rating}>
                <span>{game.rating}</span>
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
