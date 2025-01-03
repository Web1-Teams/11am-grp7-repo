import "./GameCard.css";
import BackToTop from "./scroll";

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