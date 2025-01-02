import React, { useState } from "react";
import styles from "./Signin.module.css";
import backgroundImage from '../../Assets/signinBackground.jpg';

function Signin() {
  const [CreateAccount, StateCreateAccount] = useState(false);
  const [password, statePassword] = useState("");
  const [email, stateEmail] = useState("");
  const [notification, setNotification] = useState(null);

  const oppositeState = () => {
    StateCreateAccount(!CreateAccount);
  };

  const PasswordChange = (event) => {
    statePassword(event.target.value);
  };

  const EmailChange = (event) => {
    stateEmail(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault(); // to stop ref the page 

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (CreateAccount) {
      if (storedEmail === email) {
        setNotification({
          className: "error",
          message: "An account with this email already exists!"
        });
      } else {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        setNotification({
          type: "success",
          message: "Account created successfully!"
        });
      }


    } else {
      if (storedEmail === email && storedPassword === password) {
        setNotification({
          type: "success",
          message: "Welcome to IGDB!"
        });
        window.location.href = "/home"; 
      } else {
        setNotification({
          type: "error",
          message: "No account found please create account"
        });
      }
    }

    setTimeout(() => {
      setNotification(null);
    }, 5000); 
  };

  
  return (
    <section className={styles.sign_in}>
      <img
        className={styles.background}
        src={backgroundImage}
        alt="background"
      />
      <div className={styles.box}>
        <div className={styles.inside_up}>
          <h1 className={styles.head_signin}>{CreateAccount ? "Create Account" : "Sign In"}</h1>
        </div>

        <div className={styles.inside_mid}>
          <form onSubmit={handleLogin} autoComplete="off">
            <div className={styles.container_1}>
              <input
                className={styles.email}
                type="email"
                name="email"
                value={email}
                onChange={EmailChange}
                placeholder="Email"
                required
                autoComplete="off"
              />
              <span className="material-symbols-outlined">person</span>
            </div>
            <div className={styles.container_2}>
              <input
                className={styles.password}
                type="password"
                name="password"
                value={password}
                onChange={PasswordChange}
                placeholder="Password"
                required
                minLength="6"
                autoComplete="new-password"
              />
              <span className="material-symbols-outlined">lock</span>
            </div>
            <div className={styles.container_3}>
              <div className={styles.remember}>
                <span>
                  <input className={styles.checkbox} type="checkbox" /> Remember me
                </span>
                <span>
                  <a className={styles.forget} >Forget Password?</a>
                </span>
              </div>
              <button className={styles.login} type="submit">
                <b>{CreateAccount ? "Create" : "Log in"}</b>
              </button>
            </div>
          </form>
        </div>

        <div className={styles.create}>
          <p>
            {CreateAccount ? (
              <span>Already have an account? <a href="#" className="link-create" onClick={oppositeState}>Sign In</a></span>
            ) : (
              <span>Don't have an account? <a href="#" className="link-create" onClick={oppositeState}>Create a new account</a></span>
            )}
          </p>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className={`${styles.notification} ${notification.type === "success" ? styles.success : styles.error}`}>
          {notification.message}
        </div>
      )}
    </section>
  );
}

export default Signin;