import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = {
        active: false,
        isTop: true
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 2;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

    toggleNav = () => {
        this.setState({active: !this.state.active});
    };

    render() {
        return (
            <React.Fragment>
                <div className="header-scroll-trigger"/>
                <nav className={this.state.isTop ? "header-container" : "header-container scrolled"}>
                    <div className={this.state.active ? "hamburger menu close" : "hamburger menu"} onClick={this.toggleNav}>
                        <div className="line line01"/>
                        <div className="line line02"/>
                        <div className="line line03"/>
                    </div>
                    <Link to="/" className="logo-name-wrapper"><p className="logo-name"><b>Varry</b></p></Link>
                    <ul className={this.state.active ? "nav-links open" : "nav-links"}>
                        <Link to="/"><li><span className={this.state.isTop ? "top-nav-links" : "top-nav-links scrolled"} onClick={this.toggleNav}>For Students</span></li></Link>
                        <Link to="/business"><li><span className={this.state.isTop ? "top-nav-links" : "top-nav-links scrolled"} onClick={this.toggleNav}>For Business</span></li></Link>
                        <li><a href="mailto:henrik.bredenbals@code.berlin" className={this.state.isTop ? "contact-btn" : "contact-btn scrolled"}>Get in touch</a></li>
                    </ul>
                    <a href="mailto:henrik.bredenbals@code.berlin">
                        <a href="mailto:henrik.bredenbals@code.berlin">
                        <button className="responsive-nav-btn">
                            Get in touch
                        </button>
                        </a>
                    </a>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;