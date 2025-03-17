// landingPage.jsx

import React from 'react';
import { GiSubmarineMissile } from "react-icons/gi";
import { FaLocationArrow } from "react-icons/fa";
import Navbar from '../components/views/partialComponents/navbar';

import "./styles/landingPage.css"

export default function landingPage() {
  return (
    <>
        <Navbar></Navbar>

    <div className='landingComponent m-0 mb-5 p-1'>
      <div className='container-fluid mainContent p-2 d-flex  flex-column'>
        <h1 className='helloText mt-5 fw-bold display-4'>
          Saisis chaque opportunité d'apprendre, <br />c'est ta voie vers un avenir brillant.
        </h1>
        <p className='helloParagraph mt-2  lead'>
          Rejoignez-nous sur WeeCode, où chaque moment d'apprentissage devient une pierre précieuse sur le chemin de votre réussite. Ensemble, sur WeeCode, nous investissons dans la construction de connaissances et dans l'épanouissement de chaque apprenant.
        </p>
        <div className="buttons mt-3  d-flex gap-2">
          <button className="btn exploreBtn"><GiSubmarineMissile className='m-2 missile-icon'></GiSubmarineMissile>Explorer Nos Cours</button>
          <button className="btn learnMore "><FaLocationArrow className='arrow'></FaLocationArrow> En savoir plus</button>
        </div>
        </div>
        <div className="reviews mt-5 mb-5 d-flex align-items-center gap-3 text-center">
          <div className="profileImages d-flex mx-3">
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
          </div>
          <p className='textMessage mx-0 mt-3  '>
            Plus de <span>1K+ participants</span> ont suivi nos cours.
          </p>
        </div>
     
    </div>
    </>
  );
}
