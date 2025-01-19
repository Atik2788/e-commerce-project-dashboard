import React, { useState } from 'react';

const OrdersHeader = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [parPage, setParPage] = useState(5);

    return (

                <div className="flex justify-between items-center">
                    <select onChange={(e) => setParPage(parseInt(e.target.value))} className='px-4 py-2 hover:border-[#134d49] outline-none bg-[#39a290] border border-[#8ae1db]  rounded-md text-[#d0d2d6] '>
                        <option className='' value="5">5</option>
                        <option className='' value="10">10</option>
                        <option className='' value="20">20</option>
                    </select>
                    <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]' type="text" placeholder='search' />
                </div>

    );
};

export default OrdersHeader;