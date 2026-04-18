import React, { useState } from 'react'
import './RegisterPage.css'
import axios from 'axios'
import { RegisterApi } from '../../assets/Api'
function RegisterPage() {
  const Roles=[
    {
      title:''
    }
  ]
  const [showPassword, setShowPassword] = useState(false)
  const [formdata, setFormdata] = useState({
    username: '',
    email: '',
    password: '',
    // role: 1,
    blocked: false
  })

  const HandleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post(
        RegisterApi,
        formdata
      )
      console.log(response);
      setFormdata({
        username: '',
        email: '',
        password: '',
        // role: 1,
        blocked: false
      })
    } catch (error) {
      console.log(error.response?.data);

    }

  }

  const HandleChange = (event) => {
    setFormdata(prev => {
      return { ...prev, [event.target.name]: event.target.value }
    })
  }

  return (
    <div className='RegisterPage'>
      <h4><i class="bi bi-mortarboard"></i>Learn<span>Hub</span></h4>
      <p>Create your account and start learning today.</p>
      <div className="register-card ">
        <form onSubmit={HandleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="form-label custom-label">Full Name</label>
            <input
              type="text"
              name='username'
              value={formdata.username}
              className="form-control custom-input"
              placeholder="John Doe"
              onChange={HandleChange}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="form-label custom-label">Email</label>
            <input
              type="email"
              name='email'
              value={formdata.email}
              className="form-control custom-input"
              placeholder="hg@g.uh"
              onChange={HandleChange}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label custom-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                value={formdata.password}
                className="form-control custom-input border-end-0"
                placeholder="•••"
                onChange={HandleChange}
              />
              <span
                className="input-group-text password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
              </span>
            </div>
          </div>

          {/* Role */}
          <div className="mb-4">
            <label className="form-label custom-label">I want to</label>
            <select className="form-select custom-input custom-select">
              <option onClick={() => {
                setFormdata(prev => {
                  console.log('Student');

                  console.log( { ...prev, "role": 2, "blocked": false });
                  
                  return { ...prev, "role": 2, "blocked": false }
                })
              }}>Learn (Student)</option>
              <option onClick={() => {
                setFormdata(prev => {
                  console.log('Teach');
                  
                  console.log({ ...prev, "role": 1, "blocked": true });
                  
                  return { ...prev, "role": 1, "blocked": true }
                })
              }}>Teach (Instructor)</option>
            </select>
          </div>

          {/* Button */}
          <button onSubmit={HandleSubmit} className="btn register-btn w-100">
            Create Account
          </button>

          {/* Sign In */}
          <p className="signin-text text-center mt-4 mb-0">
            Already have an account?{" "}
            <a href="/login" className="signin-link">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage