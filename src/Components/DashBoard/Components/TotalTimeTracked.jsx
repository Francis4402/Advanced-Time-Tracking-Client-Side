import React, {useEffect} from 'react';
import useTimeData from "../../Hooks/useTimeData.jsx";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";


const TotalTimeTracked = () => {
    const [timedata, refetch] = useTimeData();
    const currentDate = new Date().toLocaleDateString();

    useEffect(() => {
        const intervalId = setInterval(refetch, 1000);

        return () => clearInterval(intervalId);
    }, [refetch]);

    const StartTime = timedata
        .filter(data => data.date === currentDate)
        .reduce((totalTime, data) => {
            const startTimeAsInteger = parseInt(data.startTime, 10);
            return isNaN(startTimeAsInteger) ? totalTime : totalTime + startTimeAsInteger;
        }, 0);

    const EndTime = timedata
        .filter(data => data.date === currentDate)
        .reduce((totalTime, data) => {
            const startTimeAsInteger = parseInt(data.endTime, 10);
            return isNaN(startTimeAsInteger) ? totalTime : totalTime + startTimeAsInteger;
        }, 0);


    const WorkDuration = Math.abs(StartTime - EndTime);


    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}} className="grid gap-5 justify-center">
            <Tilt className="w-fit">
                <div className="text-white sm:w-full w-52 green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                    <div className='bg-[#151030] rounded-[20px] py-5 px-12 min-h-fit grid gap-5'>
                        <div className="sm:flex grid gap-2">
                            <h1 className="sm:text-base text-xs">Today's Work Time:</h1>
                            <span>{WorkDuration} h</span>
                        </div>
                    </div>
                </div>
            </Tilt>

            <Tilt className="w-fit">
                <div className="text-white sm:w-full w-52 green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                    <div className='bg-[#151030] rounded-[20px] py-5 px-12 min-h-fit grid gap-5'>
                        <h1 className="sm:text-base text-xs">Today's Total BreakTime</h1>
                        <div className="sm:flex grid gap-5">
                            <div className="grid">
                                From :
                                {
                                    timedata
                                        .filter(b => b.date === currentDate)
                                        .map(b => (
                                            <div key={b?.id}>
                                                <h1>{b.BreakTime}</h1>
                                            </div>
                                        ))
                                }
                            </div>

                            <div className="grid">
                                To :
                                {
                                    timedata
                                        .filter(b => b.date === currentDate)
                                        .map(b => (
                                            <div key={b?.id}>
                                                <h1>{b.remuseTime}</h1>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};


export default TotalTimeTracked;