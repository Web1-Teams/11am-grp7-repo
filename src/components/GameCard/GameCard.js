import "./GameCard.css";
import RedDead from "../../Assets/Games/RedDeadRedemption.jpg";
import Rainbow from "../../Assets/Games/Rainbow.jpg";
import arma3 from "../../Assets/Games/Arma_3.jpg";
import apx from "../../Assets/Games/Apex.jpg";
import Ark from "../../Assets/Games/ARK.jpg";
import valorant from "../../Assets/Games/Valorant.jpg";
import Elden from "../../Assets/Games/Elden.jpg";
import Delta from "../../Assets/Games/Delta.jpg";
import Counter from "../../Assets/Games/Counter_Strike.jpg";
import Ghost from "../../Assets/Games/Ghost.jpg";
import Grand from "../../Assets/Games/Grandtheftauto.jpg";
import HadesImage from "../../Assets/Games/Hades.jpg";
import candy from "../../Assets/Games/candy.jpg";
import HILL from "../../Assets/Games/hillclimb.jpg";
import Tom from "../../Assets/Games/tom.jpg";
import pokemon from "../../Assets/Games/pokemon.jpg";
import SubwayImage from "../../Assets/Games/subway.jpg";
import NFS from "../../Assets/Games/Need for Speed.jpg";
import Forza from "../../Assets/Games/Forza.jpg";
import Tennis from "../../Assets/Games/tennis.jpg";
import fifa from "../../Assets/Games/fifa.jpg";
import Genshin from "../../Assets/Games/ginsh.jpg";
import Raider from "../../Assets/Games/tomp.jpg";
import Dead from "../../Assets/Games/Dead by Daylight.jpg";
import Resident from "../../Assets/Games/Resident Evil.jpg";
import Rust from "../../Assets/Games/rust.jpg";
import Minecraft from "../../Assets/Games/mincraft.jpg";
import BackToTop from "./scroll";

const games = [
  {
    name: " Red Dead Redemption 2",
    Type: "Type :  Open World/Adventure",
    image: RedDead,
  },
  {
    name: " Rainbow Six Siege",
    Type: "Type :  FPS/PvP",
    image: Rainbow,
  },
  {
    name: " Arma 3",
    Type: "Type : Action/Simulation/Shooter",
    image: arma3,
  },
  {
    name: "Apex Legends",
    Type: "Type : Battle Royal/FPS",
    image: apx,
  },
  {
    name: " ARK Survival Evolved",
    Type: "Type :Open World/Survival",
    image: Ark,
  },
  {
    name: " Valorant",
    Type: "Type :  PvP/Competitive/Action",
    image: valorant,
  },
  {
    name: " Elden Ring ",
    Type: "Type : Dark Fantasy/RPG",
    image: Elden,
  },
  {
    name: " Delta Force",
    Type: "Type : FPS/Extraction Shooter",
    image: Delta,
  },
  {
    name: " Counter Strike",
    Type: "Type : Battle Royal/FPS ",
    image: Counter,
  },
  {
    name: " Ghost Of Tsushima",
    Type: "Type : RPG/Story Telling",
    image: Ghost,
  },
  {
    name: " Grand theft auto 5",
    Type: "Type :Open World/Crime/Action",
    image: Grand,
  },
  {
    name: " Hades II",
    Type: "Type : Action Roguelike",
    image: HadesImage,
  },
  { name: " Candy Crush", Type: "Type : Puzzle Game", image: candy },
  { name: "Game Name : Hill Climb", Type: "Type : Racing Game", image: HILL },
  {
    name: " My Talking Tom",
    Type: "Type : Virtual Pet Simulation",
    image: Tom,
  },
  { name: " Pokemon", Type: "Type : Card Battle", image: pokemon },
  {
    name: "Game Name : Subway",
    Type: "Type : Endless Runner",
    image: SubwayImage,
  },
  {
    name: " Need for Speed Heat",
    Type: "Type : racing game",
    image: NFS,
  },
  {
    name: " Forza Horizon ",
    Type: "Type : open-world racing game",
    image: Forza,
  },
  {
    name: " Tennis Clash",
    Type: "Type : Sports/tennis simulation.",
    image: Tennis,
  },
  {
    name: " fifa19",
    Type: "Type : sports/soccer simulation",
    image: fifa,
  },
  {
    name: " Genshin impact",
    Type: "Type : action/adventure/role-playing",
    image: Genshin,
  },
  {
    name: " Tomb Raider",
    Type: "Type : action/adventure",
    image: Raider,
  },
  { name: " Dead by Daylight", Type: "Type : Horror", image: Dead },
  {
    name: " Resident Evil",
    Type: "Type : Survival Horror",
    image: Resident,
  },
  {
    name: " Rust",
    Type: "Type : Multiplayer/Open World/Survival ",
    image: Rust,
  },
  {
    name: "  Minecraft ",
    Type: "Type : Survival/Adventure/Sandbox ",
    image: Minecraft,
  },
];

function GamesSection() {
  return (
    <div >
      <h1 className="title"> Games</h1>
      <div className="gameCardContainer">
        {games.map((game, index) => (
          <div key={index} className="gameCard">
            <img src={game.image} alt={game.name} />
            <div className="text">
              <h3>{game.name}</h3>
              <span>{game.Type}</span>

              <button className="Rating-button">Rating Now</button>
            </div>
          </div>
        ))}
      </div>
      <BackToTop />
    </div>
  );
}

export default GamesSection;
