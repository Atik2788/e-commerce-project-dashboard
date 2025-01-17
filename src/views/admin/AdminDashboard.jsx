import React from 'react';
import AdminDashboardHeader from './AdminDashboardHeader';



const AdminDashboard = () => {
    return (
        <div className='px-2 md:px-7 py-5'>
          <AdminDashboardHeader/>

          <div className='w-full flex flex-wrap mt-7'>
            <div className="w-full lg:w-7/12 lg:pr-3 ">
              <div className='w-full bg-[#39a290] p-4 rounded-md '>

              </div>
            </div>
          </div>


        </div>
    );
};

export default AdminDashboard;