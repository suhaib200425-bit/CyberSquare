// AuthOne.jsx

import axios from "axios";
import { useState } from "react";
// import "./AuthOne.css";
import { FaUser, FaGoogle, FaLock, FaEnvelope } from "react-icons/fa";
import { BASEURL } from "../../assets/assets";
import useStore from "../../context/Zustand";
import { useNavigate } from "react-router-dom";

function AuthOne({
    backgroundColor = { value: 'transparent' },
    color = { value: 'black' },
    btnColor = { value: '' },
    btnTextColor = { value: 'white' },
    inputBackgroundColor = { value: '#1010' },
    inputTextColor = { value: 'black' },
    image = {
        value:
            'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop'
    }
}) {

    // NAVIGATE
    const Navigate = useNavigate();

    // STORE
    const { SetUser } = useStore();

    // STATES
    const [state, setState] = useState(true);

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // INPUT CHANGE
    function handleChange(e) {

        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

    }

    // TOGGLE LOGIN / REGISTER
    function toggleAuth() {

        setState((prev) => !prev);

    }

    // REGISTER FUNCTION
    async function registerUser() {

        try {

            if (
                form.password !==
                form.confirmPassword
            ) {

                alert('Password Is Not Match');

                return;

            }

            const response = await axios.post(
                `${BASEURL}/api/user/register`,
                {
                    username: form.username,
                    email: form.email,
                    password: form.password
                }
            );

            console.log(response.data);

            setState(true);

            setForm({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (err) {

            console.log(err.response?.data);

            alert(
                err.response?.data?.message ||
                'server error'
            );

        }

    }

    // LOGIN FUNCTION
    async function loginUser() {

        try {

            const response = await axios.post(
                `${BASEURL}/api/user/login`,
                {
                    email: form.email,
                    password: form.password
                }
            );

            console.log(response.data);

            localStorage.setItem(
                'token',
                response.data?.token
            );

            SetUser(response.data?.user);

            Navigate('/home');

            setForm({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (err) {

            console.log(err.response?.data);

            alert(
                err.response?.data?.message ||
                err?.message
            );

        }

    }

    // FORM SUBMIT
    async function handleSubmit(e) {

        e.preventDefault();

        if (!state) {

            registerUser();

        } else {

            loginUser();

        }

    }

    return (

        <div
            className='w-full h-[100vh] flex items-center justify-center'
            style={{
                backgroundColor:
                    backgroundColor.value
            }}
        >

            <div className='w-full h-[100vh] flex flex-col lg:flex-row p-5 md:p-10 gap-10'>

                {/* IMAGE SECTION */}
                <div className='w-full h-[100vh] lg:w-1/2 flex items-center justify-center'>

                    <div className='w-full h-full overflow-hidden rounded-[30px] bg-black'>

                        <img
                            src={image.value}
                            alt='game'
                            className='w-full h-full object-cover brightness-75'
                        />

                    </div>

                </div>

                {/* FORM SECTION */}
                <div className='w-full h-full lg:w-1/2 flex flex-col justify-center text-white'>

                    <h1
                        className='text-[28px] md:text-[35px] font-bold mb-10'
                        style={{
                            color: color.value
                        }}
                    >
                        {
                            state
                                ? 'Login your account'
                                : 'Create an account'
                        }
                    </h1>

                    <form
                        className='w-full'
                        onSubmit={handleSubmit}
                    >

                        {/* USERNAME */}
                        {!state && (

                            <div
                                style={{
                                    backgroundColor:
                                        inputBackgroundColor.value
                                }}
                                className='w-full h-[50px] border border-[#1d1d1d] rounded-[18px] mb-5 flex items-center px-5'
                            >

                                <FaUser className='text-[#666] text-[18px] mr-4' />

                                <input
                                    onChange={handleChange}
                                    style={{
                                        color:
                                            inputTextColor.value
                                    }}
                                    type='text'
                                    placeholder='User Name'
                                    name='username'
                                    value={form.username}
                                    className='h-full w-full bg-transparent outline-none'
                                />

                            </div>

                        )}

                        {/* EMAIL */}
                        <div
                            style={{
                                backgroundColor:
                                    inputBackgroundColor.value
                            }}
                            className='w-full h-[50px] border border-[#1d1d1d] rounded-[18px] mb-5 flex items-center px-5'
                        >

                            <FaEnvelope className='text-[#666] text-[18px] mr-4' />

                            <input
                                onChange={handleChange}
                                name='email'
                                value={form.email}
                                style={{
                                    color:
                                        inputTextColor.value
                                }}
                                type='email'
                                placeholder='Email address'
                                className='h-full w-full bg-transparent outline-none'
                            />

                        </div>

                        {/* PASSWORD */}
                        <div
                            style={{
                                background:inputBackgroundColor.value
                            }}
                            className='w-full h-[50px] border border-[#1d1d1d] rounded-[18px] mb-5 flex items-center px-5'
                        >

                            <FaLock className='text-[#666] text-[18px] mr-4' />

                            <input
                                onChange={handleChange}
                                style={{
                                    color:
                                        inputTextColor.value
                                }}
                                type='password'
                                name='password'
                                value={form.password}
                                placeholder='Password'
                                className='h-full w-full bg-transparent outline-none'
                            />

                        </div>

                        {/* CONFIRM PASSWORD */}
                        {!state && (

                            <div
                                style={{
                                    backgroundColor:
                                        inputBackgroundColor.value
                                }}
                                className='w-full h-[50px] border border-[#1d1d1d] rounded-[18px] mb-5 flex items-center px-5'
                            >

                                <FaLock className='text-[#666] text-[18px] mr-4' />

                                <input
                                    onChange={handleChange}
                                    name='confirmPassword'
                                    value={form.confirmPassword}
                                    style={{
                                        color:
                                            inputTextColor.value
                                    }}
                                    type='password'
                                    placeholder='Confirm password'
                                    className='h-full w-full bg-transparent outline-none'
                                />

                            </div>

                        )}

                        {/* SUBMIT BUTTON */}
                        <button
                            type='submit'
                            style={{
                                background:btnColor.value!=''?btnColor.value:"linear-gradient(to right, #ff416c, #ff4b2b)",
                                color:btnTextColor.value
                            }}
                            className='w-full h-[50px] rounded-[18px] text-[16px] font-semibold cursor-pointer mt-2 mb-5'
                        >
                            Submit
                        </button>

                        {/* GOOGLE BUTTON */}
                        <button
                            type='button'
                            className='w-full h-[50px] rounded-[18px] bg-black border-2 border-[#222] text-white text-[15px] flex items-center justify-center gap-3 cursor-pointer'
                        >

                            <FaGoogle />

                            Continue with Google

                        </button>

                    </form>

                    {/* TOGGLE TEXT */}
                    <p className='mt-8 text-center text-[#777] text-[14px]'>

                        {
                            !state
                                ? 'Already have an account?'
                                : 'Create an account ?'
                        }

                        <span
                            onClick={toggleAuth}
                            className='text-[#ff416c] cursor-pointer ml-2'
                        >

                            {
                                !state
                                    ? 'Login'
                                    : 'Register'
                            }

                        </span>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default AuthOne;
