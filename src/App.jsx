import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
