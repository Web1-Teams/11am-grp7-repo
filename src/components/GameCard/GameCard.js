import React from "react";
import styles from './GameCard.module.css';
import Rdr from "../../Assets/Games/red_dead_redemption_2.jpg";

function GameCard(){

    return( //this is just a test "Hashems Games section(Card) should be here"
        <div className={styles.game}>
        <img src={Rdr} alt="RDR2"/>
        <div className={styles.basicinfo}>
            <h4>Action | Openworld</h4>
        </div>
    </div>
    );
}

// The props functions someone have to do here.

export default GameCard;