import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../db/Firebase';
import EmployeeNavbar from './EmployeeNavbar';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EmployeeProfile = () => {
    const { user } = useAuth0();
    const [profileData, setProfileData] = useState(null);
    const [activeSection, setActiveSection] = useState('basicInfo');

    useEffect(() => {
        const fetchUserProfile = async () => {
            const userRef = doc(db, 'employee_profiles', user.sub);

            try {
                const docSnapshot = await getDoc(userRef);
                if (docSnapshot.exists()) {
                    setProfileData(docSnapshot.data());
                }
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, [user.sub]);

    return (
        <div>
            <EmployeeNavbar />
            <div className="p-8 bg-white shadow-lg text-black">
                <div className="flex">
                    <div className="w-1/4 bg-gray-100 p-4 rounded-l">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">User Profile</h2>
                        <img src={user.picture} alt="" />
                        <ul>
                            <li
                                onClick={() => setActiveSection('basicInfo')}
                                className={`cursor-pointer ${activeSection === 'basicInfo' && 'text-blue-700'}`}
                            >
                                Basic Info
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/4 p-4 rounded-r">
                        {activeSection === 'basicInfo' && <BasicInfoSection profileData={profileData} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

const BasicInfoSection = ({ profileData }) => {
    const { user } = useAuth0();

    return (
        <div>
            <h3 className="text-2xl font-semibold mb-4">Basic Info</h3>
            <p className="mb-4">Update your basic information.</p>
            <Formik
                initialValues={{
                    name: profileData?.basicInfo?.name || '',
                    email: user.email || '',
                    age: profileData?.basicInfo?.age || '',
                    gender: profileData?.basicInfo?.gender || '',
                    disability: profileData?.basicInfo?.disability || '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Name is required'),
                    email: Yup.string().email('Invalid email address').required('Email is required'),
                    age: Yup.number()
                        .typeError('Age must be a number')
                        .positive('Age must be a positive number')
                        .integer('Age must be an integer'),
                    gender: Yup.string().required('Gender is required'),
                    disability: Yup.string().nullable(),
                })}
                onSubmit={async (values) => {
                    const updatedProfileData = {
                        ...profileData,
                        basicInfo: values,
                    };

                    const userRef = doc(db, 'employee_profiles', user.sub);
                    await setDoc(userRef, updatedProfileData);
                }}
            >
                <Form>
                    <div className="mb-4">
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" className="border rounded w-full p-2" />
                        <ErrorMessage name="name" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" className="border rounded w-full p-2" disabled />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age">Age</label>
                        <Field type="number" id="age" name="age" className="border rounded w-full p-2" />
                        <ErrorMessage name="age" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender">Gender</label>
                        <Field as="select" id="gender" name="gender" className="border rounded w-full p-2">
                            <option value="" disabled>
                                Select a gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Field>
                        <ErrorMessage name="gender" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="disability">Disability</label>
                        <Field as="select" id="disability" name="disability" className="border rounded w-full p-2">
                            <option value="" disabled>
                                Select a disability type
                            </option>
                            <option value="none">None</option>
                            <option value="visual">Visual Impairment</option>
                            <option value="hearing">Hearing Impairment</option>
                            <option value="mobility">Mobility Impairment</option>
                            <option value="cognitive">Cognitive Impairment</option>
                            <option value="other">Other</option>
                        </Field>
                        <ErrorMessage name="disability" component="div" className="text-red-500" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Save
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default EmployeeProfile;