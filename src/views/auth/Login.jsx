import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-w-screen min-h-screen bg-[#8ae1db] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] ">
        <div className="bg-[#36b9c0] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium">
            Please Sign In your account
          </p>

          <form>
            <div className="flex flex-col w-full mb-3 gap-1">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 rounded-md bg-transparent"
                type="email"
                name="email"
                placeholder="email"
                id="email"
                required
              />
            </div>

            <div className="flex flex-col w-full mb-3 gap-1">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 rounded-lg bg-transparent"
                type="password"
                placeholder="password"
                id="password"
                required
              />
            </div>


            <button className="w-full bg-slate-600 hover:shadow-slate-700/50 hover:shadow-lg rounded-md px-7 py-2 mb-3">
            Log In
            </button>

            <div className="flex items-center justify-center mb-3">
              <p>Don't have and account? <Link to="/register" className="font-bold text-slate-600">Register</Link></p>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] h-[1px] bg-slate-700"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] h-[1px] bg-slate-700"></div>
            </div>

            <div className="w-full flex items-center justify-center gap-3">
              <div className="w-[135px] h-[35px] flex justify-center items-center rounded-md bg-orange-700 hover:shadow-orange-700/50 hover:shadow-lg">
                <FaGoogle/>
              </div>
              <div className="w-[135px] h-[35px] flex justify-center items-center rounded-md bg-blue-700 hover:shadow-blue-700/50 hover:shadow-lg">
                <FaFacebook/>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
