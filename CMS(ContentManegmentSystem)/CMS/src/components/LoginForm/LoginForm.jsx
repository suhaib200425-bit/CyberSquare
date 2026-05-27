import React, { useRef, useState } from 'react'
import "./LoginForm.css"
import axios from 'axios'
import { USERAPI } from '../../assets/assets'

import { useNavigate } from 'react-router-dom';
import useStore from '../../Context/Zustand'
function LoginForm({ setCurrentState, register }) {
    const [OTP, setOTP] = useState(false)
    const [error, setError] = useState(false)
    const { SetUser } = useStore()
    const Navigate = useNavigate()
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    async function handleSubmitRegister(e) {
        e.preventDefault()
        try {
            const response = await axios.post(`${USERAPI}/sent-otp`, form)
            setOTP(true)
            console.log(response.data);
            alert(response.data?.message)

        } catch (error) {
            setError(error.response?.data?.message || error.message)
            // alert()
            console.log(error.response?.data || error.message);
        }
    }
    function handleChange(e) {
        setForm(prev => { return { ...prev, [e.target.name]: e.target.value } })
    }
    async function handleSubmitLogin(e) {
        e.preventDefault()
        try {
            const response = await axios.post(`${USERAPI}/login`, form)

            console.log(response.data);
            localStorage.setItem("token", response.data?.token)
            SetUser(response.data?.user)
            alert(response.data?.message)
            Navigate('/')

        } catch (error) {
            setError(error.response?.data?.message || error.message)
            // alert()
            console.log(error.response?.data || error.message);
        }
    }
    return (
        <>
            {OTP ?
                <OTPInput setOTP={setOTP} form={form} />
                :
                <form className='LoginForm' onSubmit={register ? handleSubmitRegister : handleSubmitLogin}>
                    <h1 className='text-start w-[90%]' style={{ color: "white", fontSize: "30px" }}>

                        {
                            register ? "Register" : "Login"
                        }
                    </h1>
                    <hr />
                    {
                        register && <div className="inputBoxField">
                            <label htmlFor="">UserName</label>
                            <div className="field">
                                <div className="icon"></div>
                                <input type="text" placeholder='UserName' name='username' value={form.username} onChange={handleChange} />
                            </div>
                        </div>
                    }
                    <div className="inputBoxField">
                        <label htmlFor="">Email Id</label>
                        <div className="field">
                            <div className="icon"></div>
                            <input type="email" placeholder='Email Id' name='email' value={form.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="inputBoxField">
                        <label htmlFor="">Password</label>
                        <div className="field">
                            <div className="icon"></div>

                            <input type="password" placeholder='password' name='password' value={form.password} onChange={handleChange} />
                        </div>
                    </div>
                    {
                        register && <div className="inputBoxField">
                            <label htmlFor="">Confirm Password</label>
                            <div className="field">
                                <div className="icon"></div>

                                <input type="password" placeholder='password' name='confirmPassword' value={form.confirmPassword} onChange={handleChange} />
                            </div>


                        </div>
                    }
                    <button onClick={register ? handleSubmitRegister : handleSubmitLogin}>{register ? "Register" : "Login"}</button>
                    {error && <div className="ERRORMESSAGE mb-2 mt-2 text-red-800 text-[15px]">{error}</div>}

                    <div className="bottomtextbtn">
                        <span>you have an accountt</span>
                        <span className='divider'></span>
                        <span onClick={() => {
                            setCurrentState(prev => !prev)
                        }}>{register ? "login" : "Register"}</span>
                    </div>

                </form>

            }
        </>
    )
}

export default LoginForm



function OTPInput({ form, setOTP }) {

    const [error, setError] = useState(false)
    const [webname, setWebname] = useState('')
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputsRef = useRef([]);

    const handleChange = (value, index) => {
        // Only allow numbers
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        // Move to next input
        if (value && index < otp.length - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        // Backspace -> move to previous input
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();

        const pastedData = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, 4);

        const newOtp = pastedData.split("");

        while (newOtp.length < 4) {
            newOtp.push("");
        }

        setOtp(newOtp);

        const focusIndex =
            pastedData.length >= 4 ? 3 : pastedData.length;

        inputsRef.current[focusIndex]?.focus();
    };

    return (
        <form className='LoginForm' >
            <h1 className='text-start w-[90%]' style={{ color: "white", fontSize: "30px" }}>

                Enter The Otp And Website Name

            </h1>
            <div className="inputBoxField">
                <label htmlFor="">Website Name</label>
                <div className="field">
                    <div className="icon"></div>

                    <input type="text" placeholder='Name For Your Website' name='webname' value={webname} onChange={(e) => { setWebname(e.target.value)}} />
                </div>
            </div>
            
                <label className='mt-5 text-start w-[90%]' htmlFor="">OTP

                </label>
            <div style={styles.container}>

                {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        value={digit}
                        maxLength={1}
                        ref={(el) => (inputsRef.current[index] = el)}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={handlePaste}
                        style={styles.input}
                    />
                ))}


            </div>
            {error && <div className="ERRORMESSAGE mb-2 mt-2 text-red-800 text-[15px]">{error}</div>}

            <button onClick={async (e) => {
                e.preventDefault()
                try {
                    const response = await axios.post(`${USERAPI}/otp-verify`, { ...form, otp: otp.join(""), admin: true,websiteName:webname })
                    alert(response?.data?.message)
                    console.log(response.data);

                } catch (error) {
                    setError(error.response?.data?.message || error.message)
                    // alert()
                    console.log(error.response?.data || error.message);
                }
            }
            }>Verify the Otp</button>
        </form>

    );
}

const styles = {
    spanText: {
        width: "90%",
        textAlign: "left",
        marginTop: "15px",
    },
    container: {
        display: "flex",
        gap: "10px",
        width: "90%",
        // alignItems: "start",
    },
    input: {
        width: "45px",
        height: "45px",
        textAlign: "center",
        fontSize: "24px",
        border: "2px solid #ccc",
        borderRadius: "8px",
        outline: "none",
    },
    button: {
        padding: "12px 20px",
        border: "none",
        background: "#007bff",
        color: "#fff",
        borderRadius: "8px",
        cursor: "pointer",
    },
};