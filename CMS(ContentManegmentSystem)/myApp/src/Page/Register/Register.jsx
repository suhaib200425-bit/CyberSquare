import axios from "axios";
import React, { useState } from "react";
import { USERAPI } from "../../assets/assets";

function Register() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: ""
    });

    const [otp, setOtp] = useState(["", "", "", ""]);
    const [OtpFiled, setOtpFiled] = useState(false)
    const [error, setError] = useState("");

    // Handle OTP input
    const handleOtpChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;


        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // auto focus next
        if (value && index < 3) {
            document.getElementById(`otp-${index + 1}`).focus();
        }


    };
    const handleOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${USERAPI}/sent-otp`, form)
            console.log(response.data);

            setOtpFiled(true)

        } catch (error) {
            console.log(error.response.data || error.message);

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            if (!form.email.includes("@")) {
                setError("Invalid email");
                return;
            }

            if (form.password.length < 6) {
                setError("Password must be at least 6 characters");
                return;
            }

            if (form.password !== form.confirmPassword) {
                setError("Passwords do not match");
                return;
            }

            const finalOtp = otp.join("");

            if (finalOtp.length !== 4) {
                setError("Enter 4 digit OTP");
                return;
            }

            const response = await axios.post(`${USERAPI}/otp-verify`, form)
            console.log(response.data);

            setError("");
            console.log({ ...form, otp: finalOtp });

        } catch (error) {
            console.log(error.response.data || error.message);

        }
        //call api

    };

    return (
        <div className="flex flex-col item-center w-full justfy-center">
            <form onSubmit={OtpFiled ? handleSubmit : handleOtp} className="w-80 mx-auto mt-10 space-y-4"> <h2 className="text-xl font-bold">Register</h2>


                <input
                    type="text"
                    placeholder="User Name"
                    className="w-full border p-2 rounded-[5px]"
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded-[5px]"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2 rounded-[5px]"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border p-2 rounded-[5px]"
                    onChange={(e) =>
                        setForm({ ...form, confirmPassword: e.target.value })
                    }
                />

                {/* OTP Input */}
                {

                    OtpFiled &&
                    <>
                        <label htmlFor="mb-3">Enter The Otp</label>
                        <div className="flex justify-between">

                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`otp-${index}`}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(e.target.value, index)}
                                    className="w-12 h-12 rounded-[5px] text-center border text-lg"
                                />
                            ))}
                        </div>
                    </>
                }

                {error && <p className="text-red-500">{error}</p>}

                <button className="rounded-[5px] bg-blue-500 text-white px-4 py-2 w-full " onClick={OtpFiled ? handleSubmit : handleOtp}>
                    {OtpFiled ? 'Register' : 'Sent Otp'}
                </button>
        <p>I have an Account ? <a href="/login">click</a></p>
            </form>
            
        </div>



    );
}

export default Register;
