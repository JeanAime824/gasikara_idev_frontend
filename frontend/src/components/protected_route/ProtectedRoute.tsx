import {UseAuth} from "@/context/AuthContext.tsx";
import {Navigate, Outlet, useLocation} from "react-router-dom";


export default function ProtectedRoute(){
    const {authState} = UseAuth()
    const location = useLocation()
    if(!authState?.token){
        return <Navigate to="/login" state={{from: location}} replace/>
    }
    return <Outlet/>
}