import React from "react";
import "./sii2.css";

function SignIn() {
  return (
    <div className="wrapper">
      <form action="#">
        <h2>Welcome</h2>
        
        <div className="input-field">
          <input type="text" required />
          <label>Enter Your Email</label>
        </div>
        
        <div className="input-field">
          <input type="password" required />
          <label>Enter Your Password</label>
        </div>
        
        <div className="forget">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            <p>Remember me</p>
          </label>
          <a href="#">Forgot password</a>
        </div>
        
        <button type="submit">Log in</button>
        
        <div className="register">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
