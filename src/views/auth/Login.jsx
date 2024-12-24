import React from "react";

const Login = () => {
  return (
    <div className="min-w-screen min-h-screen bg-[#8ae1db] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#36c1c8] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium">
            Please register your account
          </p>

          <form>
            <div className="flex flex-col w-full gap-1 mb-3 ">
                 <label htmlFor="name">Name</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
