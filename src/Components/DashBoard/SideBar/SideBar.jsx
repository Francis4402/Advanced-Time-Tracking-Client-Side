import {Link, NavLink} from "react-router-dom";
import {FaBars, FaCalendar, FaHome, FaLock, FaMoneyBill, FaProjectDiagram, FaUser} from "react-icons/fa";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import './Sidebar.css'
import {MdDashboard} from "react-icons/md";

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <MdDashboard/>,
    },
    {
        path: "",
        name: "Projects",
        icon: <AiTwotoneFileExclamation />,
        subRoutes: [
            {
                path: "addproject",
                name: "Create Project",
                icon: <FaProjectDiagram />,
            },
            {
                path: "calender",
                name: "Calender",
                icon: <FaCalendar />,
            },
        ],
    },
    {
        path: "/",
        name: "Home",
        icon: <FaHome />,
    },
];

const routes2 = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <MdDashboard/>,
    },
    {
        path: "addproject",
        name: "Create Project",
        icon: <FaUser />,
    },
    {
        path: "calender",
        name: "Calender",
        icon: <FaCalendar />,
    },
    {
        path: "/",
        name: "Home",
        icon: <FaHome />,
    }
];

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <div className="md:flex flex-col hidden">
                <motion.div
                    animate={{
                        width: isOpen ? "200px" : "55px",

                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                        },
                    }}
                    className="bg-[#00073D] bg-opacity-20 backdrop-blur min-h-screen text-white overflow-hidden"
                >
                    <div className="flex items-center justify-between px-5 py-8">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="text-[18px]"
                                >
                                    DashBoard
                                </motion.h1>
                            )}
                        </AnimatePresence>

                        <div className="w-[40px]">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>

                    <section className="text-2xl grid">
                        {routes.map((route, index) => {
                            if (route.subRoutes) {
                                return (
                                    <SidebarMenu
                                        setIsOpen={setIsOpen}
                                        route={route}
                                        showAnimation={showAnimation}
                                        isOpen={isOpen}
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#2D3359] duration-200"
                                    activeClassName="active"
                                >
                                    <div>{route.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="text-[15px]"
                                            >
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>

                <main>{children}</main>
            </div>

            <div className="flex flex-col md:hidden">
                <div className="bg-[#00073D] bg-opacity-20 backdrop-blur sm:min-h-screen h-full text-white overflow-hidden">
                    <div className="items-center grid justify-center gap-6 px-5 py-8 mt-6">
                        {
                            routes2.map(e => <div key={e.id}>
                                <Link to={e.path}>
                                    <h1 className="text-2xl">{e.icon}</h1>
                                </Link>
                            </div>)
                        }
                    </div>
                </div>


            </div>
        </>
    );
};

export default SideBar;