import React, { useState } from 'react'
import './LoginPage.css'
import { LoginApi, MeApi } from '../../assets/Api'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLMS } from '../../Context/LmsContext'
function LoginPage() {
  const {setUser}=useLMS()
  const [showPassword, setShowPassword] = useState()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const Navigate = useNavigate()
  const HandleSubmit = async (event) => {
    event.preventDefault()
    try {
      let response = {}
      response = await axios.post(
        LoginApi,
        {
          identifier: username.trim(),
          password: password.trim()
        }
      )
      // POPULATE RESPONSE 
      const token=response.data.jwt
      console.log(token)
      localStorage.setItem('token', token)
      // response = await axios.get(
      //   MeApi,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`
      //     }
      //   }
      // );

      // console.log(tworesponse.data);
      console.log(response.data);
      setUser(response.data.user)
      setPassword('')
      setUsername('')
      Navigate('/home')
    } catch (error) {
      console.log(error.response?.data || error.message);

    }

  }


  return (
    <div className='LoginPage'>
      <h4><i class="bi bi-mortarboard"></i>Learn<span>Hub</span></h4>
      <p>Create your account and start learning today.</p>
      <div className="login-card ">
        <form onSubmit={HandleSubmit}>

          {/* Email */}
          <div className="mb-4">
            <label className="form-label custom-label">Email</label>
            <input
              type="email"
              name='username'
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              value={username}
              className="form-control custom-input"
              placeholder="hg@g.uh"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label custom-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                value={password}
                className="form-control custom-input border-end-0"
                placeholder="•••"
              />
              <span
                className="input-group-text password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
              </span>
            </div>
          </div>


          {/* Button */}
          <button type="submit" className="btn login-btn w-100" onSubmit={HandleSubmit}>
            Sign In
          </button>


          {/* Sign In */}
          <p className="signin-text text-center mt-4 mb-0">
            Don't have an account? {" "}
            <a href="/register" className="signin-link">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage