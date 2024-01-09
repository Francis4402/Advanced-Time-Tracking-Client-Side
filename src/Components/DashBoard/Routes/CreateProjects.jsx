import React from 'react';
import {useForm} from "react-hook-form";
import useAxiosPublic from "../../Axiosfiles/useAxiosPublic.jsx";
import useProjectlists from "../../Hooks/useProjectlists.jsx";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import {motion} from "framer-motion";
import useAuth from "../../Hooks/useAuth.jsx";
import {Tilt} from "react-tilt";
import {IoCloseOutline} from "react-icons/io5";
import {FaRegEdit} from "react-icons/fa";
import {Link} from "react-router-dom";



const CreateProjects = () => {
    const [projects, refetch] = useProjectlists();
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        const Postdata = {
            name: data.name,
            email: user?.email,
            description: data.description,
            associatedtasks: data.associatedtasks
        }
        const Adddata = await axiosPublic.post('/allprojects', Postdata)
        if(Adddata.data.insertedId){
            reset();
            toast.success('Project Created')
        }
        await refetch();
    }

    const handleDelete = id => {
        axiosPublic.delete(`/allprojects/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    refetch().then(r => console.log(r));
                    toast.success('Deleted')
                }
            })
    }

    return (
        <div className="justify-center flex">
            <div className="container md:px-0 px-5 min-h-screen">
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                    <h1 className="text-2xl text-white px-10 my-10">Create Project</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-4 justify-center items-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg">Name</span>
                            </label>
                            <input type="text" {...register('name', {required: true})} placeholder="name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg">Description</span>
                            </label>
                            <textarea type="text" {...register('description', {required: true})} placeholder="Description" className="textarea textarea-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg">Associated Tasks</span>
                            </label>
                            <textarea type="text" {...register('associatedtasks', {required: true})} placeholder="Associated Tasks" className="textarea textarea-bordered w-full" required />
                        </div>

                        <div className="mt-10">
                            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} type="submit" className="bg-primary text-white px-5 py-2 rounded-lg">Create Projects</motion.button>
                        </div>
                    </form>
                </motion.div>


                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20 px-5">
                    {
                        projects.map(p => <div key={p?.id}>
                            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                                <Tilt>
                                    <div className="card w-full text-white green-pink-gradient bg-opacity-10 p-[1px] rounded-[20px] shadow-card">
                                        <div className="card-body bg-[#151030] rounded-[20px] backdrop-blur-lg bg-opacity-70 text-white p-8">
                                            <div className="card-actions justify-end">
                                                <div className="flex gap-2">
                                                    <Link to={`/dashboard/allprojects/${p?._id}`}>
                                                        <button className="btn btn-square btn-sm">
                                                            <FaRegEdit size={20}/>
                                                        </button>
                                                    </Link>
                                                    <button onClick={() => handleDelete(p._id)} className="btn btn-square btn-sm">
                                                        <IoCloseOutline size={30}/>
                                                    </button>
                                                </div>
                                            </div>
                                            <h1 className="card-title">Name: {p.name}</h1>
                                            <p>Description: {p.description}</p>
                                            <p>Associate Tasks: {p.associatedtasks}</p>
                                        </div>
                                    </div>
                                </Tilt>
                            </motion.div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CreateProjects;