import React, { Component } from "react";
import Bounce from 'react-reveal/Bounce';

class Pricing extends Component {
  render() {
    return (
      
      <div className="pricing_section">
<Bounce bottom>
    <h1 className="priceing-heading">CHOOSE YOUR EDITION</h1>
        
       
        <div className="pricing-box-container">
          
        
          <div class="pricing-box pricing-box-bg-image1 text-center">
            <h5>COLLECTOR'S EDITION</h5>
            <p className="price">
              <sup>$</sup>169<sub></sub>
            </p>
            <ul class="features-list">
              <li>
              <strong>Arma 4</strong> Base Game
              </li>
              <li>
                <strong>Logo Sticker/Hat</strong> (2x)
              </li>
              <li>
              <strong>Arma 4 Tac-Ops </strong> Mission Pack 
              </li>
              <li>
                <strong>Arma 4 Contact</strong> (Release Date: July 20, 2024) 
              </li>
            </ul>
            <a href="https://arma3.com/"><button className="btn-primary">Pre-Order</button></a>
          </div>
          

          <div class="pricing-box pricing-box-bg-image2 text-center">
            <h5>Digital DELUXE EDITION</h5>
            <p className="price">
              <sup>$</sup>105<sub></sub>
            </p>
            <ul class="features-list">
              <li>
                <strong>Arma 4</strong> Base Game
              </li>
              <li>
              <strong>Logo Sticker/Hat</strong> (2x)
              </li>
              <li>
              <strong>Arma 4 Tac-Ops </strong> Mission Pack 
              </li>
            </ul>
            <a href="https://arma3.com/"><button className="btn-primary">Pre-Order</button></a>
          </div>

          <div class="pricing-box pricing-box-bg-image3 text-center">
		<h5>STANDARD EDITION</h5>
		<p className="price"><sup>$</sup>60<sub></sub></p>
        <ul class="features-list">
              <li>
                <strong>Arma 4</strong> Base Game
              </li>
              <li>
              <strong>Arma 4 Tac-Ops </strong> Mission Pack 
              </li>
            </ul>
            <a href="https://arma3.com/"><button className="btn-primary">Pre-Order</button></a>
	</div>

    
        </div>
        </Bounce>
      </div>
      
    );
  }
}

export default Pricing;
