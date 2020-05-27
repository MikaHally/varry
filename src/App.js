import React from 'react';
import './App.css';
import Hero4 from "./components/Hero4/Hero4";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer3 from "./components/Footer3/Footer3";
import CTA from "./components/CTA/CTA";
import BoxIcon from "./components/BoxIcon/BoxIcon";
import Testimonial from "./components/Testimonial/Testimonial";
import Rating from "./components/Rating/Rating";
import Logos from "./components/Logos/Logos";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero4/>
            <Logos/>
            <Content/>
            <BoxIcon/>
            <Testimonial/>
            <Rating/>
            <CTA/>
            <Footer3/>
        </div>
    );
}

export default App;
