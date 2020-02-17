import React from 'react';
import Slide from 'react-reveal/Slide';


const Footer = () => {
    return (

        <footer className="footer-section">
            <Slide bottom>
            <div className="font_righteous footer_logo_venue">
                ARMA 4
            </div>
            <div className="footer_copyright">
                Copyright © 2020 ARMA4. All Rights Reserved.
            </div>
            </Slide>
        </footer>
    )
};

export default Footer;