import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegImages } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { get_category, messageClear } from '../../store/Reducers/categoryReducer';
import { add_product } from './../../store/Reducers/productReducer';
import { PropagateLoader } from 'react-spinners';
import { overrideStyle } from "./../../utils/utils";
import toast from 'react-hot-toast';

const AddProduct = () => {

    const dispatch = useDispatch();
    const {categorys} = useSelector(state => state.category)
      const {loader, successMessage, errorMessage} = useSelector((state) => state.product);

    useEffect(() =>{
        dispatch(get_category({
            page: '',
            searchValue: '',
            parPage: ''
        }))
    }, [dispatch])


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

    const [cateShow, setCateShow] = useState(false);
    const [category, setCategory] = useState("");
    const [allCategory, setAllCategory]= useState([]);
    const [searchValue, setSearchValue]= useState('');
    // console.log(searchValue);

    const categorySearch = (e) =>{
        const value = e.target.value
        setSearchValue(value)
        if (value) {
            let srcValue = allCategory.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
            setAllCategory(srcValue)
        }
        else{
            setAllCategory(categorys)
        }
    }

    const [images, setImages] = useState([]);
    const [imageShow, setImageShow] = useState([])
    const imageHandle = (e) =>{
        const files = e.target.files;
        const length = files.length;

        if(length > 0){
            setImages([...images, ...files])

            let imgUrl = []
            for (let i = 0; i < length; i++){
                imgUrl.push({url: URL.createObjectURL(files[i])})
            }
            setImageShow([...imageShow, ...imgUrl])
        }
    }
    // console.log('images', images);
    // console.log('imageShow', imageShow);

    const changeImage = (img, index) =>{
        if(img){
            let tempImages = images;
            let tempUrl = imageShow;

            tempImages[index] = img;
            tempUrl[index] = {url: URL.createObjectURL(img)}

            
            setImageShow([...tempUrl])
            setImages([...tempImages])
            }
        }

        const removeImage = (i) =>{
            const filterImage = images.filter((img, index) => index !== i)
            const filterImageUrl = imageShow.filter((img, index) => index !== i)

            setImages(filterImage);
            setImageShow(filterImageUrl)

        } 

        const add = (e) =>{
            e.preventDefault()

            const formData = new FormData()
            formData.append('name', state.name)
            formData.append('description', state.description)
            formData.append('price', state.price)
            formData.append('brand', state.brand)
            formData.append('stock', state.stock)
            formData.append('discount', state.discount)
            formData.append('shopName', 'EasyShop')
            formData.append('category', category)

            for(let i = 0; i < images.length; i++){
                formData.append('images', images[i])
            }

            //    console.log(formData);
            dispatch(add_product(formData))
        }

        
    useEffect(() =>{
    // get unique categories,           
    const uniqueCategories = [...new Map(categorys.map(c => [c.name.toLowerCase(), c])).values()];
    setAllCategory(uniqueCategories);

    },[categorys])



    useEffect(() => {
        if (successMessage) {
          toast.success(successMessage);
          dispatch(messageClear());
          setState({
            name: "",
            description: "",
            discount: "",
            price: "",
            brand: "",
            stock: ""
          });
          setImageShow([]);
          setImages([])
          setCategory('');
        }
        if (errorMessage) {
          toast.error(errorMessage);
          dispatch(messageClear());
        }
      }, [successMessage, errorMessage]);

 


    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className="w-full p-4 bg-[#39a290] rounded-md">

                {/* page hedder start*/}
                <div className="flex justify-between items-center pb-4">
                    <h1 className='text-[#d0d2d6] text-xl font-semibold'>Add Product                        
                    </h1>
                    <Link to='/seller/dashboard/product' className='bg-[#277367] rounded-sm px-7 py-2 my-2 hover:shadow-[#71b5b0] hover:shadow-lg text-white'>All Product</Link>
                </div>
                {/* page hedder end*/}

                {/* product add form start */}
                <div className="">
                    <form onSubmit={add} className=''>

                        {/* first product row start */}
                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
                            {/* product name section */}
                            <div className="flex flex-col w-full gap-1 ">
                                <label htmlFor="name">Product Name</label>
                                <input 
                                onChange={inputHandle} 
                                value={state.name} type="text" name='name' id='name' placeholder='Product Name'
                                className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]'
                                />
                            </div>
                            {/* brand section */}
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

                            {/* Category section start*/}
                            <div className="flex flex-col w-full gap-1 relative">
                                <label htmlFor="category">Category</label>
                                <input
                                readOnly onClick={() => setCateShow(!cateShow)} 
                                onChange={inputHandle} 
                                value={category} type="text" name='category' id='category' placeholder='-- select category--'
                                className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]'
                                />
                                <div className={`absolute top-[101%] bg-[#277367] w-full transition-all ${cateShow ? "scale-100" : "scale-0"}`}>
                                    <div className="w-full px-4 py-2 fixed">
                                        <input 
                                        value={searchValue}
                                        onChange={categorySearch}
                                        className='px-3 py-1 w-full focus:border-[#8ae1db] outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden' type="text" placeholder='Search' />
                                    </div>
                                    <div className="pt-14"></div>
                                    <div className="flex justify-start items-start flex-col max-h-[200px] overflow-auto">
                                        {
                                            allCategory.map((c, i) => <span 
                                            key={i}
                                            className={`px-4 py-2 w-full text-[#d0d2d6] cursor-pointer hover:bg-[#8ae1db] hover:text-black ${category === c.name && 'bg-[#39a290]'}`}
                                            onClick={() => {
                                                setCateShow(false)
                                                setCategory(c.name)
                                                setSearchValue("")
                                                setAllCategory(categorys)
                                            }}>{c.name}</span>)
                                        }
                                    </div>

                                </div>

                            </div>                            
                            {/* Category section end*/}

                            {/* stock section start*/}
                            <div className="flex flex-col w-full gap-1 ">
                                <label htmlFor="stock">Product Stock</label>
                                <input 
                                onChange={inputHandle} 
                                value={state.stock} type="text" name='stock' id='stock' placeholder='Stock'
                                className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]'
                                />
                            </div> 
                            {/* stock section end*/}                           
                        </div>
                         {/* second product row end */}

                         {/* 3rd product row start */}
                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">

                            {/* price name section */}
                            <div className="flex flex-col w-full gap-1 ">
                                <label htmlFor="price">Price</label>
                                <input 
                                onChange={inputHandle} 
                                value={state.price} 
                                type="number" 
                                name='price' 
                                id='price' 
                                placeholder='Price'
                                className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]'
                                />
                            </div>

                            {/* discount section */}
                            <div className="flex flex-col w-full gap-1 ">
                                <label htmlFor="discount">Discount</label>
                                <input 
                                onChange={inputHandle} 
                                value={state.discount} 
                                type="number" 
                                name='discount' 
                                id='discount' 
                                placeholder='Discount by %'
                                className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]'
                                />
                            </div>

                            

                        </div>
                         {/* 3rd product row end */}


                         {/* description product row start */}
                        <div className="flex flex-col mb-5 md:flex-row gap-4 w-full text-[#d0d2d6]">
                            {/* discount section */}
                            <div className="flex flex-col w-full gap-1 ">
                                <label htmlFor="description">Description</label>
                                <textarea 
                                onChange={inputHandle} 
                                value={state.description} 
                                type="text" 
                                name='description' 
                                id='description' 
                                cols={10}
                                rows={4}
                                placeholder='Description'
                                className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]'
                                ></textarea>
                            </div>
                        </div>
                        {/* description product row end */}


                        {/*product img row start */}
                        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-[#d0d2d6] mb-4" >
                            
                            {
                                imageShow.map((img, i) =>
                                <div key={i} className='h-48 relative'>
                                    <label htmlFor={i}>
                                        <img className='h-full w-full rounded-sm' src={img.url} alt="" />
                                    </label>
                                    <input onChange={(e) => changeImage(e.target.files[0], i)} type="file" id={i} className='hidden'  />
                                    <span onClick={()=>removeImage(i)} className="p-2 z-10 cursor-pointer hover:shadow-lg bg-[#39a29096] hover:bg-[#39a290]  hover:text-red-500 text-white absolute top-1 right-1 rounded-full" ><MdClose /></span>
                                </div>)
                            }

                            <label className='flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-[#8ae1db] w-full text-[#d0d2d6]' htmlFor="image"> 
                                <span ><FaRegImages className='w-5 h-5'/></span>
                                <span>Select Image</span>
                            </label>
                            
                            <input className='hidden' onChange={imageHandle} multiple type="file" id='image' />
                        </div>
                        {/*product img row end */}

                        <div className='flex'>
                        <button
                      sisabled={loader ? true : false}
                      className="bg-[#277367] w-[250px] hover:shadow-[#71b5b0] hover:shadow-md text-white rounded-md py-2 my-2"
                    >
                      {loader ? (
                        <PropagateLoader
                          color="#fff"
                          cssOverride={overrideStyle}
                        />
                      ) : (
                        "Add Product"
                      )}
                    </button>
                        </div>


                    </form>
                </div>
                {/* product add form end */}
                

            </div>
        </div>
    );
};

export default AddProduct;