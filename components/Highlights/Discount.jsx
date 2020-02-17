import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Component } from "react";


import MyButton from '../utility/myButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd: 20
    }


    porcentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage()
        },65)
    }

    render() {
        return (
            <div className="discount-center_wrapper">
            <div className="discount_wrapper">
             

                <Fade left
                    onReveal={() => this.porcentage()}
                >
                <div className="discount_porcentage">
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>
                </div>
                </Fade>

                <Slide right>
                <div className="discount_description">
                    <h3>PRE-ORDER ARMA 4 - STANDARD EDITION</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem nulla saepe, numquam ut eaque nobis aliquid eius laboriosam nemo placeat illum qui, sunt incidunt sequi tempora placeat illum qui, sunt incidunt sequi tempora harum ex iure harum ex iure? placeat illum qui, sunt incidunt sequi tempora harum ex iure</p>
                    <MyButton
                        text="Pre-Order"
                        bg="#ff4800"
                        color="#fff"
                        link="https://arma3.com/"
                    />
                </div>
                </Slide>


            </div>
            </div>
        );
    }
}

export default Discount;