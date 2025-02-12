import { privateRoutes } from "./privateRoutes";
import MainLayout from "../../layout/MainLayout";
import ProtectRoute from "./ProtectRoute";

export const getRoutes = () =>{

    privateRoutes.map((r) => {
        r.element = <ProtectRoute route={r}>{r.element}</ProtectRoute>
        console.log(r);
    })

    return{
        path: '/',
        element: <MainLayout/>,
        children: privateRoutes
    }
}