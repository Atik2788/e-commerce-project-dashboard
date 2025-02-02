import { MdDashboard } from "react-icons/md";
import { AiOutlineShoppingCart, AiFillFileText  } from "react-icons/ai";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
import { LuUsersRound } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { FaUserSlash, FaCodePullRequest, FaMoneyCheckDollar   } from "react-icons/fa6"; 
import { FaHouseUser, FaCartPlus, FaFirstOrderAlt   } from "react-icons/fa";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";


export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <MdDashboard />,
        role: 'admin',
        path: '/admin/dashboard'
    },
    {
        id: 2,
        title: 'Orders',
        icon: <AiOutlineShoppingCart />,
        role: 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id: 3,
        title: 'Category',
        icon: <TbCategoryPlus />,
        role: 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id: 4,
        title: 'Sellers',
        icon: <LuUsersRound  />,
        role: 'admin',
        path: '/admin/dashboard/sellers'
    },
    {
        id: 5,
        title: 'Payment Request',
        icon: <MdPayment />,
        role: 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id: 6,
        title: 'Deactive Sellers',
        icon: <FaUserSlash  />,
        role: 'admin',
        path: '/admin/dashboard/deactive-sellers'
    },
    {
        id: 7,
        title: 'Seller Request',
        icon: <FaCodePullRequest   />,
        role: 'admin',
        path: '/admin/dashboard/seller-request'
    },
    {
        id: 8,
        title: 'Live Chat',
        icon: <IoChatbubbleEllipses   />,
        role: 'admin',
        path: '/admin/dashboard/chat-sellers'
    },
    {
        id: 9,
        title: 'Dashboard',
        icon: <MdDashboard   />,
        role: 'seller',
        path: '/seller/dashboard'
    },
    {
        id: 10,
        title: 'Add Product',
        icon: <FaCartPlus    />,
        role: 'seller',
        path: '/seller/dashboard/add-product'
    },
    {
        id: 11,
        title: 'All Product',
        icon: <AiFillFileText    />,
        role: 'seller',
        path: '/seller/dashboard/product'
    },
    {
        id: 12,
        title: 'Discount Product',
        icon: <TbShoppingCartDiscount    />,
        role: 'seller',
        path: '/seller/dashboard/discount-product'
    },
    {
        id: 13,
        title: 'Orders',
        icon: <FaFirstOrderAlt    />,
        role: 'seller',
        path: '/seller/dashboard/orders'
    },
    {
        id: 14,
        title: 'Payments',
        icon: <FaMoneyCheckDollar    />,
        role: 'seller',
        path: '/seller/dashboard/payments'
    },
    {
        id: 15,
        title: 'Chat-Customer',
        icon: <IoChatbubbleEllipses   />,
        role: 'seller',
        path: '/seller/dashboard/chat-customer'
    },
    {
        id: 16,
        title: 'Chat-Support',
        icon: <BiSupport    />,
        role: 'seller',
        path: '/seller/dashboard/chat-support'
    },
    {
        id: 17,
        title: 'Profile',
        icon: <FaHouseUser    />,
        role: 'seller',
        path: '/seller/dashboard/profile'
    },
]