import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import TemplatesCarousel from './components/TemplatesCarousel';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
      <TestimonialsSection />
      <TemplatesCarousel />
      <Footer />
    </div>
  );
}

export default App;
