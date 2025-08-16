import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ToyCategories from './components/ToyCategories';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50">
      <Header />
      <Hero />
      <ToyCategories />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;