import React from 'react';
import { FaChalkboardTeacher, FaBookOpen, FaUsers, FaGraduationCap } from "react-icons/fa";
import { MdOutlineLibraryBooks, MdCastForEducation } from "react-icons/md";
import "./styles/ourServices.css";
import Navbar from '../components/views/partialComponents/navbar';

export default function OurServices() {
  return (
    <>
        <Navbar></Navbar>
      <div className='servicesContainer'>
        <div className="ourServices">
          <h1 className='ourServicesTitle fw-bold text-center display-4'>Nos Services Éducatifs</h1>
          <p className='servicesDescText text-center lead'>
            Découvrez une plateforme dédiée à l'excellence pédagogique. Notre mission est de vous offrir des outils et des formations adaptées pour maximiser votre apprentissage avec <span className='slogan'>WeeCode</span>!
          </p>
        </div>
        <div className="row m-0">
          <div className="container mt-5 row-gap-5 serviceContainer d-flex justify-content-around flex-wrap">
            <div className="col-sm-12 col-md-6 col-lg-2 serviceBox d-flex flex-column justify-content-center align-items-center">
              <div className="serviceCircle d-flex justify-content-center align-items-center">
                <FaChalkboardTeacher className='serviceIcon' />
              </div>
              <h5>Formation en Ligne</h5>
              <p className='text-center serviceDesc'>
                Cours interactifs et dynamiques pour apprendre à votre rythme, où que vous soyez.
              </p>
              <button className='btn text-center seeMore'>En savoir plus</button>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-2 serviceBox d-flex flex-column justify-content-center align-items-center">
              <div className="serviceCircle d-flex justify-content-center align-items-center">
                <MdOutlineLibraryBooks className='serviceIcon' />
              </div>
              <h5>Bibliothèque Numérique</h5>
              <p className='text-center serviceDesc'>
                Accédez à une vaste collection de ressources éducatives et de livres numériques.
              </p>
              <button className='btn text-center seeMore'>En savoir plus</button>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-2 serviceBox d-flex flex-column justify-content-center align-items-center">
              <div className="serviceCircle d-flex justify-content-center align-items-center">
                <FaUsers className='serviceIcon' />
              </div>
              <h5>Communauté En ligne</h5>
              <p className='text-center serviceDesc'>
                Échangez avec des apprenants et enseignants du monde entier.
              </p>
              <button className='btn text-center seeMore'>En savoir plus</button>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-2 serviceBox d-flex flex-column justify-content-center align-items-center">
              <div className="serviceCircle d-flex justify-content-center align-items-center">
                <FaGraduationCap className='serviceIcon' />
              </div>
              <h5>Certification & Diplômes</h5>
              <p className='text-center serviceDesc'>
                Obtenez des certifications reconnues et validez vos compétences.
              </p>
              <button className='btn text-center seeMore'>En savoir plus</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}