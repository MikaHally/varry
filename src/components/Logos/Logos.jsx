import React, {Component} from 'react';
import './Logos.css';

class Logos extends Component {

    render() {
        return (
            <div className="logos-bg">
                <div className="container">
                    <p id="logo-section-header">SOME OF OUR PARTNERS</p>
                    <div className="logo-section">
                        <div className="logo-wrapper">
                            <img src={require('../../assets/images/google-logo.svg')} alt="logo1"/>
                        </div>
                        <div className="logo-wrapper">
                            <img src={require('../../assets/images/facebook-logo.svg')} alt="logo2"/>
                        </div>
                        <div className="logo-wrapper">
                            <img src={require('../../assets/images/tesla-logo.svg')} alt="logo3"/>
                        </div>
                        <div className="logo-wrapper">
                            <img src={require('../../assets/images/uber-logo.svg')} alt="logo4"/>
                        </div>
                        <div className="logo-wrapper" id="last-logo-wrapper">
                            <img src={require('../../assets/images/stripe-logo.svg')} alt="logo5"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Logos;