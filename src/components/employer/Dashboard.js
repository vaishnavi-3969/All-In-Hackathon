import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuilding,
    faUser,
    faClipboardList,
    faBullhorn,
    faCheckCircle,
    faChartBar,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { app } from '../db/Firebase';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const DashboardTab = () => {
    const db = getDatabase(app);
    const { user, isAuthenticated } = useAuth0();
    const companyProfilesRef = ref(db, 'companies');
    const [companyProfilesCount, setCompanyProfilesCount] = useState(0);
    const [insights] = useState([
        {
            icon: faBullhorn,
            text: 'Get noticed! Promote your job listings for increased visibility.',
            number: 350,
        },
        {
            icon: faCheckCircle,
            text: 'Track your job posting success with detailed analytics.',
            number: 6500,
        },
        {
            icon: faChartBar,
            text: 'Optimize your job descriptions for better results.',
            number: 15,
        },
    ]);

    useEffect(() => {
        onValue(companyProfilesRef, (snapshot) => {
            if (snapshot.exists()) {
                const profiles = snapshot.val();
                const count = Object.keys(profiles).length;
                setCompanyProfilesCount(count);
            }
        });
    }, [companyProfilesRef]);

    const candidates = [
        { status: 'Pending for Interview', count: 5 },
        { status: 'Pending for Review', count: 10 },
        { status: 'Meetings Today', count: 3 },
    ];

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
            >
                {isAuthenticated ? `Welcome, ${user.name}! ` : 'Welcome to your EquiHire employer dashboard. '}Here you can manage your job listings, company profile, and more. Your contributions are making the job market more inclusive.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-4 rounded-lg shadow-md flex items-center"
                >
                    <FontAwesomeIcon icon={faBuilding} className="text-blue-500 text-3xl" />
                    <div className="ml-4">
                        <h3 className="font-semibold text-xl">Company Profiles</h3>
                        <p className="text-gray-600">{companyProfilesCount} profiles</p>
                    </div>
                </motion.div>

                {insights.map((insight, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white p-4 rounded-lg shadow-md flex items-center"
                    >
                        <FontAwesomeIcon icon={insight.icon} className="text-blue-500 text-3xl" />
                        <div className="ml-4">
                            <p className="text-gray-600">
                                {insight.text} ({insight.number})
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Candidate Status</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {candidates.map((candidate, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white p-4 rounded-lg shadow-md flex items-center"
                        >
                            <FontAwesomeIcon icon={faClipboardList} className="text-blue-500 text-3xl" />
                            <div className="ml-4">
                                <h3 className="font-semibold text-lg">{candidate.status}</h3>
                                <p className="text-gray-600">{candidate.count} candidates</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Today's Meetings</h3>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <Calendar className="custom-calendar" />
                </div>
            </div>
        </div>
    );
};

export default DashboardTab;
