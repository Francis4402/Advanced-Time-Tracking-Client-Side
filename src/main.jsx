import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import Login from "./Components/Authentication/Login.jsx";
import Register from "./Components/Authentication/Register.jsx";
import AuthProvider from "./Components/Provider/AuthProvider.jsx";
import DashBoard from "./Components/DashBoard/DashBoard.jsx";
import PrivateRoute2 from "./Components/PrivateRoutes/PrivateRoute2.jsx";
import PrivateRoute from "./Components/PrivateRoutes/PrivateRoute.jsx";

const queryClient = new QueryClient();

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/login',
                element: <PrivateRoute2><Login/></PrivateRoute2>
            },
            {
                path: '/register',
                element: <PrivateRoute2><Register/></PrivateRoute2>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard/></PrivateRoute>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <Toaster position="top-center" />
                <RouterProvider router={routes}/>
            </QueryClientProvider>
        </AuthProvider>
  </React.StrictMode>,
)
