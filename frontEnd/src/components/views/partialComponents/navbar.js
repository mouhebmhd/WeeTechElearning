import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import { Link } from "react-router-dom";
import logoImage from "../../../assets/img/logo-removebg-preview.png"
export default function Navbar() {
  return (
    <nav class='navbar navbar-expand-lg'>
          <div class='container-fluid'>
            <a class='navbar-brand' to='#'>
              <img src={logoImage} class='logoImage' alt='Logo' />
            </a>
            <button
              class='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse ' id='navbarNav'>
              <ul class='navbar-nav me-auto navbarItems mb-2 mb-lg-0   w-100 d-flex justify-content-end'>
                <li class='nav-item'>
                  <Link class='nav-link' to='/'>
                    Home
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link class='nav-link' to='/gallery'>
                    Gallery
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link class='nav-link' to='/latestNews'>
                    Latest News
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link class='nav-link' to='askUs'>
                    Ask Us
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link class='nav-link' to='/services'>
                    Services
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link className='nav-link' href='#gallery'>
                    Gallery
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link class='nav-link' to='#'>
                    Contact Us
                  </Link>
                </li>
              </ul>
              <button class='btn  subscribeBtn'>Subscribe</button>
            </div>
          </div>
        </nav>
  );
}
