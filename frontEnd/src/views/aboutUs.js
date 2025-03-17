import React from 'react'
import "./styles/aboutUs.css"
import { BsArrowUpRight } from "react-icons/bs";
import Navbar from '../components/views/partialComponents/navbar';

export default function AboutUs() {
  return (
    <>
    <Navbar></Navbar>
    <div className="ourServices ">
    <h1 className='ourServicesTitle fw-bold text-center display-4'>à propos de nous </h1>
    <p className='servicesDescText text-center lead'>
    Comprendre notre identité profonde ainsi que la nature de nos contributions et prestations.
    </p>
        <div className="content row m-0 p-3">
            <div className="imageGallery col-lg-6 col-xl-6  col-md-12">
              <div className='image1'></div>
              <div className='image2'></div>
              <div className='image3'></div>
            </div>
            <div className="aboutDescription col-lg-6 col-xl-6 col-md-12">
              <h3 className='aboutTitle'>
                Bienvenue dans notre service éducatif ! Maintenant, augmentez vos connaissances avec notre plateforme. </h3>
              <p>Découvrez notre sélection de cours minutieusement élaborée par des experts renommés, englobant un large éventail de domaines, des matières académiques aux compétences pratiques. Avec un catalogue exhaustif, nous nous assurons de répondre à tous les besoins éducatifs. Choisissez parmi des enseignements pointus dispensés par des professionnels chevronnés ou des programmes plus généralistes, offrant ainsi une flexibilité adaptée à tous les niveaux d'apprentissage. Rejoignez-nous dans cette aventure éducative, où la qualité de l'enseignement rencontre la diversité des connaissances.</p>
              <button className='btn knowMoreButton m-0 p-0'>Découvrir  Notre Catalogue <BsArrowUpRight className='arrowIcon m-0 p-0'></BsArrowUpRight></button>
            </div>
        </div>
  </div>
    </>
    
  )
}
