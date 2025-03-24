import React from 'react'
import './styles/LandingPageStyle.css'

import Navbar from "../components/views/partialComponents/navbar"
export default function LandingPage () {
  return (
    <>
      <div className='container-fluid bgContainer '>
        <Navbar></Navbar>
        <div class='container content h-75 d-flex flex-column justify-content-center'>
          <p class='firstText'>Admission</p>
          <p class='secondText'>
            <span>OPEN FOR </span>
            <span>2024-2025</span>
          </p>
          <p class='sloganText'>
            Play Ground | Free Courses | After Studying Activities
          </p>
          <p class='sloganText'>
            <button class='btn btn-lg' id="enrollBtn">Enroll Now</button>
          </p>
        </div>
      </div>
    </>
  )
}
