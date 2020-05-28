import React, {Component} from 'react';
import './Logos.css';

class Logos extends Component {

    render() {
        return (
            <div className="logos-bg">
                <div className="container">
                    <p id="logo-section-header">YOU ARE IN GOOD COMPANY</p>
                    <div className="logo-section">
                        <div className="logo-wrapper">
                            <img src={require('../../assets/images/futury.png')} className="logo1" alt="logo1"/>
                        </div>
                        <div className="logo-wrapper">
                            <img src={require('../../assets/images/celonis.png')} className="logo2" alt="logo2"/>
                        </div>
                        <div className="logo-wrapper">
                            <img src={require('../../assets/images/neugelb.png')} className="logo3" alt="logo3"/>
                        </div>
                        <div className="logo-wrapper">
                            <img src={require('../../assets/images/burda.png')} className="logo4" alt="logo4"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Logos;