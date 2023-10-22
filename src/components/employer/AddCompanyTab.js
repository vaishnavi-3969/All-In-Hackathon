import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push, onValue, set } from 'firebase/database';
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
    logoURL: Yup.string().url('Invalid URL format'),
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
    logoURL: '',
    disabledFacilities: {
        wheelchairAccess: false,
        accommodations: false,
        inclusiveSalary: false,
        other: '',
    },
};

const AddCompanyTab = () => {
    const db = getDatabase(app);
    const { user } = useAuth0();
    const [companyList, setCompanyList] = useState([]);
    const userRef = ref(db, 'companies');

    const handleAddCompany = (values) => {
        const newCompanyRef = push(userRef);
        set(newCompanyRef, {
            addedBy: user.email,
            ...values,
        });
    };

    useEffect(() => {
        const unsubscribe = onValue(userRef, (snapshot) => {
            const companies = [];
            snapshot.forEach((childSnapshot) => {
                companies.push({ id: childSnapshot.key, ...childSnapshot.val() });
            });
            setCompanyList(companies);
        }, [userRef]);
        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Add Company</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    handleAddCompany(values);
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

                        <div className="mb-4">
                            <label htmlFor="companyDescription">Company Description</label>
                            <Field
                                as="textarea"
                                id="companyDescription"
                                name="companyDescription"
                                className="border p-2 rounded"
                            />
                            <ErrorMessage name="companyDescription" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="companySize">Company Size</label>
                            <Field
                                type="text"
                                id="companySize"
                                name="companySize"
                                className="border p-2 rounded"
                            />
                            <ErrorMessage name="companySize" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="logoURL">Company Logo URL</label>
                            <Field
                                type="url"
                                id="logoURL"
                                name="logoURL"
                                className="border p-2 rounded"
                            />
                            <ErrorMessage name="logoURL" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="industry">Industry</label>
                            <Field
                                type="text"
                                id="industry"
                                name="industry"
                                className="border p-2 rounded"
                            />
                            <ErrorMessage name="industry" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="officialWebsite">Official Website</label>
                            <Field
                                type="url"
                                id="officialWebsite"
                                name="officialWebsite"
                                className="border p-2 rounded"
                            />
                            <ErrorMessage name="officialWebsite" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="diversity">Diversity</label>
                            <Field
                                type="text"
                                id="diversity"
                                name="diversity"
                                className="border p-2 rounded"
                            />
                            <ErrorMessage name="diversity" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="workplaceCulture">Workplace Culture</label>
                            <Field
                                as="textarea"
                                id="workplaceCulture"
                                name="workplaceCulture"
                                className="border p-2 rounded"
                            />
                            <ErrorMessage name="workplaceCulture" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="isDisabledFriendly">Disabled-Friendly</label>
                            <Field
                                type="checkbox"
                                id="isDisabledFriendly"
                                name="isDisabledFriendly"
                            />
                        </div>

                        {values.isDisabledFriendly && (
                            <div className="mb-4">
                                <label>Disabled-Friendly Facilities:</label>
                                <div className="ml-4">
                                    <Field
                                        type="checkbox"
                                        id="disabledFacilities.wheelchairAccess"
                                        name="disabledFacilities.wheelchairAccess"
                                    />
                                    <label htmlFor="disabledFacilities.wheelchairAccess">Wheelchair Access</label>
                                </div>
                                <div className="ml-4">
                                    <Field
                                        type="checkbox"
                                        id="disabledFacilities.accommodations"
                                        name="disabledFacilities.accommodations"
                                    />
                                    <label htmlFor="disabledFacilities.accommodations">Accommodations</label>
                                </div>
                                <div className="ml-4">
                                    <Field
                                        type="checkbox"
                                        id="disabledFacilities.inclusiveSalary"
                                        name="disabledFacilities.inclusiveSalary"
                                    />
                                    <label htmlFor="disabledFacilities.inclusiveSalary">Inclusive Salary</label>
                                </div>
                                <div className="ml-4">
                                    <label htmlFor="disabledFacilities.other">Other:</label>
                                    <Field
                                        type="text"
                                        id="disabledFacilities.other"
                                        name="disabledFacilities.other"
                                        className="border p-2 rounded"
                                    />
                                </div>
                            </div>
                        )}

                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
                            Add Company
                        </button>
                    </Form>
                )}
            </Formik>

            <hr className="my-6" />
            <h2 className="text-2xl font-semibold mb-4">Company Profiles</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {companyList.map((company) => (
                    <li key={company.id} className="border p-4 rounded-md hover:shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <strong>{company.companyName}</strong>
                            <img src={company.logoURL} alt={company.companyName} className="w-16 h-16" />
                        </div>
                        <p className="text-gray-600">{company.companyDescription}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddCompanyTab;