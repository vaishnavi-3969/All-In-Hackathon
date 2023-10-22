import React, { useState, useEffect } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { useAuth0 } from '@auth0/auth0-react';
import { app } from '../db/Firebase';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Company Name is required'),
    companyDescription: Yup.string().required('Company Description is required'),
    companySize: Yup.string().required('Company Size is required'),
    industry: Yup.string().required('Industry is required'),
    officialWebsite: Yup.string().url('Invalid URL format'),
    diversity: Yup.string(),
    workplaceCulture: Yup.string(),
    isDisabledFriendly: Yup.boolean(),
    disabledFacilities: Yup.object().shape({
        wheelchairAccess: Yup.boolean(),
        accommodations: Yup.boolean(),
        inclusiveSalary: Yup.boolean(),
        other: Yup.string(),
    }),
});

const initialValues = {
    companyName: '',
    companyDescription: '',
    companySize: '',
    industry: '',
    officialWebsite: '',
    diversity: '',
    workplaceCulture: '',
    isDisabledFriendly: false,
    disabledFacilities: {
        wheelchairAccess: false,
        accommodations: false,
        inclusiveSalary: false,
        other: '',
    },
};

const EmployerProfile = () => {
    const db = getDatabase(app);
    const { user } = useAuth0();
    const userRef = ref(db, 'employerProfiles');

    useEffect(() => {
        onValue(userRef, (snapshot) => {
            const profileData = snapshot.val();
            if (profileData) {
                
            }
        });
    }, [userRef]);

    const handleSaveProfile = (values) => {
        const profileData = {
            addedBy: user.email,
            ...values,
        };
        set(userRef, profileData);
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Employer Profile</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    handleSaveProfile(values);
                    resetForm();
                }}
            >
                {({ values }) => (
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="companyName">Company Name</label>
                            <Field
                                type="text"
                                id="companyName"
                                name="companyName"
                                className="border p-2 rounded"
                            />
                            <ErrorMessage name="companyName" component="div" className="text-red-500" />
                        </div>


                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
                            Save Profile
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default EmployerProfile;
