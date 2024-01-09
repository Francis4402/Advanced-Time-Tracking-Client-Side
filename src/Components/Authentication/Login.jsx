import React, {useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import useAuth from "../Hooks/useAuth.jsx";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import UseAuth from "../Hooks/useAuth.jsx";
import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";
import {motion} from "framer-motion";

const Login = () => {

    const axiosPublic = useAxiosPublic();
    const [showPassword, setShowPassword] = useState(false);
    const {signIn, googleSignIn, updateUserProfile} = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleloginwithpass = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((res) => {
                console.log(res.user)
                toast.success('Your Logged In')
            })
            .catch(error => {
                console.log(error)
                toast.error('Email or password is incorrect')
            })
    }


    return (
        <div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}} className="h-[600px] hero">
                <div className="hero-content p-2 flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">login-In</h1>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm green-pink-gradient bg-opacity-5 p-[1px] rounded-[20px] shadow-card">
                        <div className="card-body bg-[#151030] rounded-[20px] bg-opacity-70 backdrop-blur">

                            <form onSubmit={handleloginwithpass}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>

                                    <div className="flex gap-3">
                                        <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered w-full" required />


                                        <span onClick={() => setShowPassword(!showPassword)} className='btn'>
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>
                                    </div>

                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-outline text-white">Login</button>
                                </div>
                            </form>

                            <div>
                                <div className="flex gap-2 items-center">
                                    <p className="md:text-base text-sm text-white">New To Website register now?</p>
                                    <Link className="btn btn-link text-base-content text-white" to='/register'><button>Register</button></Link>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </motion.div>
        </div>
    );
};

export default Login;