
import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../../Firebase/firebase.init';

const Signin = () => {
    const [errorMassage, setErrorMassage] = useState('');
    const [success, setSuccess] = useState(false)
    const emailref = useRef();
    const handleFormLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value
        setSuccess(false)
        setErrorMassage('')
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result)
            if(result.user.emailVerified == true){
                alert('Welcome to Our Website')
            }
            else
            {
                alert('Please Verify Your Email Address')
            }

            setSuccess(true)
        })
        .catch(error => {
            console.log(error)
            setErrorMassage(error.message)
        })
    }
    const hanldeForgetPassword =() => {
        const emailAddress = emailref.current.value;
        sendPasswordResetEmail(auth, emailAddress)
        .then(result => {
            console.log(result);
            alert('Password Reset Link Send Your Email')
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-10">
            <h1 className='text-4xl font-bold text-center'>Login</h1>
            <div className="card-body">
                <form onSubmit={handleFormLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" ref={emailref} name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

                    <div><a onClick={hanldeForgetPassword} className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p className='text-red-800'>{errorMassage}</p>
                <p className='text-green-700'>{success && 'Success'}</p>
            </div>
        </div>
    );
};

export default Signin;