import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import LatestNews from './views/LatestNews';
import OurGallery from './views/ourGallery';
import AskUs from './views/askUs';
import OurServices from './views/ourServices';
function App() {
  return (
    <>
      <Routes>
        
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/gallery' element={<OurGallery />} /> 
        <Route path='/latestNews' element={<LatestNews />} /> 
        <Route path='/askUs' element={<AskUs />} /> 
        <Route path='/services' element={<OurServices />} /> 
        
  
      </Routes>
    </>
  );
}

export default App;
