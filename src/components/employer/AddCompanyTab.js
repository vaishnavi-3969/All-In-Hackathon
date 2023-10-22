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
    workplaceCulture: Yup.string(),
});

const initialValues = {
    companyName: '',
    companyDescription: '',
    companySize: '',
    industry: '',
    officialWebsite: '',
    diversity: '',
    workplaceCulture: '',
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
        onValue(userRef, (snapshot) => {
            const companies = [];
            snapshot.forEach((childSnapshot) => {
                companies.push({ id: childSnapshot.key, ...childSnapshot.val() });
            });
            setCompanyList(companies);
        });
    }, [userRef]);

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

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
                        Add Company
                    </button>
                </Form>
            </Formik>

            <hr className="my-6" />
            <h2 className="text-2xl font-semibold mb-4">Company Profiles</h2>
            <ul>
                {companyList.map((company) => (
                    <li key={company.id}>
                        <strong>{company.companyName}</strong>
                        <p>{company.companyDescription}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddCompanyTab;
