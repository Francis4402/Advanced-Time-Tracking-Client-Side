import React, {useState} from 'react';
import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";
import {useForm} from "react-hook-form";
import useAuth from "../Hooks/useAuth.jsx";
import {Link, useNavigate} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import Swal from "sweetalert2";
import {motion} from "framer-motion";


const image_hosting_key = import.meta.env.VITE_Image_Upload_token;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
    const axiosPublic = useAxiosPublic();
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const {createUser, updateUserProfile} = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        createUser(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name)
                    .then(() => {
                        const userInfo  ={
                            name: data.name,
                            email: data.email,
                            password: data.password,
                            image: res.data.data.display_url
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if(res.data.insertedId){
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Profile Created',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/dashboard');
                                }
                            })
                    })
                    .catch(error => console.error(error))
            })
    };

    return (
        <div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}} className="hero h-[700px]">
                <div className="hero-content flex-col p-2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Sign-Up</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm green-pink-gradient bg-opacity-5 p-[1px] rounded-[20px] shadow-card">
                        <div className="card-body bg-[#151030] rounded-[20px] bg-opacity-70 backdrop-blur">

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input {...register("name", {required: true})} type="text" placeholder="name" className="input input-bordered w-full" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Upload Profile Image</span>
                                    </label>
                                    <input {...register('image', {required: true})} type="file" className="file-input file-input-bordered w-full" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input {...register("email", {required: true})} type="email" placeholder="email" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <div className="flex gap-6">
                                        <div className="grid">
                                            <input type={showPassword ? "text" : "password"}  {...register("password", {
                                                required: true, minLength: 6, maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*+-])(?=.*[0-9])(?=.*[a-z])/
                                            })} name="password" placeholder="password" className="input input-bordered w-full" />
                                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 required</p>}
                                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less required</p>}
                                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must be less, one number and one special character</p>}
                                        </div>

                                        <span onClick={() => setShowPassword(!showPassword)} className='btn'>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-outline text-white">Register</button>
                                </div>
                            </form>

                            <div>

                                <div className="flex gap-2 items-center text-white">
                                    <p>Already have account</p>
                                    <Link className="btn btn-link text-white" to='/login'>Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;