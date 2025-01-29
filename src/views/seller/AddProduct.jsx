import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {

    const [state, setState] = useState({
        name: "",
        description: "",
        discount: "",
        price: "",
        brand: "",
        stock: ""

    })

    const inputHandle = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }


    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className="w-full p-4 bg-[#39a290] rounded-md">

                {/* page hedder start*/}
                <div className="flex justify-between items-center pb-4">
                    <h1 className='text-[#d0d2d6] text-xl font-semibold'>Add Product                        
                    </h1>
                    <Link className='bg-[#277367] rounded-sm px-7 py-2 my-2 hover:shadow-[#71b5b0] hover:shadow-lg text-white'>All Product</Link>
                </div>
                {/* page hedder end*/}

                {/* product add form start */}
                <div className="">
                    <form className=''>

                        {/* first product row start */}
                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
                            {/* first product name in a row */}
                            <div className="flex flex-col w-full gap-1 ">
                                <label htmlFor="name">Product Name</label>
                                <input 
                                onChange={inputHandle} 
                                value={state.name} type="text" name='name' id='name' placeholder='Product Name'
                                className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]'
                                />
                            </div>
                            {/* second product name in a row */}
                            <div className="flex flex-col w-full gap-1 ">
                                <label htmlFor="brand">Product Brand</label>
                                <input 
                                onChange={inputHandle} 
                                value={state.brand} type="text" name='brand' id='brand' placeholder='Brand Name'
                                className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]'
                                />
                            </div>

                        </div>
                         {/* first product row end */}

                        {/* secont product row start */}
                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
                            {/* first product name in a row */}
                            <div className="flex flex-col w-full gap-1 relative">
                                <label htmlFor="category">Category</label>
                                <input 
                                onChange={inputHandle} 
                                value={state.name} type="text" name='name' id='name' placeholder='Product Name'
                                className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]'
                                />
                                <div className={`absolute top-[101%] bg-slate-800 w-full transition-all ${cateShow ? "scale-100" : "scale-0"}`}>
                                    <div className="w-full px-4 py-2 fixed">
                                        <input className='px-3 py-1 focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden' type="text" placeholder='Search' />
                                    </div>
                                    <div className="pt-14"></div>
                                    <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scroll">
                                        {
                                            allCategory.map((c, i) => <span onClick={() => {
                                                setCateShow(false)
                                                setCategory(c.name)
                                                TbSettingsSearchValue("")
                                                setAllCategory(category)
                                            }}>{c.name}</span>)
                                        }
                                    </div>

                                </div>

                            </div>

                            {/* second product name in a row */}
                            <div className="flex flex-col w-full gap-1 ">
                                <label htmlFor="stock">Product Stock</label>
                                <input 
                                onChange={inputHandle} 
                                value={state.stock} type="text" name='stock' id='stock' placeholder='Stock'
                                className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]'
                                />
                            </div>                            
                         {/* second product row end */}

                        </div>
                    </form>
                </div>
                {/* product add form end */}
                

            </div>
        </div>
    );
};

export default AddProduct;