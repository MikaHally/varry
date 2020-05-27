import React, {Component} from 'react';
import './BoxIcon.css';

class BoxIcon extends Component {

    render() {
        return (
            <div className="box-icon-bg">
                <div className="container">
                    <div className="box-icon-header">
                        <h2>This is a network to fully promote your career</h2>
                    </div>
                    <div className="box-icon-wrapper">
                        <div className="box-icon-item">
                            <img src={require('../../assets/icons/briefcase.svg')} alt="icon"/>
                            <p className="box-icon-item-header">Workshops</p>
                            <p className="box-icon-item-sub-header">
                                Create together with our partners. Within remote workshops your challenge is to come up
                                with quick solutions for problems out of the daily business of our partners.
                            </p>
                        </div>
                        <div className="box-icon-item">
                            <img src={require('../../assets/icons/message-circle.svg')} alt="icon"/>
                            <p className="box-icon-item-header">Input Sessions</p>
                            <p className="box-icon-item-sub-header">
                                Get valuable insights about frameworks used in daily practice or hear the story of one
                                of the high-level speakers we are constantly inviting to join.
                            </p>
                        </div>
                        <div className="box-icon-item">
                            <img src={require('../../assets/icons/coffee.svg')} alt="icon"/>
                            <p className="box-icon-item-header">Mentorship</p>
                            <p className="box-icon-item-sub-header">
                                Work 1-on-1 under a vetted mentor and get feedback for your personal growth as well as
                                projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoxIcon;