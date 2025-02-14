import React, { useEffect, useState } from "react";
import { FaImages } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { headers, rows } from "../../api/headersAndRows";
import Table from "../commonPages/Table";
import SetParPage from "../commonPages/SetParPage";
import Pagination from "../commonPages/Pagination";
import { PropagateLoader } from 'react-spinners';
import { overrideStyle } from './../../utils/utils';
import { categoryAdd, messageClear } from "../../store/Reducers/categoryReducer";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { NavigationType } from "react-router-dom";

const Category = () => {

  const dispatch = useDispatch();
  const {loader, successMessage, errorMessage} = useSelector(state =>state.category)

  // const categoryState = useSelector(state => state.category);
  // console.log(categoryState); 

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);
  const [imageShow, setImage] = useState('')

  const [state, setState] = useState({
    name: '',
    image: ''
  })

  const imageHandle = (e) =>{ 
    let files = e.target.files;
    if(files.length > 0){
      setImage(URL.createObjectURL(files[0]))
      setState({
        ...state,
        image: files[0]
      })
    } 
  }

  const add_category = (e) =>{
    e.preventDefault()
    // console.log(state);
    dispatch(categoryAdd(state))
  }

  useEffect(() => {
    if(successMessage){
      toast.success(successMessage)
      dispatch(messageClear())
      setState({
        name: '',
        image: ''
      })
      setImage('')

    }
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(messageClear())
  }

  }, [successMessage,errorMessage])

   

  
  return (
    <div className="px-2 lg:px-7 pt-5">

      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-[#39a290] rounded-md">
        <h1 className="text-[#d0d2d6] font-semibold text-lg">Category</h1>
        <button
          onClick={() => setShow(true)}
          className="bg-[#134d49] hover:shadow-[#8ae1db] hover:shadow-md text-white rounded-sm text-sm px-7 py-2 cursor-pointer"
        >
          Add
        </button>
      </div>
      

      <div className="flex flex-wrap w-full">
        {/* left side div */}
        <div className="w-full lg:w-7/12">
          <div className="w-full p-4 bg-[#39a290] rounded-md">
            <SetParPage setParPage={setParPage} searchValue={searchValue} setSearchValue={setSearchValue}/>

            <Table headers={headers} rows={rows} iconbgColor="bg-yellow-500 hover:bg-yellow-300" icon2bgColor="bg-red-500 hover:bg-red-300"/>

            <div className="w-full flex justify-end mt-4 bottom-4 right-4">
              <Pagination
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalItem={50}
                parPage={parPage}
                showItem={3}
              />
            </div>
          </div>
        </div>

        {/* right side div */}
        <div
          className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-50 top-0 transition-all duration-500`}
        >
          <div className="w-full pl-5">
            <div className="bg-[#39a290] rounded-md h-screen lg:h-auto px-3 py-2 text-[#d0d2d6]">

              <div className="flex justify-between items-center mb-4">
                <h1 className="text-[#d0d2d6] font-semibold text-xl mb-4 w-full text-center">
                  Add Category
                </h1>
 
                <div onClick={() => setShow(false)} className="pb-2">
                  <div className="lg:hidden flex justify-center items-center h-6 w-6 bg-[#134d49] rounded-full hover:text-red-500 hover:shadow-[#8ae1db] hover:shadow-md">
                    <IoCloseSharp className=""/>
                  </div>
                </div>
              </div>


              <form onSubmit={add_category}>
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="">Category Name</label>
                  <input
                  value={state.name}
                  onChange={(e) => setState({...state, name: e.target.value})}
                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#f9fbfb] rounded-md text-[#39a290]"
                    type="text"
                    id="name"
                    name="category_name"
                    placeholder="Category Name"
                  />
                </div>

                <div>
                  <label
                    className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-[#8ae1db] w-full border-white"
                    htmlFor="image"
                  >
                    {
                      imageShow ? <img className="w-full h-full" src={imageShow} alt=""/> : <>
                      <span>
                        <FaImages />
                      </span>
                      <span>Select Image</span>
                      </>
                    }
                    
                  </label>
                  <input
                    onChange={imageHandle}
                    type="file"
                    name="file"
                    className="hidden"
                    id="image"
                  />

                  <div className="mt-2">
                    <button sisabled={loader ? true : false} className="bg-[#277367] w-full hover:shadow-[#71b5b0] hover:shadow-md text-white rounded-md py-2 my-2">
                      {
                        loader ? <PropagateLoader color="#fff" cssOverride={overrideStyle}/> : 'Add Category'
                      }
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
