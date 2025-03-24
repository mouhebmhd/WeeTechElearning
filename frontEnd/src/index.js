import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import OurGallery from './views/ourGallery';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <LandingPage />
      <OurGallery />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
