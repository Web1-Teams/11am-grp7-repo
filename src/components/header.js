import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul className="navlinks">
            <div className="logo-container">
              <div className="logo" id="logo">
                IGDB
              </div>
            </div>
            <li>
              <a href="index.html">
                <span className="material-symbols-outlined">home</span>Home
              </a>
            </li>
            <li>
              <a href="#Games">
                <span className="material-icons-outlined">sports_esports</span>
                Games
              </a>
            </li>
            <li>
              <a href="about_us.html">
                <span className="material-icons-outlined">search</span>About Us
              </a>
            </li>
            <li>
              <a href="#Contact_us">
                <span className="material-icons-outlined">account_circle</span>
                Contact Us
              </a>
            </li>
            <li>
              <a href="#popular games">
                <span className="material-icons-outlined">sports_esports</span>
                Popular Games
              </a>
            </li>
          </ul>
        </nav>
        <a className="signin" href="signin.html">
          <button>
            <span className="material-icons-outlined">login</span>Sign in
          </button>
        </a>
      </header>

      <section className="Home" id="Home"></section>
      <section id="Games"></section>
      <footer id="Contact_us"></footer>
    </>
  );
}

export default Header;
