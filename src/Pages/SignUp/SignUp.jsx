import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
    const [errorMassage, setErrorMassage] = useState('');
    const [success, setSuccess] = useState(false)
    const handleForm = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value
        setSuccess(false)
        console.log(email, password)
        setErrorMassage('')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
                setSuccess(true)
            })
            .catch(error => {
                console.log(error)
                setErrorMassage(error.message)
            })
    }
    const [showPassword, setShowPassword] = useState(false)
    console.log(showPassword)
    return (

        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-10">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Register Now</h1>
                <form onSubmit={handleForm} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="input validator">
                        
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            required
                            placeholder="Password"
                            minLength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />
                        <button onClick={()=>setShowPassword(!showPassword)}> {showPassword ? <FaEye /> : <FaEyeSlash />}</button>


                    </label>
                    <p className="validator-hint hidden">
                        Must be more than 8 characters, including
                        <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                    </p>
                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p className='text-red-700'>{errorMassage}</p>
                {
                    success && <p className='text-green-700'>Successfully Registered</p>
                }
            </div>
        </div>
    );
};

export default SignUp;