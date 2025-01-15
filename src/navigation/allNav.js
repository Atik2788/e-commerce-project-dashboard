import { MdDashboard } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
import { LuUsersRound } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { FaUserSlash, FaCodePullRequest  } from "react-icons/fa6"; 


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
        path: '/admin/dashboard/live-chat'
    }
]