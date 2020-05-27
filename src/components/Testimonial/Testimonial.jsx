import React, {Component} from 'react';
import './Testimonial.css';

class Testimonial extends Component {

    render() {
        return (
            <div className="testimonial-bg" id="third">
                <div className="container testimonial-wrapper">
                    <div className="testimonial-left">
                        <h3 id="testimonial-quote">
                            “It was a real pleasure to be part of Varry and start the learning journey with all the
                            other motivated students and Partners!”
                        </h3>
                        <p id="testimonial-author">
                            Stella Shen
                        </p>
                        <p id="testimonial-position">
                            Master in Management, ESMT Berlin
                        </p>
                    </div>
                    <div className="testimonial-right">
                        <img className="hero5-img" src={require('../../assets/images/testimonial-varry.jpg')}
                             alt="hero"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;