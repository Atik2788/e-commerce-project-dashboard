import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, get_user_info, messageClear } from "../../store/Reducers/authReducer";
import {PropagateLoader} from "react-spinners"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { overrideStyle } from "../../utils/utils";

const AdminLogin = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {loader, errorMessage, successMessage} = useSelector(state=>state.auth)

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
    // console.log(state);
  };



    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if(successMessage){
          toast.success(successMessage)
          dispatch(get_user_info())
          navigate('/')
        }
    },[errorMessage, successMessage])

  return (
    <div className="min-w-screen min-h-screen bg-[#8ae1db] flex justify-center items-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="bg-gradient-to-r from-[#36b9c0] to-[#8ae1db] w-72 h-72 rounded-full opacity-30 animate-pulse absolute top-10 left-10"></div>
        <div className="bg-gradient-to-r from-[#8ae1db] to-[#36b9c0] w-96 h-96 rounded-full opacity-20 animate-pulse absolute bottom-20 right-20"></div>
        <div className="bg-gradient-to-r from-[#8ae1db] to-[#36b9c0] w-52 h-52 rounded-full opacity-20 animate-pulse absolute -top-28 -right-5"></div>
      </div>
      
    

      <div className="relative w-[400px] text-[#ffffff] z-10">
        <div className="bg-[#36b9c0] p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
          <div className="flex justify-center items-center pb-6">
            <div className="w-[180px] h-[60px]">
              <img
                className="w-full h-full object-contain"
                src="http://localhost:3000/images/logo.png"
                alt="logo"
              />
            </div>
          </div>

          <form onSubmit={submit}>
            <div className="flex flex-col w-full mb-5 gap-2">
              <label htmlFor="email" className="font-semibold text-sm">
                Email
              </label>
              <input
                onChange={inputHandle}
                value={state.email}
                className="px-4 py-3 outline-none border border-slate-300 rounded-md bg-transparent transition-all focus:border-[#8ae1db] focus:ring-2 focus:ring-[#8ae1db] text-black"
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
                required
              />
            </div>

            <div className="flex flex-col w-full mb-5 gap-2">
              <label htmlFor="password" className="font-semibold text-sm">
                Password
              </label>
              <input
                onChange={inputHandle}
                value={state.password}
                className="px-4 py-3 outline-none border border-slate-300 rounded-md bg-transparent transition-all focus:border-[#8ae1db] focus:ring-2 focus:ring-[#8ae1db] text-black"
                type="password"
                name="password"
                placeholder="Enter your password"
                id="password"
                required
              />
            </div>

            <button disabled = {loader ? true : false} className="w-full bg-[#8ae1db] text-[#ffffff] hover:bg-[#6fd2cf] rounded-md px-5 py-3 transition-all duration-200 transform hover:scale-105">
              {
                loader ? <PropagateLoader color="#fff " cssOverride={overrideStyle}/> : 'Log In'
              }
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
