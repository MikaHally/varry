import React, {Component} from 'react';
import './Footer3.css';
import {Link} from "react-scroll";

class Footer3 extends Component {
    state = {
        email: "",
        signedUp: false
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.setState({signedUp: true});

        this.hideInput();

        this.setState({email: ""});
    };

    hideInput() {
        let addHide = "footer3-signup ";
        if (this.state.signedUp)
            addHide += "hide-footer3-signup";
        return addHide;
    }

    showSuccess() {
        let showSuccess = "success-signup ";
        if (this.state.signedUp)
            showSuccess += "show-success-signup";
        return showSuccess;
    }

    render() {
        return (
            <React.Fragment>
                <svg className="footer-wave-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E9485E" fillOpacity="1" d="M0,192L80,192C160,192,320,192,480,202.7C640,213,800,235,960,229.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                <footer className="footer3-bg">
                    <div className="container footer3-wrapper" id="container-footer">
                        <div className="footer3-left">
                            <h2>Stay in the loop</h2>
                            <p>
                                Be the first one who gets updates what we are up to.
                            </p>
                            <form className={this.hideInput()} onSubmit={this.onSubmit}>
                                <input className="footer3-email" placeholder="Your E-Mail"
                                       type="email" name="email" value={this.state.email}
                                       onChange={this.onChange} autoComplete="off" required/>
                                <button className="footer3-button" type="submit">Subscribe</button>
                            </form>
                            <p className={this.showSuccess()}>Thanks for subscribing!</p>
                        </div>
                        <div className="footer3-right">
                            <p className="footer-navigation-header">Navigation</p>
                            <Link to="first" spy={true} smooth={true} offset={-70} duration={500} className="footer-navigation-link">For students</Link>
                            <Link to="second" spy={true} smooth={true} offset={-70} duration={500} className="footer-navigation-link">For businesses</Link>
                            <a href="/#" className="footer-navigation-link">Get in touch</a>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer3;