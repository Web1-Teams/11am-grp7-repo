import React from "react";
import './GameCard.css'; 
import SubwayImage from "../../Assets/subway.jpg";
import HadesImage from "../../Assets/Hades.jpg";
import pokemon from "../../Assets/pokemon.jpg";
import candy from "../../Assets/candy.jpg";
import HILL from "../../Assets/hillclimb.jpg";
import Tom from "../../Assets/tom.jpg";

const games = [
    { name: "Game Name : Subway", Type: "Type : Endless Runner", image: SubwayImage },
    { name: "Game Name : Hades II", Type: "Type : Action Roguelike", image: HadesImage },
    { name: "Game Name : Pokemon", Type: "Type : Card Battle", image: pokemon },
    { name: "Game Name : Candy Crush", Type: "Type : Puzzle Game", image: candy },
    { name: "Game Name : Hill Climb", Type: "Type : Racing Game", image: HILL },
    { name: "Game Name : My Talking Tom",Type: "Type : Virtual Pet Simulation", image: Tom },
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
