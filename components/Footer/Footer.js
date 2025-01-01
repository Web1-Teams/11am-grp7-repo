import React from "react";
import "./Footer/module.css";

const Footer = () => {
  return (
    
    <footer>
      <div className="container">
        <div className="left-right-side">
          <div className="left-side">
            <img src="image/IGDB.jpeg" alt="Logo" />
            <div className="contact">
              <div className="icons">
                <i className="bx bxs-envelope"></i>
                <span>IGDB@gmail.com</span>
              </div>
              <div className="icons">
                <i className="bx bxs-phone"></i>
                <span>+91 91813 23 2309</span>
              </div>
              <div className="icons">
                <i className="bx bxs-location-plus"></i>
                <span>Palestine</span>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="footer-list">
              <h4>Home</h4>
              <ul>
                <li>
                  <a href="#">Sign in</a>
                </li>
                <li>
                  <a href="#">Games</a>
                </li>
                <li>
                  <a href="#">Hello</a>
                </li>
              </ul>
            </div>
            <div className="footer-list">
              <h4>
                <a href="about_us.html#About_Us">About Us</a>
              </h4>
              <ul>
                <li>
                  <a href="about_us.html#AI_Powered_Insights">
                    AI-Powered Insights
                  </a>
                </li>
                <li>
                  <a href="about_us.html#Our_Goals">Our Goals</a>
                </li>
                <li>
                  <a href="about_us.html#What_We_Offer">What We Offer</a>
                </li>
                <li>
                  <a href="about_us.html#Share_Your_Feedback">
                    Share Your Feedback
                  </a>
                </li>
                <li>
                  <a href="about_us.html#How_We_Review_Games">
                    How We Review Games
                  </a>
                </li>
                <li>
                  <a href="about_us.html#The_World_of_Games">
                    The World of Games
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-list">
              <h4>Social Profiles</h4>
              <div className="icon">
                <i className="bx bxl-facebook"></i>
                <i className="bx bxl-twitter"></i>
                <i className="bx bxl-linkedin"></i>
                <i className="bx bxl-instagram"></i>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h6>MadeByGroup7@web.com</h6>
      </div>
    </footer>
  
  );
};

export default Footer;
