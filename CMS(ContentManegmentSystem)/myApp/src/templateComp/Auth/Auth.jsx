import React, { useState } from 'react'

import "./Auth.css";

function Auth() {
    const [state, setState] = useState(false)
    return (
        <div className="main-container">

            <div className="card">

                {/* LEFT SECTION */}
                <div className="left-section">


                    {/* CONTENT */}
                    <div className="content">

                        <p className="small-title">
                            START FOR FREE
                        </p>

                        <h1>
                            {state ? 'Create new' : 'Login Your'} <br />
                            account<span>.</span>
                        </h1>

                        <p className="login-text">
                            {state ? 'Already A Member?' : 'Create A Member?'}
                            <a onClick={(e)=>{
                                e.preventDefault()
setState(prev=>!prev)
                            }} href="">{state ? ' Log In' : 'Register'}</a>
                        </p>

                        {/* FORM */}
                        <form>

                            {
                                state && <div className="double-input">
                                    <input
                                    className='inputfield'
                                        type="text"
                                        placeholder="First name"
                                    />

                                    <input
                                    className='inputfield'
                                        type="text"
                                        placeholder="Last name"
                                    />
                                </div>
                            }

                            <input
                            className='inputfield'
                                type="email"
                                placeholder="Email"
                            />

                            <input
                            className='inputfield'
                                type="password"
                                placeholder="Password"
                            />

                            <div className="buttons">

                                <button
                                    type="button"
                                    className="SUBMIT gray-btn"
                                >
                                    Submit
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

                {/* RIGHT SECTION */}
                <div className="right-section">

                    <div className="overlay"></div>

                </div>

            </div>

        </div>
    );
}


export default Auth