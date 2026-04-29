import axios from "axios";
import React, { useState } from "react";
import { USERAPI } from "../../assets/assets";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
        const response = await axios.post(USERAPI,form)
        console.log(response.data);
        localStorage.setItem('token',response?.data?.token)
        }catch(error){
            console.log(error.response.data || error.message);
        }
        // API call here
    };

    return (<form onSubmit={handleSubmit} className="w-80 mx-auto mt-10 space-y-4"> <h2 className="text-xl font-bold">Login</h2>

        
        <input
            type="email"
            placeholder="Email"
                    className="w-full border p-2 rounded-[5px]"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
            type="password"
            placeholder="Password"
                    className="w-full border p-2 rounded-[5px]"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-blue-500 text-white px-4 py-2 w-full rounded-[5px]">
            Login
        </button>
        <p>Create New Account ? <a href="/register">click</a></p>
    </form>


);
}

export default Login
