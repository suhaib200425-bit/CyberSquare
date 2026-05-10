import axios from 'axios';
import React, { useState } from 'react'
import { USERAPI } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import useStore from '../../context/Zustand';

// import "./Auth.css";
// #1e2235
function Auth({
    backgroundColor = { value: "transparent" },
    color = { value: "black" },
    btnColor = { value: "black" },
    btnTextColor = { value: "white" },
    image = { value: "https://i.pinimg.com/736x/5e/e2/64/5ee2647c2c50a098ed47a1335ca23172.jpg" }
}) {

    const {SetUser} =useStore()
    const [state, setState] = useState(false);
    const Navigate = useNavigate()
    const [form, setForm] = useState({
        lname: "",
        fname: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm((prev)=>{ 
            return {...prev, [e.target.name]: e.target.value}
         })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form);
        
        if (state) {
            try {
                const response = await axios.post(`${USERAPI}/register`, {
                    username: `${form.fname} ${form.lname}`,
                    email: form.email,
                    password: form.password
                })
                console.log(response.data);
                setState(false)
                setForm({
                    lname: "",
                    fname: "",
                    email: "",
                    password: ""
                })

            } catch (err) {
                console.log(err.response?.data);
                
                alert( err.message)
            }
        } else {
            try {
                const response = await axios.post(`${USERAPI}/login`, {
                    email: form.email,
                    password: form.password
                })
                console.log(response.data);
                localStorage.setItem('token',response.data?.token)
                SetUser(response.data?.user)
                Navigate('/home')
                setForm({
                    lname: "",
                    fname: "",
                    email: "",
                    password: ""
                })

            } catch (err) {
                console.log(err.response?.data);
                alert( err.message)
            }
        }
    }

    return (

        <div
            className="
                //absolute w-full h-screen
                flex justify-center items-center
            "
        >

            <div
                style={{ backgroundColor: backgroundColor.value, color: color.value }}
                className="
                    w-full h-full
                     //bg-[#1e2235]
                    overflow-hidden
                    flex items-center
                    shadow-[0_20px_50px_rgba(0,0,0,0.4)]
                "
            >

                {/* LEFT SECTION */}
                <div
                    className="
                        flex justify-center
                        w-full md:w-1/2
                        p-[10px] md:px-[60px] md:py-[40px]
                        text-white
                    "
                >

                    {/* CONTENT */}
                    <div className="mt-[10px] w-full">

                        <p
                            className="
                                text-[#b5b8c5]
                                text-[13px]
                                tracking-[1px]
                                mb-[20px]
                            "
                        >
                            START FOR FREE
                        </p>

                        <h1
                            style={{ color: color.value }}
                            className="
                                text-[40px]
                                leading-[1.1]
                                mb-[20px]
                                font-bold
                            "
                        >
                            {state ? "Create new" : "Login Your"}
                            <br />
                            account
                            <span className="text-[#1e90ff]">.</span>
                        </h1>

                        <p
                            className="
                                text-[#a6a9b7]
                                mb-[40px]
                            "
                        >

                            {
                                state
                                    ? "Already A Member?"
                                    : "Create A Member?"
                            }

                            <a
                                href=""
                                onClick={(e) => {
                                    e.preventDefault();
                                    setState(prev => !prev);
                                }}
                                className="
                                    text-[#1e90ff]
                                    no-underline
                                    ml-1
                                    cursor-pointer
                                "
                            >
                                {state ? "Log In" : "Register"}
                            </a>

                        </p>

                        {/* FORM */}
                        <form className="w-full" onSubmit={handleSubmit}>

                            {/* NAME INPUTS */}
                            {
                                state &&

                                <div
                                    className="
                                        flex flex-col md:flex-row
                                        gap-[20px]
                                        mb-[20px]
                                    "
                                >

                                    <input
                                        onChange={handleChange}
                                        value={form.fname}
                                        required
                                        type="text"
                                        placeholder="First name"
                                        name="fname"
                                        className="
                                            w-full h-[55px]
                                            border-none outline-none
                                            bg-[#2b3048]
                                            rounded-[14px]
                                            px-[20px]
                                            text-white
                                            text-[15px]
                                            placeholder:text-[#b1b4c2]
                                        "
                                    />

                                    <input
                                        onChange={handleChange}
                                        value={form.lname}
                                        required
                                        type="text"
                                        name='lname'
                                        placeholder="Last name"
                                        className="
                                            w-full h-[55px]
                                            border-none outline-none
                                            bg-[#2b3048]
                                            rounded-[14px]
                                            px-[20px]
                                            text-white
                                            text-[15px]
                                            placeholder:text-[#b1b4c2]
                                        "
                                    />

                                </div>
                            }

                            {/* EMAIL */}
                            <input
                                onChange={handleChange}
                                value={form.email}
                                required
                                type="email"
                                placeholder="Email"
                                name='email'
                                className="
                                    w-full h-[55px]
                                    border-none outline-none
                                    bg-[#2b3048]
                                    rounded-[14px]
                                    px-[20px]
                                    text-white
                                    text-[15px]
                                    mb-[20px]
                                    placeholder:text-[#b1b4c2]
                                "
                            />

                            {/* PASSWORD */}
                            <input
                                onChange={handleChange}
                                value={form.password}
                                required
                                name='password'
                                type="password"
                                placeholder="Password"
                                className="
                                    w-full h-[55px]
                                    outline-none
                                    bg-[#2b3048]
                                    rounded-[14px]
                                    px-[20px]
                                    text-white
                                    text-[15px]
                                    mb-[20px]
                                    border-[2px]
                                    border-[#1e90ff]
                                    placeholder:text-[#b1b4c2]
                                "
                            />

                            {/* BUTTON */}
                            <div
                                className="
                                    flex gap-[20px]
                                    mt-[20px]
                                "
                            >

                                <button
                                onClick={handleSubmit}
                                    style={{ backgroundColor: btnColor.value, color: btnTextColor.value }}
                                    type="button"
                                    className="
                                        flex-1
                                        h-[55px]
                                        border-none
                                        rounded-[30px]
                                        cursor-pointer
                                        text-[15px]
                                        font-semibold
                                        //bg-[#5d6274]
                                        text-white
                                    "
                                >
                                    Submit
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

                {/* RIGHT SECTION */}
                <div
                    className="
                        hidden md:block
                        w-1/2 h-full
                        p-[50px]
                    "
                >

                    <div
                        className="
                            w-full h-full
                            rounded-[10px]
                            bg-center
                            bg-no-repeat
                            bg-cover
                        "
                        style={{
                            backgroundImage:
                                `url(${image.value})`
                        }}
                    ></div>

                </div>

            </div>

        </div>
    );
}



export default Auth