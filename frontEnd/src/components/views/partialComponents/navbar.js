import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../../assets/img/logoWebsite.png";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="" className="brandLogo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Acceuil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Nos Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/team">Notre Équipe</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/courses">Nos Formations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signIn">Nous Rejoindre</Link>
          </li>
        </ul>
      </div>

      <div className="buttons d-flex gap-1 m-2">
         <Link to="/signUp">
         <button className='btn btn-info btn-subscribe'>
         Inscrivez Vous
        </button>
        </Link>
        <Link to="/signIn">
        <button className='btn btn-contact'>
          Se Connecter
        </button>
        </Link>
      </div>
    </nav>
  );
}
