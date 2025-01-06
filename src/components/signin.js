import React from "react";
import "./signin.css";

function SignIn() {
  return (
    <div className="signin-container">
      <form>
        <h3>Login Here</h3>
        
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or phone" id="username" />
        
        <label htmlFor="Password">Password</label>
        <input type="password" placeholder="Password" id="Password" />
        
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default SignIn;
