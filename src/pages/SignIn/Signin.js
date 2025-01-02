import React from "react";
import styles from './Signin.module.css';
import backgroundImage from '../../Assets/signinBackground.jpg';

function Signin() {
    const bodystyle = {
        background: `url(${backgroundImage})` ,
        backgroundRepeat: "no-repeat",
        backgroundSize : "cover",
        height: "100vh",
    };

    return (
        <body style={bodystyle} >
<section className={styles.sign}>
    <form action="">
        <h1>Sign in</h1>
        <div className={styles.inputs}>
            <input type="text" placeholder="Email" required/>
            <i className='bx bxs-user'></i>
        </div>
        <div className={styles.inputs}>
            <input type="password" placeholder="Password" required/>
            <i className='bx bxs-lock-alt'></i>
        </div>

        <div className={styles.remember}>
            <label><input type="checkbox"/>Remember Me</label>
            <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className={styles.btn}>Login</button>

        <div className={styles.register}>
            <p>Don't have an account? <a href="#">Register now</a></p>
        </div>
    </form>
</section>
</body>
    );
}

export default Signin;