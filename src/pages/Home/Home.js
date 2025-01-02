import React,{useState} from "react";

import s from './Home.module.css'; //be aware when using element styling

// import styles from "../../components/GameCard/GameCard.module.css";

import Popup from "../../components/Popup/Popup";

import Game from "../../components/Game/Game";

import myImage from "../../Assets/home_background.png";
import "../../components/GameCard/GameCard.css";
import GamesCard from "../../components/GameCard/GameCard";

import games from "../../components/GameInfo/GameInfo";


function Home() {
    const [popup, setpopup] = useState(false);
    const [popgame,setgame] = useState(null);

    const poptrue = (game) => {
        setgame(game);
        setpopup(true);
        document.body.style.overflow = "hidden";
    };

    const popfalse = () => {
        setpopup(false);
        document.body.style.overflow = "auto";
    };

    const renderPopup = () => {
        if (popup) {
            return (
                <Popup onClose={popfalse}>
                    <Game 
                    genres={popgame.types} 
                    description={popgame.description} 
                    title={popgame.name}
                    pic={popgame.pic}
          
                    />
                </Popup>
            );
        }
        return null; 
    };

    
    return(
    <div>
     <section id="home">
        <img src={myImage} alt="Background" className={s.home_img} />
        <div className={s.home}>
          <div className={s.div_explain}>
            <h1 className={s.explain_1}>
              Rating your favorite games and share your feedback !
            </h1>
            <p className={s.explain_2}>
              Leave Your Ratings, And Let Us Know How We Can Improve Your Gaming
              Experience.
            </p>
          </div>
        </div>
      </section>



    <div>
    <h1 className="gameCardContainer + text"> Games</h1>
    <div className="gameCardContainer">
      {games.map((game,index) => (
        <GamesCard key={index} 
        name={game.name} 
        types={game.types} 
        image={game.image} 

        onClick={() => poptrue(game)} 
        />
      ))}    
        
    </div>
    </div>
    {renderPopup()}
    </div>
    );
}

export default Home;