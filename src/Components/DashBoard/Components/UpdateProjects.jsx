import React from 'react';
import {useLoaderData} from "react-router-dom";
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import useAxiosPublic from "../../Axiosfiles/useAxiosPublic.jsx";
import useAuth from "../../Hooks/useAuth.jsx";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const UpdateProjects = () => {

    const {_id, name, description, associatedtasks} = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const description = form.description.value;
        const associatedtasks = form.associatedtasks.value;

        const newupdate = {name, email, description, associatedtasks}

        axiosPublic.put(`/allprojects/${_id}`, newupdate)
            .then(res => {
                if(res.data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="justify-center flex">
            <div className="container md:px-0 px-5 min-h-screen">
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                    <h1 className="text-2xl text-white px-10 my-10">Update Project</h1>
                    <form onSubmit={handleUpdate} className="flex flex-wrap gap-4 justify-center items-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg">Description</span>
                            </label>
                            <textarea type="text" name="description" defaultValue={description} placeholder="Description" className="textarea textarea-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg">Associated Tasks</span>
                            </label>
                            <textarea type="text" name="associatedtasks" defaultValue={associatedtasks} placeholder="Associated Tasks" className="textarea textarea-bordered w-full" required />
                        </div>

                        <div className="mt-10">
                            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} type="submit" className="bg-primary text-white px-5 py-2 rounded-lg">Update</motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>

    );
};

export default UpdateProjects;