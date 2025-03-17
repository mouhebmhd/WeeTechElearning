import React from 'react';
import logoImage from '../../src/assets/img/logoWebsite.png';
import './styles/resetPassword.css';
import { CiUser } from 'react-icons/ci';
import { FaEyeLowVision } from 'react-icons/fa6';
import { FaUserLock, FaCalendarAlt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className='signUpParentContainer '>
      <div className="container-fluid p-2 ">
        <img src={logoImage} alt="Logo" className="logoImage" />
      </div>

      <div className="container-fluid  h-75 d-flex align-items-center signUpContainer">

        <div className="col-6  ">
          <h1 className="signUpTitle">Forgot <br /> Password ?  </h1>
        </div>

        <div className=" col-sm-12 col-md-12 col-lg-6">
          <div className="col-10 signUpForm d-flex gap-3 flex-column align-items-center">
            <h2 className='signUpMessage mt-4'>Recover your Password</h2>

            <form className="formsignUpInput  container-fluid">
  
       
            

  
              <div className="col mb-3 d-flex formIconItem align-items-center">
                <FaUserLock className="h4" />
                <input
                  type="email"
                  className="form-control input-form-control"
                  id="passwordInput"
                  placeholder="Your email address"
                />
              </div>
           

          

         
              

     
             

      
              <button type="submit" className="btn p-2 rounded-5 signUpButton w-100">Send Reset Link</button>
            </form>

          
           
          </div>
        </div>
      </div>
    </div>
  );
}
