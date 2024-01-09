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
import Employee from "./Components/DashBoard/Routes/Employee.jsx";
import Home from "./Components/HomeComponents/Home.jsx";
import Dashboardpage from "./Components/DashBoard/Dashboardpage.jsx";
import CreateProjects from "./Components/DashBoard/Routes/CreateProjects.jsx";
import UpdateProjects from "./Components/DashBoard/Components/UpdateProjects.jsx";
import Calender from "./Components/DashBoard/Components/Calender.jsx";
import Graph from "./Components/DashBoard/Components/Graph.jsx";

const queryClient = new QueryClient();

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
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
        element: <PrivateRoute><DashBoard/></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboardpage/>
            },
            {
                path: 'addproject',
                element: <CreateProjects/>
            },
            {
                path: 'calender',
                element: <Calender/>
            },
            {
                path: 'graph',
                element: <Graph/>,
            },
            {
                path: 'allprojects/:id',
                element: <UpdateProjects/>,
                loader: ({params}) => fetch(`https://advancetimetracking.vercel.app/allprojects/${params.id}`)
            }
        ]
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
