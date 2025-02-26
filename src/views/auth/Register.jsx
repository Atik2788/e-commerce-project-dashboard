import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";
import {messageClear, seller_register} from '../../store/Reducers/authReducer'
import toast from "react-hot-toast";

const Register = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const {loader, successMessage,errorMessage} = useSelector(state => state.auth)

  const [state, setState] = useState({
    name: "",
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
    dispatch(seller_register(state))
    // console.log(state);
  }

  useEffect(() => {
    if(successMessage){
      toast.success(successMessage)
      dispatch(messageClear())
      navigate('/')  
    } 
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(messageClear())
  }

  }, [successMessage,errorMessage, dispatch, navigate])




  return (
    <div className="min-w-screen min-h-screen bg-[#8ae1db] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#36b9c0] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium">
            Please register your account
          </p>

          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3 ">
              <label htmlFor="name">Name</label>
              <input 
                onChange={inputHandle} value={state.name}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3 ">
              <label htmlFor="email">Email</label>
              <input
              onChange={inputHandle} value={state.email}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3 ">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandle} value={state.password}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>

            <div className="flex items-center w-full gap-3 mb-3 ">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-transparent rounded border-gray300 focus:ring-blue-500 "
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">
                I agree to privacy policy & trems
              </label>
            </div>

            <button disabled = {loader ? true : false} className="w-full bg-[#8ae1db] text-[#ffffff] hover:bg-[#6fd2cf] rounded-md px-5 py-3 transition-all duration-200 transform hover:scale-105">
              {
                loader ? <PropagateLoader color="#fff " cssOverride={overrideStyle}/> : 'Sign Up'
              }
            </button>

            <div className="flex items-center mb-3 gap-3 justify-center">
                <p>Already have an account? <Link to="/login" className="font-bold text-slate-600">Sign In</Link> </p>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
                <div className="w-[45%] h-[1px] bg-slate-700"></div>
                <div className="w-[10%] flex justify-center items-center">
                    <span className="pb-1 ">Or</span>
                </div>
                <div className="w-[45%] h-[1px] bg-slate-700"></div>
            </div>

            <div className="flex justify-center items-center gap-3">
                <div className="w-[135px] h-[35px] flex justify-center items-center rounded-md bg-orange-600 shadow-lg hover:shadow-orange-700/50 cursor-pointer overflow-hidden">
                    <span><FaGoogle /></span>
                </div>

                <div className="w-[135px] h-[35px] flex justify-center items-center rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 cursor-pointer overflow-hidden">
                    <FaFacebook/>
                </div>
            </div>


          </form>
        </div>
      </div> 
    </div>
  );
};

export default Register;
