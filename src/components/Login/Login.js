import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div class="login-page">
            <h1 class="login-head">Login</h1>
            <div class="login-container">

                <div class="student-login">
                    <h2 class="login-main">Student Login</h2>
                    <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3 form-check">
                          <a href="/">Forgot Password</a>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>

                </div>
                <div class="teacher-login">
                    <h2 class="login-main">Teacher Login</h2>

                    <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3 form-check">
                          <a href="/">Forgot password</a>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>

                </div>

            </div>

        </div>
  );
}

export default Login