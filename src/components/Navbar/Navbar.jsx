import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';

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
                    <a href="/#"><p className="logo-name"><b>Varry</b></p></a>
                    <ul className={this.state.active ? "nav-links open" : "nav-links"}>
                        <Link to="first" spy={true} smooth={true} offset={-70} duration={500}><li><span className="top-nav-links" onClick={this.toggleNav}>For students</span></li></Link>
                        <Link to="second" spy={true} smooth={true} offset={-70} duration={500}><li><span className="top-nav-links" onClick={this.toggleNav}>For businesses</span></li></Link>
                        <li><a href="/#" className={this.state.isTop ? "contact-btn" : "contact-btn scrolled"}>Get in touch</a></li>
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