import React, {Component} from 'react';
import './Rating.css';

class Rating extends Component {

    render() {
        return (
            <div className="rating-bg">
                <div className="container rating-wrapper">
                    <div className="rating-item-wrapper">
                        <div className="stars">
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                        </div>
                        <p id="rating-header">Selma Peters, Economics Student</p>
                        <p id="rating-sub-header">"It was such a pleasure to participate and meet so many talented and
                            friendly faces!"</p>
                    </div>
                    <div className="rating-item-wrapper" id="middle-rating-item-wrapper">
                        <div className="stars">
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                        </div>
                        <p id="rating-header">Bashar Zapen,  Product Design Student</p>
                        <p id="rating-sub-header">"I was overwhelmed how such a remote community can contribute to my
                            learning about digital products."</p>
                    </div>
                    <div className="rating-item-wrapper">
                        <div className="stars">
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                            <div className="star-box">
                                <img src={require('../../assets/icons/star.svg')} alt="star-icon"/>
                            </div>
                        </div>
                        <p id="rating-header">Linda Günder, Industrial Eng. Student</p>
                        <p id="rating-sub-header">"It was super fun and a great opportunity to gain new insights as well as connecting to ambitious like-minded people."</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rating;