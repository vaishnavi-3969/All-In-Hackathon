import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { useAuth0 } from '@auth0/auth0-react';
import { db } from '../db/Firebase';
import EmployeeNavbar from './EmployeeNavbar';

const EmployeeProfile = () => {
    const [profileData, setProfileData] = useState(null);
    const [activeSection, setActiveSection] = useState('basicInfo');
    const { user } = useAuth0();
    useEffect(() => {
        const fetchUserProfile = async () => {
            const userEmail = user.email;

            try {
                const userRef = ref(db, 'employee_profiles');
                const snapshot = await get(userRef);

                snapshot.forEach((childSnapshot) => {
                    const employeeData = childSnapshot.val();

                    if (employeeData.email === userEmail) {
                        setProfileData(employeeData);
                    }
                });
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <div>
            <EmployeeNavbar />
            <div className="p-8 bg-white shadow-lg text-black">
                <div className='min-h-screen w-1/4 bg-gray-100 drop-shadow rounded-lg'>
                    <div className="p-4">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">User Profile</h2>
                        <ul>
                            <li
                                onClick={() => setActiveSection('basicInfo')}
                                className={`cursor-pointer ${activeSection === 'basicInfo' && 'text-blue-700'}`}
                            >
                                Basic Info
                            </li>
                            <li
                                onClick={() => setActiveSection('employmentHistory')}
                                className={`cursor-pointer ${activeSection === 'employmentHistory' && 'text-blue-700'}`}
                            >
                                Employment History
                            </li>
                            <li
                                onClick={() => setActiveSection('moreInfo')}
                                className={`cursor-pointer ${activeSection === 'moreInfo' && 'text-blue-700'}`}
                            >
                                More Info
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-3/4 p-4">
                    {activeSection === 'basicInfo' && (
                        <BasicInfoSection profileData={profileData} />
                    )}

                    {activeSection === 'employmentHistory' && (
                        <EmploymentHistorySection profileData={profileData} />
                    )}

                    {activeSection === 'moreInfo' && (
                        <MoreInfoSection profileData={profileData} />
                    )}
                </div>
            </div>
        </div>
    );
};

const BasicInfoSection = ({ profileData }) => {
    return (
        <div>
            {/* Display basic info here */}
        </div>
    );
};

const EmploymentHistorySection = ({ profileData }) => {
    return (
        <div>
            {/* Display employment history here */}
        </div>
    );
};

const MoreInfoSection = ({ profileData }) => {
    return (
        <div>
            {/* Display more info here */}
        </div>
    );
};

export default EmployeeProfile;
