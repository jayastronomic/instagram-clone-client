import React from "react";
import "../styles/Signup.css";
import apple from "../assets/apple.png";
import google from "../assets/google.png";

import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex h-screen ig-bg justify-center pt-16">
      <section>
        <div className="flex flex-col items-center pt-6 pb-6 px-9 bg-white border">
          <form className="flex flex-col bg-white w-72">
            <h1 className="flex justify-center billabong text-6xl text-gray-800">
              Instagram
            </h1>
            <p className="items-center font-semibold text-gray-400 text-center pt-4">
              Sign up to see photos and videos from your friends.
            </p>

            <div className="pt-4 flex flex-col">
              <button className="bg-blue-400 rounded text-white text-sm font-semibold">
                <i className="fab fa-facebook-square text-lg" />
                &nbsp;&nbsp;Log in with Facebook
              </button>
            </div>

            <div className="flex pt-1">
              <span className="w-full border-b border-gray-200"></span>
              <span className="text-sm font-semibold text-gray-400 px-4 transform translate-y-2.5">
                OR
              </span>
              <span className="w-full border-b border-gray-200"></span>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col pt-6 space-y-1.5">
                <input
                  className="ig-bg text-xs px-2 py-2.5 border rounded focus:outline-none focus:border-gray-400"
                  placeholder="Mobile or email"
                ></input>
                <input
                  className="ig-bg text-xs px-2 py-2.5 border rounded focus:outline-none focus:border-gray-400"
                  placeholder="Full Name"
                ></input>
                <input
                  className="ig-bg text-xs px-2 py-2.5 border rounded focus:outline-none focus:border-gray-400"
                  placeholder="Username"
                ></input>
                <input
                  className="ig-bg text-xs px-2 py-2.5 border rounded focus:outline-none focus:border-gray-400"
                  placeholder="Password"
                ></input>
              </div>

              <div className="flex flex-col pt-4">
                <button
                  type="submit"
                  className="text-white font-semibold bg-blue-200 rounded py-1 text-sm"
                >
                  Sign up
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center pt-4">
              By signing up, you agree to our Terms , Data Policy and Cookies
              Policy .
            </p>
          </form>
        </div>

        <div className="pt-3">
          <div className="flex justify-center bg-white border p-6">
            <p className="text-sm ">
              Have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Log in
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

export default Signup;
