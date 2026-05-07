// AuthOne.jsx

import { useState } from "react";
import "./AuthOne.css";
import { FaGoogle, FaLock, FaEnvelope } from "react-icons/fa";

function AuthOne() {
    const [state, setState] = useState(true)
    return (
        <div className="gaming-container">

            <div className="gaming-card">

                {/* LEFT SIDE */}
                <div className="gaming-left">

                    <div className="video-box">

                        <img
                            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
                            alt="game"
                        />

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="gaming-right">

                    <h1>{state ? "Login your account" : "Create an account"}</h1>

                    <form>

                        {
                            !state && <div className="input-box">
                                <FaEnvelope className="icon" />

                                <input
                                    type="text"
                                    placeholder="User Name"
                                />

                            </div>
                        }
                            <div className="input-box">
                                <FaEnvelope className="icon" />

                                <input
                                    type="email"
                                    placeholder="Email address"
                                />
                            </div>
                        


                        <div className="input-box">
                            <FaLock className="icon" />

                            <input
                                type="password"
                                placeholder="Password"
                            />
                        </div>

                        {
                            !state&&<div className="input-box">
                            <FaLock className="icon" />

                            <input
                                type="password"
                                placeholder="Confirm password"
                            />
                        </div>
                        }

                        <button className="email-btn">
                            Submit
                        </button>

                        <button className="google-btn">
                            <FaGoogle />
                            Continue with Google
                        </button>

                    </form>

                    <p className="signin-text">
                        {
                            !state?"Already have an account?":"Create an account ?"
                        }
                        <span onClick={() => {
                            setState(prev => !prev)
                        }}> {!state?"Login":"Register"} </span>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default AuthOne;