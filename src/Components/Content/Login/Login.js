import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
import LoginCover from './LoginCover.jpg';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			navigate("/profile");
		} else {
			alert('Please check your username and password');
		}
	}


  return (
    <div>
        <section className="LoginPage" style={{ backgroundColor: "#dde8ff" }}>
  <div >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{ borderRadius: "1rem" }}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                // src={process.env.PUBLIC_URL+"LoginCover.jpg"}
                src= {LoginCover}
                alt="login form"
                className="img-fluid"
                style={{ borderRadius: "1rem 0 0 1rem", paddingTop: "4rem" }}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={loginUser}>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i
                      className="fas fa-cubes fa-2x me-3"
                      style={{ color: "#ff6219" }}
                    />
                    <span className="h1 fw-bold mb-0">INED</span>
                  </div>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Sign into your account
                  </h5>
                  <div className="form-outline mb-4">
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="form2Example17"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form2Example17">
                      Email address
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      id="form2Example27"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form2Example27">
                      Password
                    </label>
                  </div>
                  <div className="pt-1 mb-4">
                    
                      {/* <a
                        href="/profile"
                        style={{ color: "white", textDecoration: "none" }}
                      > */}
                        <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                        Login</button>
                      {/* </a> */}
                    
                  </div>
                  <a className="small text-muted" href="#!">
                    Forgot password?
                  </a>
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?
                    <a href="/register" style={{ color: "#393f81" }}>
                      Register here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Login