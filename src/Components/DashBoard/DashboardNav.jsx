import React from 'react';
import userProfiles from "../Hooks/userProfiles.jsx";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth.jsx";

const DashboardNav = () => {

    const [users] = userProfiles();
    const {logOut} = useAuth();
    const handleLogOut = () => {
        logOut()
            .then(() => toast.success('User Logged Out Successfully'))
            .catch(error => toast.error(error))
    }

    return (
        <div className="bg-[#00073D] bg-opacity-20 backdrop-blur h-fit text-white w-full">
            <div className="justify-between flex px-10 py-5">
                <div>

                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-32 rounded-full">
                            {
                                users.map(u => <div key={u?.email}>
                                    <img src={u?.image} alt='i' />
                                </div>)
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu md:menu-lg menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-[#00073D] bg-opacity-80 backdrop-blur rounded-box w-52">
                        <div>
                            {
                                users.map(u => <li key={u?.email}>
                                    <p className="text-base">{u.name}</p>
                                </li>)
                            }
                            <li><button onClick={handleLogOut}>Logout</button></li>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;