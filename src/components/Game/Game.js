import React,{ useState }  from "react";
import { FaStar } from "react-icons/fa";

import './Game.css';



function Game({title,pic,backpic,genres,description,average,totalRatings,ratingValues,comments}) {
    const bodystyle = {
        margin: "0",
        height: "2000px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundImage: `url(${backpic})`, 
        backgroundSize: "cover",
        filter: "brightness(80%)",
        backgroundPosition: "center",
        fontFamily: "'Arial', sans-serif",
        borderRadius: "20px",
    }


    const [rating,setRating] = useState(null);
    const [totalratingcount , setcountrate] = useState(totalRatings);

    function handlesub(){
        if(rating > 0){
            const newrate = totalRatings + 1;
            
        
            setcountrate(newrate);
            setRating(0);
        }
    }

  
 return(
 <body style={bodystyle}>
        <div className="content-container">

            <img src={pic} alt={title} className="game-image"/>

            <div className="story-box">
                <h1 className="Name">{title}</h1>

        
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

        <div className="content-container">
            <div className="RatingSec">
                <div className="Ratin">
                    <div className="RatingAVG">
                        <h1>{average}</h1>
                        <div className="starouter">
                            <div className="starinner">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <span key={index} className="star">
                                        {index < Math.round(average) ? '★' : '☆'}
                                    </span>
                                ))}
                            </div>
                            <p>{totalratingcount}</p>
                        </div>
                    </div>
                    <div className="RatingPro">
                        {ratingValues.map((rating, index) => (
                            <div className="RatingValue" key={index}>
                                <p>{rating.value} <span className="star">★</span></p>
                                <div className="Pro">
                                    <div className="Bar" style={{ width: `${(rating.count / totalRatings) * 100}%` }}>
                                      
                                    </div>
                                </div>
                                <p>{rating.count}</p>
                            </div>
                        ))}
                    </div>        
                </div>
            </div>
        </div>

        <div className="content-container">
            <div className="Rater">
            <h4 className="Rate">Rate {title}</h4>
                {[...Array(5)].map((star,index) => {
                    const currentrate = index + 1;
                    return(
                        <label>
                            <input 
                            type="radio"
                             name="rater" 
                             value={currentrate} 
                             onClick={() => setRating(currentrate)}/>
                            <FaStar className="Fstar" size={40} color={currentrate <= rating ? "gold" : "white" } ></FaStar>
                        </label>
                    );
                })}

            </div>
                <button onClick={handlesub}>Submit</button>
        </div>

        <div className="bottomComment">
            <div className="content-container">
                <div className="comment">
                <h3>Comments : </h3>
                    {comments.map((comment,index) => (
                        <div className="borderComment" key={index}> 
                            <h4>{comment.user}:</h4>
                            <p>{comment.data}</p>
                        </div>
                        
                    ))}
                </div>
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