import React from "react";
import s from './Home.css'; //be aware when using element styling

import GameCard from "../../components/GameCard/GameCard";
import  "../../components/GameCard/GameCard.css";



function Home() {
    return(
    <div>
    <div className={s.div}>Home  Aprar & amr Code here</div>


{/* Hashem Whole section should wrap each card i did import the desired css file. */}

     {/* <h2 className={styles.gamestitle}>Games</h2> */}
     
    
     <div ClassName="games-cards">    
        <GameCard />
    </div>
    </div>
    );
}

//if you have added any javascript to the home section convert 
// them into functions and include them here.

export default Home;