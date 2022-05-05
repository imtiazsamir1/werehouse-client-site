import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../img/google.png";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error:{error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <h5>or</h5>
      {errorElement}
      <div>
        <button onClick={() => signInWithGoogle()} className="btn btn-primary">
          <img src={google} alt="" /> Google Sign In
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
