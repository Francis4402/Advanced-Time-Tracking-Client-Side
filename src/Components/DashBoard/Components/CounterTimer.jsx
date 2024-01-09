import {useEffect, useState} from 'react';
import {Tilt} from "react-tilt";
import {CiPause1, CiPlay1, CiStop1} from "react-icons/ci";
import {motion} from "framer-motion";
const CounterTimer = () => {
    const [seconds, setSeconds] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);
    const [paused, setPaused] = useState(false);


    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    const startTimer = () => {
        if (!timerInterval) {
            setTimerInterval(setInterval(() => {
                if (!paused) {
                    setSeconds((prevSeconds) => prevSeconds + 1);
                }
            }, 1000));
        }
    };

    const pauseTimer = () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            setTimerInterval(null);
        }
        setPaused(paused);
    };

    const stopTimer = () => {
        clearInterval(timerInterval);
        setTimerInterval(null);
        setSeconds(0);
        setPaused(false);
    };

    return (
        <Tilt>
            <div className="text-white w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div className="text-center bg-[#151030] rounded-[20px] py-5 px-12 min-h-fit grid gap-5">
                    <div id="timer" className="text-4xl mb-8">{`${formatTime(Math.floor(seconds / 3600))}:${formatTime(Math.floor((seconds % 3600) / 60))}:${formatTime(seconds % 60)}`}</div>

                    <div className="sm:flex grid gap-6 justify-center">
                        <div className="grid gap-2 justify-center">
                            <motion.button onClick={startTimer} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", damping: 7, stiffness: 400}} className="border p-2 rounded-full flex justify-center">
                                <CiPlay1 size={24}/>
                            </motion.button>
                            <p className="text-center">Start</p>
                        </div>

                        <div className="grid gap-2 justify-center">
                            <motion.button onClick={pauseTimer} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", damping: 7, stiffness: 400}} className="border p-2 rounded-full flex justify-center">
                                <CiPause1 size={24} />
                            </motion.button>
                            <p className="text-center">Pause</p>
                        </div>

                        <div className="grid gap-2 justify-center">
                            <motion.button onClick={stopTimer} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", damping: 7, stiffness: 400}} className="border p-2 rounded-full flex justify-center">
                                <CiStop1 size={24} />
                            </motion.button>
                            <p className="text-center">Stop</p>
                        </div>
                    </div>

                </div>
            </div>
        </Tilt>

    );
};

export default CounterTimer;