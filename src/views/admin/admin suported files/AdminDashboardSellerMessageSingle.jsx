import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboardSellerMessageSingle = ({user, time, message}) => {
    return (
        <ol className="relative border-1 border-slate-600 ml-4">
          <li className="mb-3 ml-6">
            <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-1 bg-[#8ae1db] rounded-full z-10 "> 
              <img
                className="w-full rounded-full h-full shadow-lg"
                src="http://localhost:3000/images/admin.jpeg"
                alt=""
              />
            </div>
            <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm ">
              <div className="flex justify-between items-center mb-2 ">
                <Link className="text-md font-normal">{user}</Link>
                <time className="mb-1 text-msm font-normal md:order-last sm:mb-0">
                  {time}
                </time>
              </div>
              <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border-slate-800">
               {message}
              </div>
            </div>
          </li>
        </ol>
    );
};

export default AdminDashboardSellerMessageSingle;