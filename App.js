
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"


import Navbar from "./components/NavBar"
import Footer from "./components/Footer"


//pages
import About from "./pages/about"
import Contact from "./pages/contact"
import Portfolio from "./pages/portfolio"



function App() {
  return (

    <Router>
      <Navbar />
      <div >
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </div>
      <Footer />
    </Router>

  );
}

export default App;
