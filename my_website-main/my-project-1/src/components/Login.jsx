import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../assets/images/Animation - 1729961104772.json";

const Login = () => {
  return (
    <div className="login">
      <div className="login-cont">
        <div className="login-gif">
          <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: 700, height: 700, marginLeft: 100 }}
          />
        </div>
        <div className="login-form-con"></div>
      </div>
    </div>
  );
};

export default Login;
