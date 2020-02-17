import React from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Arma4Info from './components/arma4-info';
import Highlights from './components/Highlights';
import Pricing from './components/pricing';
import Footer from './components/header_footer/Footer';


function App() {
  return (
    <div className="App" style={{
      height: '1500px',
      backgroundColor: 'black'
    }}>
      <Header/>
      <Element name="home">
      <Featured/>
      </Element>

      <Element name="news">
      <Arma4Info/>
      </Element>

      
      <Highlights/>

      <Element name="pre-order">
      <Pricing/>
      </Element>

        <Footer/>


    </div>
  );
}

export default App;
