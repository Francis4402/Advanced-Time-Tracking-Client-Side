import React from 'react';
import Spline from "@splinetool/react-spline";
import './Hero.css'
import {motion} from "framer-motion";
const Hero = () => {
    return (
        <div className="justify-center flex">
            <div className="container min-h-screen md:px-0 px-5">
                <div className="justify-between flex w-full">
                    <div className="absolute z-20 mt-32 text-white">
                        <h1 className="text-5xl font-semibold mb-4">Track Your WorkTime</h1>
                        <p className="text-xl max-w-lg">Post your working hour for view your activity.Post and Check your tasks</p>
                        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="bg-primary hover:bg-blue-800 px-5 py-2 rounded-lg my-10">SignUp</motion.button>
                    </div>
                    <div>
                        <Spline className="spline md:hidden grid" scene="https://prod.spline.design/Gh8iQU8VdsRo8N8b/scene.splinecode"/>
                    </div>
                    <div>
                        <Spline className="lg:relative absolute top-0 right-0 lg:scale-90 sm:scale-50 md:block hidden" scene="https://prod.spline.design/Gh8iQU8VdsRo8N8b/scene.splinecode"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;