import React from "react";
import  './Contact.css';


const Contact = () => {

return(

<section className="contact">
    <form>
        <h2> Contact US </h2>
         <div className="input-box">
            <label>Full Name</label>
            <input  type="text" className="field" placeholder="Enter your name" required  />
         </div>
         <div className="input-box">
            <label>Email Address</label>
            <input  type="text" className="field" placeholder="Enter your name" required  />
         </div>
         <div className="input-box">
            <label>Your Message</label>
            <textarea name="" id="" className="field mess" placeholder="Enter aYour Message" required ></textarea> 
          </div>
          <button type="submit"> Send Message </button>
    </form>
</section>

)

}


export default Contact 