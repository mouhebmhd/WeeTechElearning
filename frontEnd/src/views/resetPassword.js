import React from 'react';
import logoImage from '../../src/assets/img/logoWebsite.png';
import './styles/resetPassword.css';
import { CiUser } from 'react-icons/ci';
import { FaEyeLowVision } from 'react-icons/fa6';
import { FaUserLock, FaCalendarAlt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ResetPassword() {
  return (
    <div className='signUpParentContainer '>
      <div className="container-fluid p-2 ">
        <img src={logoImage} alt="Logo" className="logoImage" />
      </div>

      <div className="container-fluid  h-75 d-flex align-items-center signUpContainer">

        <div className="col-6  ">
          <h1 className="signUpTitle">Reset <br /> Password ?  </h1>
        </div>

        <div className=" col-sm-12 col-md-12 col-lg-6">
          <div className="col-10 signUpForm d-flex gap-3 flex-column align-items-center">
            <h2 className='signUpMessage mt-4'>Your New Password</h2>

            <form className="formsignUpInput  container-fluid">
  
       
              <div className="col mb-3 d-flex formIconItem align-items-center visually-hidden">
                <CiUser className="h4" />
                <input
                  type="email"
                  className="form-control input-form-control"
                  id="emailInput"
                  placeholder="Email"
                />
              </div>

  
              <div className="col mb-3 d-flex formIconItem align-items-center">
                <FaUserLock className="h4" />
                <input
                  type="password"
                  className="form-control input-form-control"
                  id="passwordInput"
                  placeholder="New Password"
                />
                <FaEyeLowVision className="h4" />
              </div>
              <div className="col mb-3 d-flex formIconItem align-items-center">
                <FaUserLock className="h4" />
                <input
                  type="password"
                  className="form-control input-form-control"
                  id="passwordInput"
                  placeholder="Confirm New Password"
                />
                <FaEyeLowVision className="h4" />
              </div>
              

          

         
              

     
             

      
              <button type="submit" className="btn p-2 rounded-5 signUpButton w-100">Sign Up</button>
            </form>

          
            <div className="container mt-2">
              <p className="text-center specialText mt-2">
                Already have an account? <Link to="/signIn">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
