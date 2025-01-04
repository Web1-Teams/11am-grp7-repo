import React, { useState, useEffect } from 'react';

function BackToTop() {
  const [BackToTopButton, setBackToTopButton] = useState(false); // Button is not visible at first

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 100){
            setBackToTopButton(true);
        }
        else{
            setBackToTopButton(false);
        }
        
    })
    
},[])
 

  const scrollUp = () => {
    window.scrollTo({
      top: 0, 
      behavior: "smooth", 
    });
  };

  return (
    <>
      {BackToTopButton && (
        <button className="scroll-up-button" onClick={scrollUp} id ="arrow"> ↑ </button>
      )}
    </>
  );
}

export default BackToTop;
