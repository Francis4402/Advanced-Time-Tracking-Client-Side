import {FaPlusCircle} from "react-icons/fa";
import {motion} from "framer-motion";

const Employee = () => {
    return (
        <div className="justify-center flex">
            <div className="container">
                <div className="justify-between sm:flex grid md:p-10 lg:p-24 p-8 md:gap-0 gap-6">
                    <h1 className="text-white font-semibold text-2xl">Employee List</h1>

                    <motion.button whileHover={{scale: 1.04}} className="bg-blue-950 text-white px-5 py-3 rounded-lg border-b border-r flex items-center gap-3"><FaPlusCircle/> Add Employee</motion.button>
                </div>

            </div>
        </div>
    );
};

export default Employee;