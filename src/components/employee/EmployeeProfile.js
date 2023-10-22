import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get, set } from 'firebase/database';
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
    }, [user]);

    const saveProfileData = (updatedData) => {
        // Update the profile data in Firebase
        const userRef = ref(db, 'employee_profiles');
        set(userRef, updatedData);

        // Update the local state with the changes
        setProfileData(updatedData);
    };

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
                        <BasicInfoSection
                            profileData={profileData}
                            saveProfileData={saveProfileData}
                        />
                    )}

                    {activeSection === 'employmentHistory' && (
                        <EmploymentHistorySection
                            profileData={profileData}
                            saveProfileData={saveProfileData}
                        />
                    )}

                    {activeSection === 'moreInfo' && (
                        <MoreInfoSection
                            profileData={profileData}
                            saveProfileData={saveProfileData}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

const BasicInfoSection = ({ profileData, saveProfileData }) => {
    const [basicInfo, setBasicInfo] = useState(profileData && profileData.basicInfo);

    const handleSave = () => {
        const updatedData = {
            ...profileData,
            basicInfo: basicInfo,
        };
        saveProfileData(updatedData);
    };

    return (
        <div>
            {/* Add input fields for basic info and a Save button */}
            <input
                type="text"
                placeholder="Name"
                value={basicInfo.name}
                onChange={(e) => setBasicInfo({ ...basicInfo, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Email"
                value={basicInfo.email}
                onChange={(e) => setBasicInfo({ ...basicInfo, email: e.target.value })}
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

const EmploymentHistorySection = ({ profileData, saveProfileData }) => {
    const [employmentHistory, setEmploymentHistory] = useState(profileData && profileData.employmentHistory);

    const handleSave = () => {
        const updatedData = {
            ...profileData,
            employmentHistory: employmentHistory,
        };
        saveProfileData(updatedData);
    };

    return (
        <div>
            {/* Add input fields for employment history and a Save button */}
            <input
                type="text"
                placeholder="Company"
                value={employmentHistory.company}
                onChange={(e) => setEmploymentHistory({ ...employmentHistory, company: e.target.value })}
            />
            <input
                type="text"
                placeholder="Position"
                value={employmentHistory.position}
                onChange={(e) => setEmploymentHistory({ ...employmentHistory, position: e.target.value })}
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

const MoreInfoSection = ({ profileData, saveProfileData }) => {
    const [moreInfo, setMoreInfo] = useState(profileData && profileData.moreInfo);

    const handleSave = () => {
        const updatedData = {
            ...profileData,
            moreInfo: moreInfo,
        };
        saveProfileData(updatedData);
    };

    return (
        <div>
            {/* Add input fields for more info and a Save button */}
            <input
                type="text"
                placeholder="Education"
                value={moreInfo.education}
                onChange={(e) => setMoreInfo({ ...moreInfo, education: e.target.value })}
            />
            <input
                type="text"
                placeholder="Skills"
                value={moreInfo.skills}
                onChange={(e) => setMoreInfo({ ...moreInfo, skills: e.target.value })}
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default EmployeeProfile;
