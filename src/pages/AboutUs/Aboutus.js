import React, { useEffect, useState, useRef } from "react";
import './Aboutus.css';

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

    const exploreButton = document.getElementById('Explore');
    const taglineElement = document.querySelector('.about h3');
    const aboutSection = document.querySelector('.about');

    // Check if elements exist before adding listeners or modifying them
    if (exploreButton) {
      exploreButton.addEventListener('click', () => {
        alert('Welcome to IGDB! Start exploring our game reviews now!');
        exploreButton.innerText = "Let’s Go!";
        setTimeout(() => {
          exploreButton.innerText = "Explore Now";
        }, 2000);
      });

      exploreButton.addEventListener('mouseover', () => {
        exploreButton.classList.add('hover');
      });

      exploreButton.addEventListener('mouseout', () => {
        exploreButton.classList.remove('hover');
      });
    }

    if (taglineElement) {
      const taglineText = "Ready to level up your gaming knowledge?";
      let i = 0;

      function typeWriterEffect() {
        if (i < taglineText.length) {
          taglineElement.innerHTML += taglineText.charAt(i);
          i++;
          setTimeout(typeWriterEffect, 100);
        } else {
          setTimeout(() => {
            taglineElement.innerHTML = "";
            i = 0;
            typeWriterEffect();
          }, 1000);
        }
      }

      taglineElement.innerHTML = ""; // Clear initial content
      typeWriterEffect();
    }

    if (aboutSection) {
      const themeSwitcher = document.createElement('button');
      themeSwitcher.innerText = '🌙';
      themeSwitcher.id = 'themeSwitcher';
      aboutSection.appendChild(themeSwitcher);  // Add the button only in the About Us section
      themeSwitcherRef.current = themeSwitcher; // Store the themeSwitcher in the ref

      let isDarkMode = false;
      themeSwitcher.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        themeSwitcher.innerText = isDarkMode ? '☀️' : '🌙';
        aboutSection.style.background = isDarkMode
          ? 'linear-gradient(360deg, gray,rgb(102, 100, 100) 100%)'
          : 'linear-gradient(360deg, #fffff5 0%,#DFB6B2 100%)';
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
    return () => {
      if (exploreButton) {
        exploreButton.removeEventListener('click', () => {});
        exploreButton.removeEventListener('mouseover', () => {});
        exploreButton.removeEventListener('mouseout', () => {});
      }
      scrollToTopButton.removeEventListener('click', () => {});
      window.removeEventListener('scroll', () => {});
      if (themeSwitcherRef.current) {
        themeSwitcherRef.current.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <div>
      <section className="about">
        <h1>{greeting}, Welcome to IGDB!</h1>
        <p>Your ultimate destination for honest game reviews and insightful feedback.</p>
        <div className="about-info">
          <div className="about-img">
            <img src="/images/rb_2149266857.png" alt="About Us" />
          </div>
          <div>
            <h2>Welcome to IGDB!</h2>
            <p>
              We offer honest and unbiased video game reviews to help you make better gaming choices.
              Whether you're new to gaming or a seasoned pro, our goal is to create a community where players can share opinions and insights.
            </p>
            <h3>Ready to level up your gaming knowledge?</h3>
            <button id="Explore">Explore Now</button>
          </div>
        </div>
      </section>
      <section className="AI">
        <h1>AI-Powered Insights <img src="/images/robot.gif" alt="AI-Powered" /></h1>
        <div className="AI-Powered">
          <p>
            Our intelligent system plays and evaluates games to provide you with unique feedback you won’t find anywhere else.
            <br /> Think of it as having a gaming buddy with expert opinions!
          </p>
        </div>
      </section>
      <section className="goals">
        <h1>Our Goals <img src="/images/goals.gif" alt="goal Animation" /></h1>
        <div className="goals-cards">
          <div className="card">
            <div className="card-img">
              <img src="/images/rb_2148951368.png" alt="destination 1" />
            </div>
            <div className="card-info">
              <p className="card-discribtion">Honesty and fairness in reviews.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="/images/quality-assurance-clipboard-icon.png" alt="destination 2" style={{ paddingTop: '8px' }} />
            </div>
            <div className="card-info">
              <p className="card-discribtion">Quality content and credibility.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="/images/rb_18752.png" alt="destination 3" />
            </div>
            <div className="card-info">
              <p className="card-discribtion">Active community engagement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="offer">
        <h1>What-We-Offer <img src="/images/sales.gif" alt="" /></h1>
        <div className="what-offer">
          <p>Game Reviews Made Simple.</p>
          <p>Browse through a collection of game evaluations covering gameplay, graphics, storylines, and much more.</p>
          <p>Whether you’re a casual gamer or a hardcore enthusiast, you’ll find reviews tailored to your interests.</p>
        </div>
      </section>

      <section className="feedback">
        <h1>Share Your Feedback <img src="/images/social-media (1).gif" alt="share-feedback" /></h1>
        <div className="answer-share">
          <div>
            <ul>
              <li>- Played an amazing game?</li>
              <li>- Maybe a not-so-great one?</li>
            </ul>
          </div>
          <div className="shareContaniar">
            <img src="/images/medium-shot-young-people-with-reviews.png" alt="answer-share" />
            <h2>Share your thoughts and let others benefit from your experience.</h2>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h1>How We Review Games <img src="/images/like.gif" alt="Review" /></h1>
        <p>We test games thoroughly and consider gamer feedback to ensure our reviews are balanced and informative.</p>
      </section>

      <section className="the-world">
        <h1>The World of Games <img src="/images/drawing.gif" alt="game" /></h1>
        <p>Check out the hottest games of the season, trending reviews, and top-rated picks from gamers like you.</p>
      </section>
    </div>
  );
};

export default Aboutus;
