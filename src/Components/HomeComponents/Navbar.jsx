import React from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import useAuth from "../Hooks/useAuth.jsx";
import toast from "react-hot-toast";
import userProfiles from "../Hooks/userProfiles.jsx";

const Navbar = () => {

    const {user, logOut} = useAuth();
    const [users] = userProfiles();

    const handleLogOut = () => {
        logOut()
            .then(() => toast.success('User Logged Out Successfully'))
            .catch(error => toast.error(error))
    }

    return (
        <div className="justify-center flex md:px-0 px-5">
            <div className="container">
                <motion.div className="justify-between flex py-5 items-center" initial={{y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{type: "spring", damping: 7, stiffness: 400, duration: 0.5}}>
                    <div className="text-white gap-10 flex items-center">
                        <Link to={'/'}>
                            <div className="flex items-center text-4xl font-bold gap-3 font-Caveat">
                                <img src={'/logo.svg'} alt={"i"} />
                                <h1>ATT</h1>
                            </div>
                        </Link>

                        <div className="md:flex hidden font-semibold">
                            <Link to={'/'}>
                                <h1>Home</h1>
                            </Link>

                        </div>
                    </div>

                    <div className="flex items-center gap-3">

                        {
                            !user ? <div className="flex gap-4 text-white">
                                <Link to={'/login'}>
                                    <button className="btn btn-ghost text-lg">Login</button>
                                </Link>
                                <Link to={'/register'}>
                                    <button className="btn btn-ghost text-lg md:flex hidden">Register</button>
                                </Link>
                            </div> : <>
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
                                    <ul tabIndex={0} className="menu md:menu-lg menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#00073D] bg-opacity-80 backdrop-blur rounded-box w-52">
                                        {
                                            users.map(u => <li key={u?.email}>
                                                <p className="text-base">{u.name}</p>
                                            </li>)
                                        }


                                        <Link to={'/'} className="flex md:hidden">
                                            <li><p>Home</p></li>
                                        </Link>


                                        <Link to='dashboard'><li><p>DashBoard</p></li></Link>
                                        <li><button onClick={handleLogOut}>Logout</button></li>
                                    </ul>
                                </div>
                            </>
                        }
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Navbar;