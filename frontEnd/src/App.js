import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";

import OurGallery from './views/ourGallery';
function App() {
  return (
    <>
      <Routes>
 {/*        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/gallery' element={<OurGallery />} /> */}
  
      </Routes>
    </>
  );
}

export default App;
