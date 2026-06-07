import axios from 'axios';
import React, { useRef, useState } from 'react'
import { BASEURL, USERAPI } from '../../assets/assets';
import { useNavigate, useParams } from 'react-router-dom';
import useStore from '../../context/Zustand';

function Auth({
    backgroundColor = { value: 'transparent' },
    color = { value: 'black' },
    btnColor = { value: 'black' },
    btnTextColor = { value: 'white' },
    image = { value: 'https://i.pinimg.com/736x/5e/e2/64/5ee2647c2c50a098ed47a1335ca23172.jpg' }
}) {
    const { SetUser } = useStore();
    const { webname } = useParams()
    const [isRegister, setIsRegister] = useState(false); // Renamed for clarity
    const [OTP, setOTP] = useState(["", "", "", ""]);
    const [screenOTP, setScreenOTP] = useState(true);
    const [Loading, setLoading] = useState(false);
    const Navigate = useNavigate();
    const [form, setForm] = useState({ lname: '', fname: '', email: '', password: '' });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Loading) return
        if (isRegister) {
            setLoading(true)
            try {
                const response = await axios.post(`${BASEURL}/api/user/${webname}/sent-register-otp`, {
                    username: `${form.fname} ${form.lname}`,
                    email: form.email,
                    password: form.password
                });
                console.log(response.data);
                setScreenOTP(false)
                setLoading(false)
                // setIsRegister(false);
                // setForm({ lname: '', fname: '', email: '', password: '' });
            } catch (err) {
                setLoading(false)
                console.error(err.response?.data);
                alert(err.response?.data?.message || err.message);
            }
        } else {
            setLoading(true)
            try {
                const response = await axios.post(`${BASEURL}/api/user/${webname}/loged-user`, {
                    email: form.email,
                    password: form.password
                });
                console.log(response.data);
                localStorage.setItem('token', response.data?.token);
                SetUser(response.data?.user);
                Navigate(`/${webname}/home`);
                setForm({ lname: '', fname: '', email: '', password: '' });
                setLoading(false)

            } catch (err) {
                alert(err.response?.data?.message || err.message);
                setLoading(false)
                console.error(err.response?.data);
            }
        }
    };
    //OTP FUNCTIONS 
    const inputs = useRef([]);

    const handleOtpChange = (value, index) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...OTP];
        newOtp[index] = value;
        setOTP(newOtp);

        // Next box focus
        if (value && index < 3) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        // Previous box focus on backspace
        if (e.key === "Backspace" && !OTP[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handleOtpSubmit = async () => {
        if (Loading) return
        const otpValue = OTP.join("");
        if (Loading) return
        try {
            setLoading(true)
            const response = await axios.post(`${BASEURL}/api/user/${webname}/verify-register-otp`, {
                email: form.email,
                otp: otpValue
            })
            alert(response.data?.message)
            console.log(response.data);
                setForm({ lname: '', fname: '', email: '', password: '' });

            setLoading(false)
            setIsRegister(false)

        } catch (error) {
            alert(error.response?.data?.message || error.message)
            setLoading(false)
            console.log(error.response?.data || error.message);
        }
    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div style={{ backgroundColor: backgroundColor.value, color: color.value }} className='w-full h-full overflow-hidden flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.4)]'>

                {/* Form Container */}
                <div className='flex justify-center w-full md:w-1/2 p-[10px] md:px-[60px] md:py-[40px] text-white'>
                    <div className='mt-[10px] w-full'>
                        {screenOTP && <p className='text-[#b5b8c5] text-[13px] tracking-[1px] mb-[20px]'>START FOR FREE</p>}
                        {
                            screenOTP ?
                                <h1 style={{ color: color.value }} className='text-[40px] leading-[1.1] mb-[20px] font-bold'>
                                    {isRegister ? 'Create new' : 'Login Your'}<br />account<span className='text-[#1e90ff]'>.</span>
                                </h1> :
                                <h1 style={{ color: color.value }} className='text-[40px] leading-[1.1] mb-[20px] font-bold'>
                                    Enter the Otp
                                </h1>
                        }



                        {
                            screenOTP && <p className='text-[#a6a9b7] mb-[40px]'>
                                {isRegister ? 'Already A Member? ' : 'New here? '}

                                <button
                                    type='button'
                                    onClick={() => setIsRegister(prev => !prev)}
                                    className='text-[#1e90ff] no-underline ml-1 cursor-pointer bg-transparent border-none p-0 font-semibold'
                                >
                                    {isRegister ? 'Log In' : 'Register'}
                                </button>
                            </p>
                        }

                        {
                            screenOTP ? <form className='w-full' onSubmit={handleSubmit}>
                                {isRegister && (
                                    <div className='flex flex-col md:flex-row gap-[20px] mb-[20px]'>
                                        <input onChange={handleChange} value={form.fname} required type='text' placeholder='First name' name='fname' className='w-full h-[55px] border-none outline-none bg-[#2b3048] rounded-[14px] px-[20px] text-white text-[15px] placeholder:text-[#b1b4c2]' />
                                        <input onChange={handleChange} value={form.lname} required type='text' name='lname' placeholder='Last name' className='w-full h-[55px] border-none outline-none bg-[#2b3048] rounded-[14px] px-[20px] text-white text-[15px] placeholder:text-[#b1b4c2]' />
                                    </div>
                                )}

                                <input onChange={handleChange} value={form.email} required type='email' placeholder='Email' name='email' className='w-full h-[55px] border-none outline-none bg-[#2b3048] rounded-[14px] px-[20px] text-white text-[15px] mb-[20px] placeholder:text-[#b1b4c2]' />
                                <input onChange={handleChange} value={form.password} required name='password' type='password' placeholder='Password' className='w-full h-[55px] outline-none bg-[#2b3048] rounded-[14px] px-[20px] text-white text-[15px] mb-[20px] border-[2px] border-[#1e90ff] placeholder:text-[#b1b4c2]' />

                                <div className='flex gap-[20px] mt-[20px]'>
                                    <button
                                        style={{ backgroundColor: btnColor.value, color: btnTextColor.value }}
                                        type='submit'
                                        className='flex-1 h-[55px] border-none rounded-[30px] cursor-pointer text-[15px] font-semibold'
                                    >
                                        {isRegister ? 'Submit' : 'Log In'}
                                    </button>
                                </div>
                            </form>
                                : <div className="flex flex-col items-start gap-4 mt-10">
                                    <div className="flex gap-3">
                                        {OTP.map((digit, index) => (
                                            <input
                                                key={index}
                                                ref={(el) => (inputs.current[index] = el)}
                                                type="text"
                                                maxLength="1"
                                                value={digit}
                                                onChange={(e) => handleOtpChange(e.target.value, index)}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                                className="w-14 h-14 bg-[#2b3048] text-white text-center text-xl border rounded-lg outline-none focus:border-blue-500"
                                            />
                                        ))}
                                    </div>

                                    <button
                                        style={{
                                            backgroundColor: btnColor.value,
                                            color: btnTextColor.value
                                        }}
                                        onClick={handleOtpSubmit}
                                        className="px-5 py-3 bg-black text-white rounded-[10px]"
                                    >
                                        Verify OTP
                                    </button>
                                </div>
                        }
                    </div>
                </div>

                {/* Side Image */}
                <div className='hidden md:block w-1/2 h-full p-[50px]'>
                    <div className='w-full h-full rounded-[10px] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${image.value})` }}></div>
                </div>

            </div>
        </div>
    );
}

export default Auth