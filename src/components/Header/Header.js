import React from "react";
import { Link , useLocation } from "react-router-dom";
import styles from './Header.module.css';




function Header () {
    return (
<Head> 
    {/* Alzahraa have to replace this image with The Name of the logo and modify its CSS */}
    <Link to={"/home"} onClick={() => scrollToSection("home")}><div class={styles.logo} id="logo">IGDB</div></Link>
<nav>
        <ul className={styles.navlinks}>
            <Custom to="/home" onClick={() => scrollToSection("home")}><span className="material-icons-outlined">
                    home    
                </span>Home</Custom>
            <Custom to="/home#games" onClick={() => scrollToSection("games")}><span className="material-icons-outlined">
                sports_esports
                </span>Games</Custom>
            <Custom to="/aboutus" onClick={() => scrollToSection("aboutus")}><span className="material-icons-outlined">
                search
                </span>About Us</Custom>
            <Custom to="/contactus" onClick={() => scrollToSection("contactus")}><span className="material-icons-outlined">
                account_circle
                </span>Contact Us</Custom>
        </ul>
</nav>
    <ul>
        <Custom  className={styles.signin} to="signin" onClick={() => scrollToSection("signin")}><button><span className="material-icons-outlined">
            login
            </span>Sign in</button></Custom>
    </ul>
</Head>
    )
}

function Custom({to, children, ...props}){
    return(
        <li>
            <Link to={to} {...props} >
                {children}
            </Link>
        </li>
    )
}

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

function Head({children, ...props}){
    const path = useLocation();
    
    let sec
    if(path.pathname === "/home"){
        sec = styles.phome
    }
    else if(path.pathname === "/aboutus"){
       sec = styles.paboutus
    }
    else if (path.pathname === "/signin"){
        sec = styles.psign
    }
    else if (path.pathname === "/home/games"){
        sec = styles.phome
    }
    else if (path.pathname === "/contactus"){
        sec = styles.pcontact
    }
    else sec = ""
return(
<header className={sec} {...props}>
    {children}
</header>
)
}



export default Header;