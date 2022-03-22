import React from 'react';
import './Login.css'
import logo from '../images/blue-logo 1.png'
import img1 from '../images/FB.png'
import img2 from '../images/google.png'

//  
const Login = () => {
    const login = () => {
        const pass = 'test';
        const email = 'test@gmail.com'
        let val = 0;
        const emailInputVAl = document.getElementById('email');
        const passInputVAl = document.getElementById('password');
        if (emailInputVAl.value !== email) {
            val++;
            emailInputVAl.setAttribute('placeholder', 'wrong email');
            emailInputVAl.value = '';


        }
        if (passInputVAl.value !== pass) {
            val++;
            passInputVAl.setAttribute('placeholder', 'wrong pass');
            passInputVAl.value = '';
        }
        if (val > 0) {
            document.getElementById('f-pass').style.display = 'block';
        }
        else {
            alert("successfully logged in");
            document.getElementById('f-pass').style.display = 'none';
            passInputVAl.value = '';
            emailInputVAl.value = '';
        }

    }
    return (
        <div className='background d-flex flex-row-reverse '>
            <div className='col-lg-1 col-md-1  col-sm-1'></div>
            <form action="" id='form' className='border text-center bg-white col-lg-4 col-md-6 col-sm-8 col-12'>
                <div >
                    <img className='img-fluid' src={logo} id="logo" alt="" />
                    <p id='p1'>Explore The Best Tours... Hurry up!!</p>
                    <input className='input' type="email" name="" id="email" placeholder='Email Address' />
                    <br />
                    <input className='input' type="password" name="" id="password" placeholder='Password' />
                    <a id='f-pass' href="/#"><small>Forgot Password?</small></a>
                    <br />
                    <button type="button" className="btn" id='btn' onClick={login}>Log In</button>
                    <small id="password-hint">Email: test@gmail.com --- Pass: test </small>
                    <div className='d-flex justify-content-center py-4'>
                        <hr className='' />
                        <p className='px-3 fw-bold pt-1'> or </p>
                        <hr className='' />
                    </div >
                    <div className='d-flex justify-content-center'>
                        <a href="/#"> <img id='img1' src={img1} alt="" /></a>
                        <a href="/#"> <img id='img2' src={img2} alt="" /></a>
                    </div>
                    <p id='bottom-p1'>Don't have an account? <a href="/#">Sign Up</a> </p>
                </div>

            </form >

        </div >
    );
};

export default Login;