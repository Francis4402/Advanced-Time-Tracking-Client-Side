import {FaBars, FaHome} from "react-icons/fa";
import {Link, NavLink, Outlet} from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import {toast} from "react-hot-toast";
import useAuth from "../Hooks/useAuth.jsx";
import bgVideo from "/Assets/pink.mp4"
import {motion} from "framer-motion";
import React from "react";
import userProfiles from "../Hooks/userProfiles.jsx";

const DashBoard = () => {
    const {logOut} = useAuth();

    const [users] = userProfiles();
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("logOut Successfully")
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="sm:flex hidden">
                <video src={bgVideo} autoPlay loop muted className="fixed w-full h-full object-cover" />

                <div className="w-72 min-h-screen z-10 bg-[#000634] bg-opacity-20 backdrop-blur-lg">

                    <ul className="menu sm:text-xl gap-4 text-center text-white my-6">
                        <motion.div whileHover={{scale: 1.04}} whileTap={{scale: 1}}>
                            <NavLink to="/" className="flex items-center sm:gap-3 gap-1 border-b border-s border-blue-500 backdrop-blur-lg bg-blue-600 bg-opacity-5 hover:bg-blue-500 hover:bg-opacity-20 py-2 transition duration-200 rounded-lg justify-center">
                                <FaHome size={15}/>
                                <h1>Home</h1>
                            </NavLink>
                        </motion.div>

                        <div>
                            <li>
                                <details>
                                    <summary>Projects</summary>
                                    <ul className="p-2 grid gap-3">
                                        <motion.div whileHover={{scale: 1.04}} whileTap={{scale: 1}}>
                                            <NavLink to="/" className="flex items-center sm:gap-3 gap-1 border-b border-s border-blue-500 backdrop-blur-lg bg-blue-600 bg-opacity-5 hover:bg-blue-500 hover:bg-opacity-20 py-2 transition duration-200 rounded-lg justify-center">
                                                <h1>Project List</h1>
                                            </NavLink>
                                        </motion.div>

                                        <motion.div whileHover={{scale: 1.04}} whileTap={{scale: 1}}>
                                            <NavLink to="/" className="flex items-center sm:gap-3 gap-1 border-b border-s border-blue-500 backdrop-blur-lg bg-blue-600 bg-opacity-5 hover:bg-blue-500 hover:bg-opacity-20 py-2 transition duration-200 rounded-lg justify-center">
                                                <h1>Employee</h1>
                                            </NavLink>
                                        </motion.div>
                                    </ul>
                                </details>
                            </li>
                        </div>

                    </ul>
                </div>

                <div className="w-full py-2 gap-3 flex flex-col z-20 bg-[#000634] bg-opacity-20 backdrop-blur-lg h-fit">
                    <div className='flex items-center justify-between mt-5 lg:px-72 md:px-32 px-3'>
                        <div className="sm:flex gap-2 hidden text-white">
                            <AiOutlineHome size={20}/>
                            <h1 className="font-semibold">DashBoard</h1>
                        </div>
                        <div>
                            <div className="dropdown dropdown-end text-black">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            users.map(u => <div key={u?.email}>
                                                <img src={u?.image} alt='i' />
                                            </div>)
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] text-white p-2 border border-blue-700 border-opacity-30 shadow bg-[#000634] bg-opacity-50 backdrop-blur-lg rounded-box w-52">
                                    {
                                        users.map(u => <li key={u?.email}>
                                            <p className="text-base">{u.name}</p>
                                        </li>)
                                    }
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>

            <div className="drawer border-b sm:hidden">
                <video src={bgVideo} autoPlay loop muted className="fixed w-full h-full object-cover" />
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content grid gap-3 md:px-0 px-5 py-6 z-10 bg-[#000634] bg-opacity-20 backdrop-blur-lg">
                    <div className="justify-between flex">
                        <label htmlFor="my-drawer" className="btn btn-outline text-white drawer-button"><FaBars/></label>
                        <div className="dropdown dropdown-end text-black">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-20 rounded-full">
                                    {
                                        users.map(u => <div key={u?.email}>
                                            <img src={u?.image} alt='i' />
                                        </div>)
                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] text-white p-2 border border-blue-700 border-opacity-30 shadow bg-[#000634] bg-opacity-50 backdrop-blur-lg rounded-box w-52">
                                {
                                    users.map(u => <li key={u?.email}>
                                        <p className="text-base">{u?.name}</p>
                                    </li>)
                                }
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
                <div className="drawer-side z-20">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-44 gap-5 min-h-full z-10 bg-[#000634] bg-opacity-20 backdrop-blur-lg text-white">

                        <motion.div whileHover={{scale: 1.04}} whileTap={{scale: 1}} className="my-10">
                            <NavLink to="/" className="flex items-center sm:gap-3 gap-1 border-b border-s border-blue-500 backdrop-blur-lg bg-blue-600 bg-opacity-5 hover:bg-blue-500 hover:bg-opacity-20 py-2 transition duration-200 rounded-lg justify-center">
                                <FaHome size={15}/>
                                <h1>Home</h1>
                            </NavLink>
                        </motion.div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;