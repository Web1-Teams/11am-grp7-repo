import React from "react";
import './GameCard.css'; 
import  RedDead from "../../Assets/RedDeadRedemption.jpg";
import  Rainbow from "../../Assets/Rainbow.jpg";
import  arma3 from "../../Assets/Arma_3.jpg";
import  apx from "../../Assets/Apex.jpg";
import  Ark from "../../Assets/ARK.jpg";
import  valorant from "../../Assets/Valorant.jpg";
import  Elden from "../../Assets/Elden.jpg";
import  Delta from "../../Assets/Delta.jpg";
import  Counter from "../../Assets/Counter_Strike.jpg";
import  Ghost from "../../Assets/Ghost.jpg";
import  Grand from "../../Assets/Grandtheftauto.jpg";
import HadesImage from "../../Assets/Hades.jpg";
import candy from "../../Assets/candy.jpg";
import HILL from "../../Assets/hillclimb.jpg";
import Tom from "../../Assets/tom.jpg";
import Gensh from "../../Assets/Genshinimpact.jpg";
import TombRaider from "../../Assets/TombRaider.jpg";
import pokemon from "../../Assets/pokemon.jpg";
import SubwayImage from "../../Assets/subway.jpg";


const games = [
    { name: "Game Name : RedDeadRedemption 2", Type: "Type :  Open World, Story Telling , Adventure", image:RedDead  },
    { name: "Game Name : Rainbow Six Siege", Type: "Type :  FPS, PvP", image:Rainbow },
    { name: "Game Name : Arma 3", Type: "Type : Action , Simulation , Shooter", image:arma3 },
    { name: "Game Name : Apex Legends", Type: "Type : Battle Royal , FPS", image:apx },
    { name: "Game Name : ARK Survival Evolved", Type: "Type :Open World , Survival", image:Ark },
    { name: "Game Name : Valorant", Type: "Type :  PvP , Competitive , Action", image:valorant },
    { name: "Game Name : Elden Ring ", Type: "Type : Dark Fantasy, RPG", image:Elden },
    { name: "Game Name : Delta Force", Type: "Type : FPS , Extraction Shooter", image:Delta },
    { name: "Game Name : Counter Strike", Type: "Type : Battle Royal , FPS ", image:Counter  },
    { name: "Game Name : Ghost Of Tsushima", Type: "Type : RPG , Story Telling", image:Ghost },
    { name: "Game Name : Grand theft auto 5", Type: "Type :Open World, Crime , Action", image:Grand },
    { name: "Game Name : Hades II", Type: "Type : Action Roguelike", image: HadesImage },
    { name: "Game Name : Candy Crush", Type: "Type : Puzzle Game", image: candy },
    { name: "Game Name : Hill Climb", Type: "Type : Racing Game", image: HILL },
    { name: "Game Name : My Talking Tom",Type: "Type : Virtual Pet Simulation", image:Tom },
    { name: "Game Name : Tomb Raider", Type: "Type :Action, adventure", image:TombRaider },
    { name: "Game Name : Genshin impact", Type: "Type : action, adventure, role-playing", image:Gensh },
    { name: "Game Name : Pokemon", Type: "Type : Card Battle", image: pokemon },
    { name: "Game Name : Subway", Type: "Type : Endless Runner", image: SubwayImage },
];

function GamesSection() {
    return (
        <div className="Games">
            <h1> Games</h1>
            <div className="gameCardContainer">
                {games.map((game, index) => (
                    <div key={index} className="gameCard">
                        <img src={game.image} alt={game.name} />
                        <div className="text">
                            <h3>{game.name}</h3>
                            <span>{game.Type}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GamesSection;
