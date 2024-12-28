import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {

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
      console.log(state);
    }
  


  return (
    <div className="min-w-screen min-h-screen bg-[#8ae1db] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] ">
        <div className="bg-[#36b9c0] p-4 rounded-md">
          
          <div>
            <div>
                <img src="http://localhost:3000/images/logo.png " alt="image" />
            </div>
          </div>

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

            <button className="w-full bg-slate-600 hover:shadow-slate-700/50 hover:shadow-lg rounded-md px-7 py-2 mb-3">
            Log In
            </button>


          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin; 
