import React from 'react'
import './styles/SignIn.css'
import logoImage from '../../src/assets/img/logoWebsite.png'
import { CiUser } from 'react-icons/ci'
import { FaUserLock } from 'react-icons/fa'
import { FaEyeLowVision } from 'react-icons/fa6'

export default function SignIn () {
  return (
    <>
      <div className='signInContainer'>
        <div className='container-fluid p-2'>
          <img src={logoImage} alt='' className='logoImage' />
        </div>
        <div className='row'>
          <div className='container-fluid  d-flex justify-content-center '>
            <div className='col-4 loginForm d-flex gap-3 flex-column align-items-center'>
              <h2>Welcome Back ! </h2>
              <br />
              <br />
              <form className='formLoginInput container-fluid'>
                <div className='col mb-3 d-flex formIconItem align-items-center'>
                  <CiUser className='h4' />
                  <input
                    type='email'
                    className='form-control input-form-control'
                    id='emailInput'
                    placeholder='Username or Email'
                  />
                </div>
                <div className='col mb-3 d-flex formIconItem align-items-center'>
                  <FaUserLock className='h4' />
                  <input
                    type='password'
                    className='form-control input-form-control'
                    id='passwordInput'
                    placeholder='Password'
                  />
                  <FaEyeLowVision className='h4' />
                </div>
              </form>
              <div className='container d-flex justify-content-between'>
                <div className=' mb-3 d-flex  align-items-center'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='rememberMe'
                  />
                  <label
                    class='rememberMeLabel form-check-label mx-2'
                    for='rememberMe'
                  >
                    Remember Me
                  </label>
                </div>
                <div className=' mb-3 d-flex  align-items-center'>
                
                  <label
                    class='rememberMeLabel form-check-label mx-2'
                    for='rememberMe'
                  >
                    Forgot Password 
                  </label>
                </div>
              </div>
              <div className="container mt-2">
                <button className='btn rounded-5 btn-lg loginButton col-12'> Login</button>
              </div>
              <div className="container mt-2">
                <p className='text-center specialText mt-2'>Don't Have an Account ? Sign Up </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
