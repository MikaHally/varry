import React, {Component} from 'react';
import './Testimonial.css';

class Testimonial extends Component {

    render() {
        return (
            <div className="testimonial-bg" id="third">
                <div className="container testimonial-wrapper">
                    <div className="testimonial-left">
                        <h3 id="testimonial-quote">
                            “The platform gives us access to a unique and highly engaged network of talented students
                            who are a perfect fit for us. Varry rocks!”
                        </h3>
                        <p id="testimonial-author">
                            Henning Daut
                        </p>
                        <p id="testimonial-position">
                            Managing Director Futury
                        </p>
                    </div>
                    <div className="testimonial-right">
                        <img className="hero5-img" src={require('../../assets/images/testimonial-business.png')}
                             alt="hero"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;