import {Outlet} from "react-router-dom";
import {toast} from "react-hot-toast";
import useAuth from "../Hooks/useAuth.jsx";
import React from "react";
import userProfiles from "../Hooks/userProfiles.jsx";
import SideBar from "./SideBar/SideBar.jsx";
import DashboardNav from "./DashboardNav.jsx";

const DashBoard = () => {
    const {logOut} = useAuth();
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("logOut Successfully")
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="grid" style={{backgroundImage: 'url(/Assets/herobg.png)'}}>
            <div className="flex">
                <SideBar/>
                <div className="grid w-full h-fit">
                    <DashboardNav/>
                    <div>
                        <Outlet/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashBoard;