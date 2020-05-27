import React, {Component} from 'react';
import './Hero4.css';

class Hero4 extends Component {

    render() {
        return (
            <div className="container hero4-wrapper">
                <img className="hero-bg-color" src={require('../../assets/images/hero-bg.svg')} alt="hero-bg"/>
                <img className="hero-bg-color-responsive" src={require('../../assets/images/hero-bg-responsive.svg')} alt="hero-bg"/>
                <div className="hero4-left">
                    <h1>Your digital career starts here</h1>
                    <p>
                        Gain the skills, work experience, and industry relationships you need to kick off your career. Entirely remote & always free.
                    </p>
                    <div className="hero4-btn-wrapper">
                        <a href="mailto:henrik.bredenbals@code.berlin"><button className="primary-btn">Get in touch</button></a>
                    </div>
                </div>
                <div className="hero4-right">
                    <img src={require('../../assets/images/hero-img.jpg')} alt="hero-img"/>
                </div>
            </div>
        );
    }
}

export default Hero4;