import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {

  return (
    <div>
    <Navbar/>
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
      <Footer />
      <End />
   

    </div>
  )
}

export default App
