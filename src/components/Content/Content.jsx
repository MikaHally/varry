import React, {Component} from 'react';
import './Content.css';

class Content extends Component {

    render() {
        return (
            <div className="content-bg" id="first">
                <div className="container">
                    <div className="content-wrapper">
                        <div className="content-left">
                            <h3>Learn and get insights from our partners and network of professionals</h3>
                            <p>
                                Together with our partners and experts we are providing different formats to learn
                                everything about digital products.
                            </p>
                            {/* Button */}
                            {/* Arrow */}
                            {/*
                            <div id="read-more">
                                <a href="/#" id="underline-text"><b>Read more</b></a>
                                <a href="/#"><img className="arrow" src={require('../../assets/icons/right-arrow.svg')}
                                                  alt="arrow-icon"/></a>
                            </div>
                            */}
                        </div>
                        <div className="content-right">
                            <img src={require('../../assets/images/content-1.png')} alt="content-img"/>
                        </div>
                    </div>
                    <div className="content-wrapper" id="reverse">
                        <div className="content-right">
                            <img src={require('../../assets/images/content-2.png')} alt="content-img"/>

                        </div>
                        <div className="content-left">
                            <h3>Be part of our vibrant community</h3>
                            <p>
                                Get to know students from various fields with the same interest in digital products.
                                Expand your network with like-minded students from all across Europe.
                            </p>
                            {/* Button */}
                            {/* Arrow */}
                            {/*
                            <div id="read-more">
                                <a href="/#" id="underline-text"><b>Read more</b></a>
                                <a href="/#"><img className="arrow" src={require('../../assets/icons/right-arrow.svg')}
                                                  alt="arrow-icon"/></a>
                            </div>
                            */}
                        </div>
                    </div>
                    <div className="content-wrapper" id="content-third">
                        <div className="content-left">
                            <h3>Get hired by joining our network. </h3>
                            <p>
                                Use the opportunity to build a personal relation towards our partners, connect with them
                                and get informed about new working opportunities for internships, working student
                                positions or for a collaboration for your thesis.
                            </p>
                            {/* Button */}
                            {/* Arrow */}
                            {/*
                            <div id="read-more">
                                <a href="/#" id="underline-text"><b>Read more</b></a>
                                <a href="/#"><img className="arrow" src={require('../../assets/icons/right-arrow.svg')}
                                                  alt="arrow-icon"/></a>
                            </div>
                            */}
                        </div>
                        <div className="content-right">
                            <img src={require('../../assets/images/content-3.png')} alt="content-img"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;