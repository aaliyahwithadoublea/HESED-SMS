import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection';
import RatingSection from './components/RatingSection';
import ResultManagement from './components/ResultManagement';
import FinancialManagement from './components/FinancialManagement';
import AdditionalFeatures from './components/AdditionalFeatures';
import ComprehensiveStaff from './components/ComprehensiveStaff';
import HesesdPQ from './components/HesedPQ';
import ChooseHESED from './components/ChooseHESED';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import End from './components/End';
import SchoolManagement from './components/SchoolManagement';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div>
      <Router>
        <Navbar /> {/* Navbar always appears */}

        <Routes>
          {/* Route for Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <RatingSection />
                <ResultManagement />
                <FinancialManagement />
                <ComprehensiveStaff />
                <AdditionalFeatures />
                <HesesdPQ />
                <ChooseHESED />
                <Testimonials />
                <Blogs />
                <SchoolManagement />
                <End />
              </>
            }
          />

          {/* Route for About Us Page (only Navbar, About Us content, and Footer) */}
          <Route
            path="/aboutus"
            element={
              <>
                <AboutUs />
              </>
            }
          />
        </Routes>

        <Footer /> {/* Footer always appears */}
      </Router>
    </div>
  );
}

export default App;
