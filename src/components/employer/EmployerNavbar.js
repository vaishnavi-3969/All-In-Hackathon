import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiBriefcase, FiInfo, FiLogOut } from 'react-icons/fi';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const EmployerNavbar = () => {
    const {logout} = useAuth0();
    
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 p-4 shadow-lg"
        >
            <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                    <Link to="/employer_homepage">
                        <img src={Logo} alt='' width={50} />
                    </Link>
                    <Link to="/employer_homepage">
                        <motion.h1
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-semibold"
                        >
                            EquiHire
                        </motion.h1>
                    </Link>
                </div>
                <div className="flex items-center space-x-6">
                    <Link to="/employer_profile">
                        <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.2 }}
                            className="cursor-pointer"
                        >
                            <FiUser className="text-2xl" />
                        </motion.div>
                    </Link>
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
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.2 }}
                        className="cursor-pointer"
                        onClick={() => logout()}
                    >
                        <FiLogOut className="text-2xl" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default EmployerNavbar;