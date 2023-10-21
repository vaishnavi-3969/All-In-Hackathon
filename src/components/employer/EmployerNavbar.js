import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiBriefcase, FiInfo } from 'react-icons/fi';

const EmployerNavbar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-4 shadow-lg"
        >
            <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                    <motion.h1
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-semibold"
                    >
                        EmployerNavbar
                    </motion.h1>
                </div>
                <div className="flex items-center space-x-6">
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.2 }}
                        className="cursor-pointer"
                    >
                        <FiUser className="text-2xl" />
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.2 }}
                        className="cursor-pointer"
                    >
                        <FiBriefcase className="text-2xl" />
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.2 }}
                        className="cursor-pointer"
                    >
                        <FiInfo className="text-2xl" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default EmployerNavbar;