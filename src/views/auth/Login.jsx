import React, { useEffect, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { get_user_info, messageClear, seller_login } from "../../store/Reducers/authReducer";
import toast from "react-hot-toast";

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {loader, successMessage,errorMessage} = useSelector(state => state.auth)

    const [state, setState] = useState({
      email: "",
      password: ""
    })
  
    const inputHandle = (e) =>{
      setState({
        ...state,
        [e.target.name] : e.target.value
      })
    }
  
    const submit = (e) =>{
      e.preventDefault()
          dispatch(seller_login (state))
          // console.log('done use eff');
    }

    useEffect(() => {
      if(successMessage){
        toast.success(successMessage)
        dispatch(get_user_info())
        navigate('/') 
      }
      if (errorMessage) {
        toast.error(errorMessage)
        dispatch(messageClear())
    }
  
    }, [successMessage,errorMessage])
  
  


  return (
    <div className="min-w-screen min-h-screen bg-[#8ae1db] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] ">
        <div className="bg-[#36b9c0] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium">
            Please Sign In your account
          </p>

          <form onSubmit={submit}>
            <div className="flex flex-col w-full mb-3 gap-1">
              <label htmlFor="email">Email</label>
              <input 
                onChange={inputHandle} value={state.email}
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
              onChange={inputHandle} value={state.password}
                className="px-3 py-2 outline-none border border-slate-700 rounded-md bg-transparent"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>


            <button disabled = {loader ? true : false} className="w-full bg-[#8ae1db] text-[#ffffff] hover:bg-[#6fd2cf] rounded-md px-5 py-3 transition-all duration-200 transform hover:scale-105">
              {
                loader ? <PropagateLoader color="#fff " cssOverride={overrideStyle}/> : 'Log In'
              }
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
