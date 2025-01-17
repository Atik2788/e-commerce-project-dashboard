import React from 'react';
import AdminDashboardHeader from './AdminDashboardHeader';
import AdminDashboardChart from './AdminDashboardChart';

const AdminDashboard = () => {


    return (
        <div className='px-2 md:px-7 py-5'>
          <AdminDashboardHeader/>
          <AdminDashboardChart/>



        </div>
    );
};

export default AdminDashboard;