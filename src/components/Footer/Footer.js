import React from "react";
import './module.css'; 
import {useLocation} from "react-router-dom";

import { Link } from "react-router-dom";

function Footer() {
return (
<Foot>
    <div className="container">
        <div className="left-right-side">
        <div className="left-side">
            <h3>Contact Us</h3>

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
            <Link to="/home" onClick={() => scrollToSection("home")}><h4>Home</h4></Link>
            <ul>
                <li>
                <Link to="/signin" onClick={() => scrollToSection("signin")}>Sign in</Link>
                </li>
                <li>
                <Link to="/home#games" onClick={() => scrollToSection("games")}>Games</Link>
                </li>
                <li>
                <Link to="/home#popular" onClick={() => scrollToSection("popular")}>Popular games</Link>
                </li>
            </ul>
            </div>
            <div className="footer-list">
            <h4>
                <Link to="/aboutus" onClick={() => scrollToSection("aboutus")}>About Us</Link>
            </h4>
            <ul>
                <li>
                <Link to="/aboutus#AI_Powered_Insights" onClick={() => scrollToSection("AI_Powered_Insights")}>
                    AI-Powered Insights
                </Link>
                </li>
                <li>
                <Link to="/aboutus#Our_Goals"  onClick={() => scrollToSection("Our_Goals")}>Our Goals</Link>
                </li>
                <li>
                <Link to="/aboutus#What_We_Offer" onClick={() => scrollToSection("What_We_Offer")}>What We Offer</Link>
                </li>
                <li>
                <Link to="/aboutus#Share_Your_Feedback" onClick={() => scrollToSection("Share_Your_Feedback")}>
                    Share Your Feedback
                </Link>
                </li>
                <li>
                <Link to="/aboutus#How_We_Review_Games"  onClick={() => scrollToSection("How_We_Review_Games")}>
                    How We Review Games
                </Link>
                </li>
                <li>
                <Link to="/aboutus#The_World_of_Games" onClick={() => scrollToSection("The_World_of_Games")}>
                    The World of Games
                </Link>
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
</Foot>

);
}

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

function Foot({children, ...props}){
    const path = useLocation();
    
    let sec
    if(path.pathname === "/home"){
        sec = "phome"
    }
    else if(path.pathname === "/aboutus"){
       sec = "paboutus"
    }
    else if (path.pathname === "/signin"){
        sec = "psign"
    }
    else if (path.pathname === "/home/games"){
        sec = "phome"
    }
    else if (path.pathname === "/contactus"){
        sec = "pcontact"
    }
    else sec = ""
return(
<footer className={sec} {...props}>
    {children}
</footer>
)
}

export default Footer;