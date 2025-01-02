import "./GameCard.css";
import BackToTop from "./scroll";

// import RedDead from "../../Assets/Games/RedDeadRedemption.jpg";
// import Rainbow from "../../Assets/Games/Rainbow.jpg";
// import arma3 from "../../Assets/Games/Arma_3.jpg";
// import apx from "../../Assets/Games/Apex.jpg";
// import Ark from "../../Assets/Games/ARK.jpg";
// import valorant from "../../Assets/Games/Valorant.jpg";
// import Elden from "../../Assets/Games/Elden.jpg";
// import Delta from "../../Assets/Games/Delta.jpg";
// import Counter from "../../Assets/Games/Counter_Strike.jpg";
// import Ghost from "../../Assets/Games/Ghost.jpg";
// import Grand from "../../Assets/Games/Grandtheftauto.jpg";
// import HadesImage from "../../Assets/Games/Hades.jpg";
// import candy from "../../Assets/Games/candy.jpg";
// import HILL from "../../Assets/Games/hillclimb.jpg";
// import Tom from "../../Assets/Games/tom.jpg";
// import pokemon from "../../Assets/Games/pokemon.jpg";
// import SubwayImage from "../../Assets/Games/subway.jpg";
// import NFS from "../../Assets/Games/Need for Speed.jpg";
// import Forza from "../../Assets/Games/Forza.jpg";
// import Tennis from "../../Assets/Games/tennis.jpg";
// import fifa from "../../Assets/Games/fifa.jpg";
// import Genshin from "../../Assets/Games/ginsh.jpg";
// import Raider from "../../Assets/Games/tomp.jpg";
// import Dead from "../../Assets/Games/Dead by Daylight.jpg";
// import Resident from "../../Assets/Games/Resident Evil.jpg";
// import Rust from "../../Assets/Games/rust.jpg";
// import  Minecraft  from "../../Assets/Games/mincraft.jpg";

// const games = [
//   {
//     name: "RedDeadRedemption 2",
//     Type: "Open World, Story Telling , Adventure",
//     image: RedDead,
//   },
//   {
//     name: "Game Name : Rainbow Six Siege",
//     Type: "Type :  FPS, PvP",
//     image: Rainbow,
//   },
//   {
//     name: "Game Name : Arma 3",
//     Type: "Type : Action , Simulation , Shooter",
//     image: arma3,
//   },
//   {
//     name: "Game Name : Apex Legends",
//     Type: "Type : Battle Royal , FPS",
//     image: apx,
//   },
//   {
//     name: "Game Name : ARK Survival Evolved",
//     Type: "Type :Open World , Survival",
//     image: Ark,
//   },
//   {
//     name: "Game Name : Valorant",
//     Type: "Type :  PvP , Competitive , Action",
//     image: valorant,
//   },
//   {
//     name: "Game Name : Elden Ring ",
//     Type: "Type : Dark Fantasy, RPG",
//     image: Elden,
//   },
//   {
//     name: "Game Name : Delta Force",
//     Type: "Type : FPS , Extraction Shooter",
//     image: Delta,
//   },
//   {
//     name: "Game Name : Counter Strike",
//     Type: "Type : Battle Royal , FPS ",
//     image: Counter,
//   },
//   {
//     name: "Game Name : Ghost Of Tsushima",
//     Type: "Type : RPG , Story Telling",
//     image: Ghost,
//   },
//   {
//     name: "Game Name : Grand theft auto 5",
//     Type: "Type :Open World, Crime , Action",
//     image: Grand,
//   },
//   {
//     name: "Game Name : Hades II",
//     Type: "Type : Action Roguelike",
//     image: HadesImage,
//   },
//   { name: "Game Name : Candy Crush", Type: "Type : Puzzle Game", image: candy },
//   { name: "Game Name : Hill Climb", Type: "Type : Racing Game", image: HILL },
//   {
//     name: "Game Name : My Talking Tom",
//     Type: "Type : Virtual Pet Simulation",
//     image: Tom,
//   },
//   { name: "Game Name : Pokemon", Type: "Type : Card Battle", image: pokemon },
//   {
//     name: "Game Name : Subway",
//     Type: "Type : Endless Runner",
//     image: SubwayImage,
//   },
//   {
//     name: "Game Name : Need for Speed Heat",
//     Type: "Type : racing game",
//     image: NFS,
//   },
//   {
//     name: "Game Name : Forza Horizon ",
//     Type: "Type : open-world racing game",
//     image: Forza,
//   },
//   {
//     name: "Game Name : Tennis Clash",
//     Type: "Type : Sports/tennis simulation.",
//     image: Tennis,
//   },
//   {
//     name: "Game Name : fifa19",
//     Type: "Type : sports/soccer simulation",
//     image: fifa,
//   },
//   {
//     name: "Game Name : Genshin impact",
//     Type: "Type : action/adventure/role-playing",
//     image: Genshin,
//   },
//   {
//     name: "Game Name : Tomb Raider",
//     Type: "Type : action/adventure",
//     image: Raider,
//   },
//   { name: "Game Name : Dead by Daylight", Type: "Type : Horror", image: Dead },
//   {
//     name: "Game Name : Resident Evil",
//     Type: "Type : Survival Horror",
//     image: Resident,
//   },
//   {
//     name: "Game Name : Rust",
//     Type: "Type : Multiplayer/Open World/Survival ",
//     image: Rust,
//   },
//   {
//     name: "Game Name :  Minecraft ",
//     Type: "Type : Survival/Adventure/Sandbox ",
//     image: Minecraft,
//   },
// ];

function GamesCard({types,name,image,onClick}) {
  return (
    <div>
          <div  className="gameCard">
            <img src={image} alt={name} />
            <div className="text">
              <h3>{name}</h3>
              <div className="genres">
              {types.map((genre,index) => (
                  <span key={index}>{genre}</span>
              ))}
              </div>
            </div>
            <div onClick={onClick}>
              <button className="Rating">Rate Now</button>
            </div>
          </div>
          <BackToTop/>
      </div>
  );
}

export default GamesCard;