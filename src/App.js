import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Students from "./pages/Students";
import Business from "./pages/Business";
import Footer3 from "./components/Footer3/Footer3";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <Switch>
                <Route path="/" exact component={Students} />
                <Route path="/business" component={Business} />
            </Switch>
            <Footer3 />
        </Router>
    );
}

export default App;
