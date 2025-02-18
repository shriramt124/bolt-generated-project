import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import TemplatesCarousel from './components/TemplatesCarousel';
import PricingPage from './components/PricingPage';
import ContactPage from './components/ContactPage';
import NewFeaturesSection from './components/NewFeaturesSection';
import TemplatesPage from './components/TemplatesPage';
import ResumeEditor from './components/ResumeEditor'; // Import the new component

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeaturesSection />
              <FAQSection />
              <TestimonialsSection />
              <NewFeaturesSection/>
            </>
          } />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/create/:templateId" element={<ResumeEditor />} /> {/* Add new route */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
