import React from "react";

import './Game.css';



function Game({title,pic,backpic,genres,description}) {
    const bodystyle = {
        margin: "0",
        height: "2000px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundImage: `url(${backpic})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Arial', sans-serif",
        borderRadius: "20px",
    }


 return(
 <body style={bodystyle}>
        <div className="content-container">

        <img src={pic} alt={title} className="game-image"/>

        <div className="story-box">
            <h1>{title}</h1>

    
            <p className="genre">Genre:</p>

            <div className="genres-container">
                {genres.map((genre,index)  =>( 
                    <span key={index}  className="genre-bubble">{genre}</span>
                    ))}
            </div>

        
            <p className="story">
                {/* A pair of "star traveler" twins who visit different worlds arrive in the world of Teyvat and witness the destruction of the nation of Khaenri'ah. While attempting to flee the chaos, an unnamed god blocks their path and separates them: she captures one and seals away the power of the other. The sealed twin (known as the "Traveler") awakens five hundred years later and meets Paimon, who becomes their companion. For months, they travel together and then make their way to Mondstadt. There, they begin the search for the Traveler's missing sibling. */}
                {description}
            </p>
        </div>
       

    </div>

    {/* <button className="scroll-button" onClick={scrollDown}>Scroll Down</button> */}
    </body>
 );
}

// function scrollDown() {
//     window.scrollBy({
//         top: 300, 
//         behavior: 'smooth'
//     });

// }


export default Game;