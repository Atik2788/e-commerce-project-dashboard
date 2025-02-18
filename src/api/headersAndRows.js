import { FaEdit, FaRegTrashAlt, FaRegEye } from "react-icons/fa";

export const headers = ["No", "Image", "Name", "Action"];
export const headers2 = ["No", "Image", "Name", "Email", "Payment Status", "Status", "Action"];
export const headersOrders = ["Order Id", "Price", "Payment Status", "Order Status", "Action"];
export const headersSellerProducts = ["No", "Image", "Name", "Category", "Barand", "Price", "Discount", "Stock", "Action"];

export  const rows = [
      {
        no: 1,
        image: "http://localhost:3000/images/category/1.jpg", // Placeholder image
        name: "Shoo",
        icon1: <FaEdit className="text-black" />,
        viewIcon: <FaRegTrashAlt className="text-black" />
      },
      {
        no: 2,
        image: "http://localhost:3000/images/category/2.jpg", // Placeholder image
        name: "Watch",
        icon1: <FaEdit className="text-black" />,
        icon2: <FaRegTrashAlt className="text-black" />
      },
      {
        no: 3,
        image: "http://localhost:3000/images/category/3.jpg", // Placeholder image
        name: "Cloth",
        icon1: <FaEdit className="text-black" />,
        icon2: <FaRegTrashAlt className="text-black" />
      },
      {
        no: 4,
        image: "http://localhost:3000/images/category/4.jpg", // Placeholder image
        name: "Bag",
        icon1: <FaEdit className="text-black" />,
        icon2: <FaRegTrashAlt className="text-black" />
      },
    ];


    export  const rows2 = [
      {
        no: 1,
        image: "http://localhost:3000/images/category/1.jpg", // Placeholder image
        name: "Shoo",
        paymentStatus: "Active",
        email: "demo@gmail.com",
        status: "Deactive",
        icon1: <FaRegEye />
      },
      {
        no: 2,
        image: "http://localhost:3000/images/category/2.jpg", // Placeholder image
        name: "Watch",
        email: "demo@gmail.com",
        paymentStatus: "Active",
        status: "Deactive",
        icon1: <FaRegEye />
      },
      {
        no: 3,
        image: "http://localhost:3000/images/category/3.jpg", // Placeholder image
        name: "Cloth",
        email: "demo@gmail.com",
        paymentStatus: "Active",
        status: "Deactive",
        icon1: <FaRegEye />
      },
      {
        no: 4,
        image: "http://localhost:3000/images/category/4.jpg", // Placeholder image
        name: "Bag",
        email: "demo@gmail.com",
        paymentStatus: "Active",
        status: "Deactive",
        icon1: <FaRegEye />
      },
    ];

    export  const rowsSellerProducts = [
      {
        no: 1,
        image: "http://localhost:3000/images/category/1.jpg", // Placeholder image
        name: "New Men's Shoo",
        category: "Shoo",
        brand: "Vendro",
        price: "$246",
        discount: "10%",
        stock: 20,
        icon1: <FaEdit className="text-black" />,
        icon2: <FaRegEye />,
        icon3: <FaRegTrashAlt className="text-black" />,
      },
      {
        no: 2,
        image: "http://localhost:3000/images/category/2.jpg", // Placeholder image
        name: "St Watch",
        category: "Watch",
        brand: "Alaska",
        price: "$26",
        discount: "10%",
        stock: 40,
        icon1: <FaEdit className="text-black" />,
        icon2: <FaRegEye />,
        icon3: <FaRegTrashAlt className="text-black" />,
      },
      {
        no: 3,
        image: "http://localhost:3000/images/category/3.jpg", // Placeholder image
        name: "Cool Shirt",
        category: "Cloth",
        brand: "Waska",
        price: "$95",
        discount: "20%",
        stock: 30,
        icon1: <FaEdit className="text-black" />,
        icon2: <FaRegEye />,
        icon3: <FaRegTrashAlt className="text-black" />,
      },
      {
        no: 4,
        image: "http://localhost:3000/images/category/4.jpg", // Placeholder image
        name: "All Gender Bag",
        category: "Bag",
        brand: "Alaska",
        price: "$206",
        discount: "15%",
        stock: 16,
        icon1: <FaEdit className="text-black" />,
        icon2: <FaRegEye />,
        icon3: <FaRegTrashAlt className="text-black" />,
      },
    ];

    export  const rowsSellerOrders = [
      {
        no: '5516',
        price: "$246",
        paymentStatus: "Pending",
        orderStatus: "Pending",
        icon2: <FaRegEye />,
      },
      {
        no:  '551556',
        price: "$526",
        paymentStatus: "Pending",
        orderStatus: "Pending",
        icon2: <FaRegEye />,
      },
      {
        no:  '1416',
        price: "$95",
        paymentStatus: "Pending",
        orderStatus: "Pending",
        icon2: <FaRegEye />,
      },
      {
        no:  '69516',
        price: "$206",
        paymentStatus: "Pending",
        orderStatus: "Pending",
        icon2: <FaRegEye />,
      },
    ];