import React, {Component} from 'react';
import '../App.css';
import Hero4Business from "../components/Hero4Business/Hero4";
import LogosBusiness from "../components/LogosBusiness/Logos";
import BoxIconBusiness from "../components/BoxIconBusiness/BoxIcon";
import ContentBusiness from "../components/ContentBusiness/Content";
import TestimonialBusiness from "../components/TestimonialBusiness/Testimonial";
import CTABusiness from "../components/CTABusiness/CTA";

class Business extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <Hero4Business />
                <LogosBusiness />
                <ContentBusiness />
                <BoxIconBusiness />
                <TestimonialBusiness />
                <CTABusiness />
            </div>
        );
    }
}

export default Business;