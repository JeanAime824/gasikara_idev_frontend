import {createBrowserRouter} from "react-router-dom";
import LoginPage from "./pages/login";
import ProtectedRoute from "@/components/protected_route/ProtectedRoute.tsx";
import Dashboard from "@/pages/dashboard";


export const router = createBrowserRouter([
    {
        element: <ProtectedRoute/>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard/>
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
])