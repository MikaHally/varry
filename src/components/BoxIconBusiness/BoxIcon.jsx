import React, {Component} from 'react';
import './BoxIcon.css';

class BoxIcon extends Component {

    render() {
        return (
            <div className="box-icon-bg">
                <div className="container">
                    <div className="box-icon-header">
                        <h2>What does a partner contribute?</h2>
                    </div>
                    <div className="box-icon-wrapper">
                        <div className="box-icon-item">
                            <img src={require('../../assets/icons/briefcase.svg')} alt="icon"/>
                            <p className="box-icon-item-header">Workshops</p>
                            <p className="box-icon-item-sub-header">
                                Hold workshops in front of our students audience. Besides employer branding, this gives
                                you an opportunity to let an independet group of people take a look at the things that
                                surround you daily.
                            </p>
                        </div>
                        <div className="box-icon-item">
                            <img src={require('../../assets/icons/message-circle.svg')} alt="icon"/>
                            <p className="box-icon-item-header">Input Sessions</p>
                            <p className="box-icon-item-sub-header">
                                Like a lecture at the university - but in much cooler. Here you can introduce
                                frameworks, working principles or all other things that make you an unique employer.
                            </p>
                        </div>
                        <div className="box-icon-item">
                            <img src={require('../../assets/icons/coffee.svg')} alt="icon"/>
                            <p className="box-icon-item-header">Mentorship</p>
                            <p className="box-icon-item-sub-header">
                                Mentor our students in their last steps before becoming extremely valuable professionals
                                for the job market. With your knowledge you are able to provide them with highly
                                valuable feedback.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoxIcon;