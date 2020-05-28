import React, {Component} from 'react';
import './Content.css';

class Content extends Component {

    render() {
        return (
            <div className="content-bg" id="first">
                <div className="container">
                    <div className="content-wrapper">
                        <div className="content-left">
                            <h3>Enhance your business with reaching the right target group</h3>
                            <p>
                                Young professionals are the fuel for your future success. Varry gives you an entrance
                                point to not only get to know them. With the broad range of formats you as well have the
                                opportunity to collaborate.
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
                            <img src={require('../../assets/images/content-business-1.png')} alt="content-img"/>
                        </div>
                    </div>
                    <div className="content-wrapper" id="reverse">
                        <div className="content-right">
                            <img src={require('../../assets/images/content-business-2.png')} alt="content-img"/>

                        </div>
                        <div className="content-left">
                            <h3>Help students while positioning your brand</h3>
                            <p>
                                Our community is eager and dependend on learning from our partners. You are giving them
                                the possibility to learn from your day-to-day practice. With having this impact on the
                                learning process your brand has the opportunity to etch itself deeply into the memory of
                                the students.
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
                            <h3>Give your employees a stage</h3>
                            <p>
                                You have the experts in your company. Varry enables you to give them a stage to
                                represent not only your business but also themselves. At the same time they have a
                                positive impact on the personal development of truly eager students.
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
                            <img src={require('../../assets/images/content-business-3.png')} alt="content-img"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;