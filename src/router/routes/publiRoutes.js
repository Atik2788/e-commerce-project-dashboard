import { lazy } from "react";

const Login = lazy(() => import ("../../views/auth/Login"))
const Register = lazy(() => import ("../../views/auth/Register"))

const publicRoutes = [
    {
        path: '/login',
        Element: <Login/>
    },
    {
        path: '/register',
        Element: <Register/>
    }
]

export default publicRoutes