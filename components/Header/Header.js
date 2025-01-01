import React from "react";
import { Link , useLocation, useMatch,useResolvedPath } from "react-router-dom";

import styles from './Header.module.css';
import img1 from '../../Assets/headLogoV1.0.jpg';



function Header () {
    return (
<Head> 
    {/* Alzahraa have to replace this image with The Name of the logo and modify its CSS */}
    <img className={styles.logo} src={img1} alt="IGDB"/> 
<nav>
        <ul className={styles.navlinks}>
            <Custom to="/home"><span className="material-icons-outlined">
                sports_esports
                </span>Home</Custom>
            <Custom to="/home/games"><span className="material-icons-outlined">
                search
                </span>Games</Custom>
            <Custom to="/aboutus"><span className="material-icons-outlined">
                search
                </span>About Us</Custom>
            <Custom to=""><span className="material-icons-outlined">
                account_circle
                </span>Contact Us</Custom>
        </ul>
</nav>
    <ul>
        <Custom  className={styles.signin} to="signin"><button><span className="material-icons-outlined">
            login
            </span>Sign in</button></Custom>
    </ul>
</Head>
    )
}

function Custom({to, children, ...props}){
    const ResolvedPath = useResolvedPath(to);
    const isActive = useMatch({path : ResolvedPath.pathname, end: true});

    return(
        <li className={isActive ? styles.active : ''}>
            <Link to={to} {...props} >
                {children}
            </Link>
        </li>
    )
}

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
    else if (path.pathname === "/"){
        sec = styles.phome
    }
    else sec = ""
return(
<header className={sec} {...props}>
    {children}
</header>
)
}



export default Header;