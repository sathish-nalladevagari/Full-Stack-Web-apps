import "./Register.css";
import React from "react";
import { useState } from "react";



const Desktop1 = () => {
  return (
    <div className="desktop-1" id="register-container">
      <form className="frame-form" action="Submit" method="post">
        <div className="username-div">Username:</div>
        <div className="email-div">Email:</div>
        <div className="password-div">Password:</div>
        <div className="studentteacher-div">Student/Teacher:</div>
        <div className="registration-form-div">Registration Form</div>
        <input
          className="rectangle-input"
          type="text"
          placeholder="Username"
          required
        />
        <input
          className="rectangle-input1"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="rectangle-input2"
          type="password"
          placeholder="Password"
          minLength={8}
          required
        />
        <select className="rectangle-select" required>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>
        <button className="rectangle-button" />
        <b className="register-b">Register</b>
      </form>
    </div>
  );
};

export default Desktop1;
