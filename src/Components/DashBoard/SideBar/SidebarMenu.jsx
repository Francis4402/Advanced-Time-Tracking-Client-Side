import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuAnimation = {
    hidden: {
        opacity: 0,
        height: 0,
        padding: 0,
        transition: { duration: 0.3, when: "afterChildren" },
    },
    show: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.3,
            when: "beforeChildren",
        },
    },
};
const menuItemAnimation = {
    hidden: (i) => ({
        padding: 0,
        x: "-100%",
        transition: {
            duration: (i + 1) * 0.1,
        },
    }),
    show: (i) => ({
        x: 0,
        transition: {
            duration: (i + 1) * 0.1,
        },
    }),
};

const SidebarMenu = ({ route, showAnimation, isOpen, setIsOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsOpen(true);
    };

    useEffect(() => {
        if (!isOpen) {
            setIsMenuOpen(false);
        }
    }, [isOpen]);
    return (
        <>
            <div className="flex text-white px-4 py-2 gap-3 items-center" onClick={toggleMenu}>
                <div className="flex gap-3">
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="whitespace-nowrap text-[15px]"
                            >
                                {route.name}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                {isOpen && (
                    <motion.div
                        animate={
                            isMenuOpen
                                ? {
                                    rotate: -90,
                                }
                                : { rotate: 0 }
                        }
                    >
                        <FaAngleDown />
                    </motion.div>
                )}
            </div>{" "}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="flex flex-col"
                    >
                        {route.subRoutes.map((subRoute, i) => (
                            <motion.div variants={menuItemAnimation} key={i} custom={i}>
                                <NavLink to={subRoute.path} className="flex items-center gap-3 px-10 py-2 hover:bg-[#2D3359] duration-200">
                                    <div className="icon">{subRoute.icon}</div>
                                    <motion.div className="link_text">{subRoute.name}</motion.div>
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>
                )}{" "}
            </AnimatePresence>
        </>
    );
};

export default SidebarMenu;