import React from 'react';

const SignUp = () => {
    return (

        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-10">
            <div className="card-body">
            <h1 className="text-5xl font-bold">Register Now</h1>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </div>
        </div>
    );
};

export default SignUp;