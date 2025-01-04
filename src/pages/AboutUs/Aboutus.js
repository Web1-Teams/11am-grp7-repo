import React, { useEffect, useState, useRef } from "react";
import './Aboutus.css';
import { Link } from "react-router-dom";

import drawing from "../../Assets/About/drawing.gif";
import goals from "../../Assets/About/goals.gif";
import like from "../../Assets/About/like.gif";
import mediumshot from "../../Assets/About/medium-shot-young-people-with-reviews.png";
import insurance from "../../Assets/About/quality-assurance-clipboard-icon.png";
import rb from "../../Assets/About/rb_18752.png";
import rb2 from "../../Assets/About/rb_2148951368.png";
import rb3 from "../../Assets/About/rb_2149266857.png";
import robot from "../../Assets/About/robot.gif";
import sales from "../../Assets/About/sales.gif";
import social from "../../Assets/About/social-media (1).gif";




const Aboutus = () => {
  const [greeting, setGreeting] = useState("");
  const themeSwitcherRef = useRef(null); // Ref for themeSwitcher

  useEffect(() => {
    // Determine the current time and set an appropriate greeting
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }

    // const exploreButton = document.getElementById('Explore');
    // const taglineElement = document.querySelector('.about h3');
    const aboutSection = document.querySelector('.about');

    // Check if elements exist before adding listeners or modifying them
    // if (exploreButton) {
    //   exploreButton.addEventListener('click', () => {
    //     alert('Welcome to IGDB! Start exploring our game reviews now!');
    //     exploreButton.innerText = "Let's Go!";
    //     setTimeout(() => {
    //       exploreButton.innerText = "Explore Now";
    //     }, 2000);
    //   });

    //   exploreButton.addEventListener('mouseover', () => {
    //     exploreButton.classList.add('hover');
    //   });

    //   exploreButton.addEventListener('mouseout', () => {
    //     exploreButton.classList.remove('hover');
    //   });
    // }

    
    // if (taglineElement) {
    //   const taglineText = "Ready to level up your gaming knowledge?";
    //   let i = 0;
    //   let isTyping = true; // Flag to track if the text is being typed
    
    //   function typeWriterEffect() {
    //     if (isTyping && i < taglineText.length) {
    //       taglineElement.innerHTML += taglineText.charAt(i);
    //       i++;
    //       setTimeout(typeWriterEffect, 100);
    //     } else if (i === taglineText.length) {
    //       isTyping = false; // Stop typing once the text is fully typed
    //     }
    //   }
  
   
    //   taglineElement.innerHTML = ""; // Clear initial content
    //   typeWriterEffect();
    // }
    
    if (aboutSection) {
      const themeSwitcher = document.createElement('button');
      themeSwitcher.innerText = '🌙';
      themeSwitcher.id = 'themeSwitcher';
      aboutSection.appendChild(themeSwitcher);  
      themeSwitcherRef.current = themeSwitcher; 

      let isDarkMode = false;
      themeSwitcher.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        themeSwitcher.innerText = isDarkMode ? '☀️' : '🌙';
        aboutSection.style.background = isDarkMode
          ? 'linear-gradient(to right, #000B49, #22177A, #190482, #3F0071, #240041) '
          : 'linear-gradient(360deg, #fff 0%,#6a94c7 100%)';
      });
    }

    // Scroll-to-top button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerText = '⬆ Top';
    scrollToTopButton.id = 'scrollToTop';
    document.body.appendChild(scrollToTopButton);

    window.addEventListener('scroll', () => {
      scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Cleanup event listeners on unmount
    // return () => {
    //   if (exploreButton) {
    //     exploreButton.removeEventListener('click', () => {});
    //     exploreButton.removeEventListener('mouseover', () => {});
    //     exploreButton.removeEventListener('mouseout', () => {});
    //   }
    //   scrollToTopButton.removeEventListener('click', () => {});
    //   window.removeEventListener('scroll', () => {});
    //   if (themeSwitcherRef.current) {
    //     themeSwitcherRef.current.removeEventListener('click', () => {});
    //   }
    // };
  }, []);

  return (
    <div>
      <section className="about" id="aboutus">
        <h1>About Us</h1>
        <p>Your ultimate destination for honest game reviews and insightful feedback.</p>
        <div className="about-info">
          <div className="about-img">
            <img src={rb3} alt="About Us" />
          </div>
          <div>
            <h2>{greeting}, Welcome to IGDB!</h2> 
            <p>
              We offer honest and unbiased video game reviews to help you make better gaming choices.
              Whether you're new to gaming or a seasoned pro, our goal is to create a community where players can share opinions and insights.
            </p>
            <h3>Ready to level up your gaming knowledge?</h3>
            <button className="abtn" id="Explore"><Link to={"/home"} onClick={() => scrollToSection("games")}>Explore Now</Link></button>
          
          </div>
        </div>
      </section>
      <section className="AI" id="AI_Powered_Insights">
        <h1>AI-Powered Insights <img src={robot} alt="AI-Powered" /></h1>
        <div className="AI-Powered">
          <p>
            Our intelligent system plays and evaluates games to provide you with unique feedback you won’t find anywhere else.
            <br /> Think of it as having a gaming buddy with expert opinions!
          </p>
        </div>
      </section>
      <section className="goals" id="Our_Goals">
        <h1>Our Goals <img src={goals} alt="goal Animation" /></h1>
        <div className="goals-cards">
          <div className="card">
            <div className="card-img">
              <img src={rb2} alt="destination 1" />
            </div>
            <div className="card-info">
              <p className="card-discribtion">Honesty and fairness in reviews.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={insurance} alt="destination 2" style={{ paddingTop: '8px' }} />
            </div>
            <div className="card-info">
              <p className="card-discribtion">Quality content and credibility.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={rb} alt="destination 3" />
            </div>
            <div className="card-info">
              <p className="card-discribtion">Active community engagement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="offer" id="What_We_Offer"> 
        <h1>What-We-Offer <img src={sales} alt="" /></h1>
        <div className="what-offer">
          <p>Game Reviews Made Simple.</p>
          <p>Browse through a collection of game evaluations covering gameplay, graphics, storylines, and much more.</p>
          <p>Whether you're a casual gamer or a hardcore enthusiast, you'll find reviews tailored to your interests.</p>
        </div>
      </section>

      <section className="feedback" id="Share_Your_Feedback">
        <h1>Share Your Feedback <img src={social} alt="share-feedback" /></h1>
        <div className="answer-share">
          <div>
            <ul>
              <li>- Played an amazing game?</li>
              <li>- Maybe a not-so-great one?</li>
            </ul>
          </div>
          <div className="shareContaniar">
            <img src={mediumshot} alt="answer-share" />
            <h2>Share your thoughts and let others benefit from your experience.</h2>
          </div>
        </div>
      </section>

      <section className="reviews" id="How_We_Review_Games">
        <h1>How We Review Games <img src={like} alt="Review" /></h1>
        <p>We test games thoroughly and consider gamer feedback to ensure our reviews are balanced and informative.</p>
      </section>

      <section className="the-world" id="The_World_of_Games">
        <h1>The World of Games <img src={drawing}alt="game" /></h1>
        <p>Check out the hottest games of the season, trending reviews, and top-rated picks from gamers like you.</p>
      </section>

    </div>
  );
};

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default Aboutus;