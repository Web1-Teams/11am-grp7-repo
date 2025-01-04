import "./GameCard.css";

function GamesCard({types,name,image,onClick}) {
  return (
    <div id="games">
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
              <button className="Rating-button">Rate Now</button>
            </div>
          </div>
      </div>
  );
}

export default GamesCard;