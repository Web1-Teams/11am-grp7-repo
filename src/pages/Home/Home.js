import React from "react";
import s from "./Home.module.css";
import GameCard from "../../components/GameCard/GameCard";
import myImage from "../../Assets/home_background.png";

function Home() {
  return (
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

      {/* Hashem Whole section should wrap each card i did import the desired css file. */}
      <div ClassName="games-cards">
        <GameCard />
      </div>
    </div>
  );
}

//if you have added any javascript to the home section convert
// them into functions and include them here.

export default Home;
console.log("Home component rendered");
