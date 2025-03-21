import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/views/partialComponents/navbar';
import LandingPage from './views/landingPage';
import OurServices from './views/ourServices';
import AboutUs from "./views/aboutUs";
import Courses from './views/courses';
import SignIn from './views/signIn';
import SignUp from "./views/signUp"
import ResetPassword from "./views/resetPassword"
import ForgotPassword from "./views/forgotPassword"
function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<LandingPage />} />
        <Route path='/services' element={<OurServices />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/team' element={<AboutUs />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
