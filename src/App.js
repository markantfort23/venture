import React from 'react';
import WhyUs from './components/WhyUs';
import Pitch from './components/Pitch';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Router>
      <Navbar />
      </Router>
      <Hero />
      <WhyUs />
      <Pitch />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;