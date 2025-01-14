import { MdDashboard } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbCategoryPlus } from "react-icons/tb";


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
        path: '/admin/dashboard/orders'
    }
]