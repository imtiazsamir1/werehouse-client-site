import React from "react";

import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../Login/GoogleLogin/GoogleLogin";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(event.target.email.value);
    // const agree = event.target.terms.checked;
  };
  return (
    <div>
      <div className="register-form">
        <h2 style={{ textAlign: "center" }}>Please Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" name="name" id="" placeholder="Your Name" />

          <input
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />
          <input type="checkbox" name="terms" id="terms" />

          <label className={`ps-2  "" : "text-danger"}`} htmlFor="terms">
            Accept frruis warehouse Terms and Conditions
          </label>
          <input
            className="w-50 mx-auto btn btn-primary mt-2"
            type="submit"
            value="Register"
          />
        </form>
        <p>
          Already have an account?
          <Link
            to="/login"
            className="text-primary pe-auto text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
      </div>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Register;
