import React, {Component} from 'react';
import './CTA.css';

class CTA extends Component {

    render() {
        return (
            <div className="CTA-bg">
                <div className="container">
                    <div className="CTA-header">
                        <h2>Join the future of education</h2>
                        <p>
                            One platform. Everything you need to start a new career
                        </p>
                        <div className="CTA-btn-wrapper">
                            <a href="mailto:henrik.bredenbals@code.berlin">
                            <button className="primary-btn">
                                Get in touch!
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CTA;