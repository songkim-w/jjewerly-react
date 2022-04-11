
import React from 'react';
import './Login.scss'
import { FaGoogle, FaFacebookF } from "react-icons/fa";

function SignIn(){
  return (
    <div className="container login">

        <form>
        <h2 className='mb-5'>Login</h2>
        <div className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control" />
            <label className="form-label" >Email address</label>
        </div>

        <div className="form-outline mb-4">
            <input type="password" id="form2Example2" className="form-control" />
            <label className="form-label" >Password</label>
        </div>


        <div className="row mb-4">
            <div className="col d-flex justify-content-center">

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                <label className="form-check-label"> Remember me </label>
            </div>
            </div>

            <div className="col">
        
            <a href="#!">Forgot password?</a>
            </div>
        </div>


        <button type="button" className="btn btn-block mb-4 signin">Sign in</button>
        


        <div className="text-center">
            <p>Not a member? <span className='register'>Register</span></p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
            <FaGoogle></FaGoogle>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
            <FaFacebookF></FaFacebookF>
            </button>

        </div>
        </form>

    </div>
  )
};

export default SignIn;