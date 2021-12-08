import React from "react";
import "../styles/Login.css";
import apple from "../assets/apple.png";
import google from "../assets/google.png";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen ig-bg justify-center pt-16">
      <section>
        <div className="flex flex-col items-center pt-6 pb-6 px-9 bg-white border">
          <form className="flex flex-col bg-white w-72">
            <h1 className="flex justify-center billabong text-6xl">
              Instagram
            </h1>
            <div className="flex flex-col">
              <div className="flex flex-col pt-10 space-y-1.5">
                <input
                  className="ig-bg text-xs px-2 py-2.5 border rounded"
                  placeholder="Phone number, username, or email"
                ></input>
                <input
                  className="ig-bg text-xs px-2 py-2.5 border rounded"
                  placeholder="Password"
                ></input>
              </div>

              <div className="flex flex-col pt-4">
                <button
                  onClick={() => goToHomePage()}
                  type="submit"
                  className="text-white font-semibold bg-blue-200 rounded py-1 text-sm"
                >
                  Log In
                </button>
              </div>

              <div className="flex pt-1">
                <span className="w-full border-b border-gray-200 pt-4 "></span>
                <span className="text-sm font-semibold text-gray-400 px-4 transform translate-y-2.5">
                  OR
                </span>
                <span className="w-full border-b border-gray-200 pt-4 "></span>
              </div>
            </div>
            <p className="flex items-center justify-center text-sm fb-blue font-semibold pt-8">
              <i className="fab fa-facebook-square text-lg" />
              &nbsp;&nbsp;Log in with Facebook
            </p>
            <p className="flex justify-center text-xs fb-blue pt-4">
              Forgot password?
            </p>
          </form>
        </div>

        <div className="pt-3">
          <div className="flex justify-center bg-white border p-6">
            <p className="text-sm ">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <p className="flex justify-center text-sm pt-6">Get the app.</p>
        <div className="flex justify-center pt-6 space-x-2">
          <img alt="" className="w-32" src={apple} />
          <img alt="" className="w-32" src={google} />
        </div>
      </section>
    </div>
  );
};

export default Login;
