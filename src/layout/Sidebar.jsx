import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [allNav, setAllNave] = useState([])
    useEffect(() =>{
        
    })

    return (
        <div>
            <div>

            </div>
            
            <div className={`w-[260px] fixed bg-[#39a290] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all `}>
                <div className="h-[70px] flex justify-center items-center">
                <Link to='/' className='w-[180px] h-[30px] '>
                    <img className='w-full h-full' src="http://localhost:3000/images/logo2.png" alt="" />
                </Link>
                </div>

                <div className="px-[16px]">

                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;