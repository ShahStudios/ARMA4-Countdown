import React from 'react';
import Fade from 'react-reveal/Fade';

const Arma4Info = () => {
    return (


<div className="main-container">
   
  <div className="images">

  <Fade left>  
    <a href="https://arma3.com/" className="image-link-wrapper">
      <span className="image-overlay"></span>
      <span className="image-background image-1">
        <span className="title">DISCORD SERVER</span>       
      </span>
    </a>
    </Fade>

    <Fade bottom> 
    <a href="https://arma3.com/" className="image-link-wrapper">
      <span className="image-overlay"></span>
      <span className="image-background image-2">
        <span className="title">RECENT EVENTS</span>       
      </span>
    </a>
    </Fade>


    <Fade right> 
    <a href="https://arma3.com/" className="image-link-wrapper">
      <span className="image-overlay"></span>
      <span className="image-background image-3">
        <span className="title">Dev Blog</span>       
      </span>
    </a>
    </Fade>


  </div>
</div>





    );
};

export default Arma4Info;