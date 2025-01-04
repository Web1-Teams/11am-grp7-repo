import React, { useState, useEffect } from "react";
import styles from './Populargames.module.css';




function Populargames({ games }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const filteredGames = games.filter((game) => parseFloat(game.average) > 4.7);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredGames.length);
      }, 4000);
  
      return () => clearInterval(interval);
    }, [filteredGames.length]);
  
    return (
      <section className={styles.Populargames} id="popular">
        <h2>Most Popular</h2>
  
        <div className={styles.PopularCards}>
          {filteredGames.map((game, index) => (
            <div
              key={index}
              className={`${styles.PopularCard} ${currentIndex === index ? styles.active : ""}`}
            >

              <div className={styles.Populartext}>
                <img src={game.image} alt={game.name}  />
                <h3>{game.name}</h3>
                <span>{game.types}</span>
                <div className={styles.rating}>
                  <span>{game.average}</span>
                  <i className="bx bxs-star bx-flashing bx-flip-horizontal"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }



export default Populargames;