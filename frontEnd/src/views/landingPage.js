import React from 'react'
import "./styles/LandingPageStyle.css"
import logoImage from "../assets/img/logo-removebg-preview.png"
export default function LandingPage() {
  return (
    <>
        <div className="container-fluid bgContainer ">
            <div className="navbar d-flex">
                <div className="logoContainer">
                    <img src={logoImage} className='logoImage' />
                </div>
                <div className="navItems">
                    <ul className='d-flex p-2 navbarItems align-items-baseline'>
                        <li>Home</li>
                        <li>Administration</li>
                        <li>Categories</li>
                        <li>Courses</li>
                        <li>Our Team</li>
                        <li>Contact Us</li>
                        <li><button className='btn subscribeBtn'> Subscribe</button></li>
                    </ul>
            </div>
            </div>
            <div className="container content h-75  d-flex flex-column justify-content-center">
                <p className='firstText'>Admission</p>
                <p className='secondText'>
                    <span>OPEN FOR </span>
                    <span>2024-2025</span>
                </p>
                <p className='sloganText'>Play Ground | Free Courses | After Studying Activities </p>
                <p className='sloganText'><button className="btn   btn-primary btn-lg enrollBtn">Enroll Now</button></p>
            </div>
         
    </div>
    </>
  )
}
