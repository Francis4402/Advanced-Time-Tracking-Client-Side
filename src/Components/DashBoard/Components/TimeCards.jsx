import React, {useEffect, useState} from 'react';
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {CiPlay1, CiStop1} from "react-icons/ci";
import {LiaHourglassStartSolid} from "react-icons/lia";
import {MdOutlineNotStarted} from "react-icons/md";
import useAxiosPublic from "../../Axiosfiles/useAxiosPublic.jsx";
import useAuth from "../../Hooks/useAuth.jsx";
import Swal from "sweetalert2";
import useTimeData from "../../Hooks/useTimeData.jsx";

const TimeCards = () => {

    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    const [startTime, setStartTime] = useState(time);
    const [isButton1, setIsButton1] = useState(false);
    const [isButton2, setIsButton2] = useState(false);
    const [isButton3, setIsButton3] = useState(false);
    const [isButton4, setIsButton4] = useState(false);
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const handlePlayButton  = async () => {

        const start = new Date().toLocaleTimeString();

        setStartTime(start);
        setIsButton1(true);
        const dateTime = {
            date: new Date().toLocaleDateString(),
            email: user?.email,
            startTime: start,
        }
        const res = await axiosPublic.post('/saveTime', dateTime);
        if(res.data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Start Time Saved`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }

    const handleStopButton = async () => {
        const end = new Date().toLocaleTimeString();
        setStartTime(end);
        setIsButton2(true);
        const dateTime = {
            date: new Date().toLocaleDateString(),
            email: user?.email,
            endTime: end,
        }
        const res = await axiosPublic.post(`/saveTime`, dateTime);
        if(res.data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `End Time Saved`,
                showConfirmButton: false,
                timer: 1500,
            });
            setStartTime(end)
        }
    }

    const handleBreakButton = async () => {
        const Break = new Date().toLocaleTimeString();
        setStartTime(Break);
        setIsButton3(true);
        const dateTime = {
            date: new Date().toLocaleDateString(),
            email: user?.email,
            BreakTime: Break,
        }
        const res = await axiosPublic.post('/saveTime', dateTime);
        if(res.data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Break Time Saved`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }

    const handleResumeButton = async () => {
        const resume = new Date().toLocaleTimeString();
        setStartTime(resume);
        setIsButton4(true);
        const dateTime = {
            date: new Date().toLocaleDateString(),
            email: user?.email,
            remuseTime: resume,
        }
        const res = await axiosPublic.post('/saveTime', dateTime);
        if(res.data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Resume Time Saved`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setStartTime(time);
    }

    useEffect(() => {
        const intervalId = setInterval(updateTime, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="grid gap-8 justify-center">
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}} className="text-white md:text-2xl">Start Your Work</motion.h1>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}>
                <Tilt className='w-fit'>
                    <div className="text-white sm:w-full w-52 green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                        <div className='bg-[#151030] rounded-[20px] py-5 px-12 min-h-[50px] grid gap-5 justify-center'>
                            <h1 className="text-center">Today's Date : <span>{date}</span></h1>
                            <div className="grid gap-4 items-center">
                                <h1 className="sm:text-5xl text-center">{startTime}</h1>
                                <div className="sm:flex grid gap-6">
                                    <div className="grid gap-2 justify-center">
                                        <motion.button type="submit" onClick={handlePlayButton} disabled={isButton1} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", damping: 7, stiffness: 400}} className="border p-2 rounded-full flex justify-center">
                                            <CiPlay1 size={24}/>
                                        </motion.button>
                                        <p className="text-center">Start</p>
                                    </div>

                                    <div className="grid gap-2 justify-center">
                                        <motion.button type="submit" onClick={handleStopButton} disabled={isButton2} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", damping: 7, stiffness: 400}} className="border p-2 rounded-full flex justify-center">
                                            <CiStop1 size={24}/>
                                        </motion.button>
                                        <p className="text-center">Stop</p>
                                    </div>

                                    <div className="grid gap-2 justify-center">
                                        <motion.button type="submit" onClick={handleBreakButton} disabled={isButton3} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", damping: 7, stiffness: 400}} className="border p-2 rounded-full flex justify-center">
                                            <LiaHourglassStartSolid size={24}/>
                                        </motion.button>
                                        <p className="text-center">Break</p>
                                    </div>

                                    <div className="grid gap-2 justify-center">
                                        <motion.button type="submit" onClick={handleResumeButton} disabled={isButton4} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", damping: 7, stiffness: 400}} className="border p-2 rounded-full flex justify-center">
                                            <MdOutlineNotStarted size={24} />
                                        </motion.button>
                                        <p className="text-center">Resume</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </motion.div>

        </div>
    );
};

export default TimeCards;