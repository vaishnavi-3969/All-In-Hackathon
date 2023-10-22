import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useAuth0 } from '@auth0/auth0-react';
import { app } from '../db/Firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faInfoCircle, faBuilding, faGlobe, faUsers } from '@fortawesome/free-solid-svg-icons';

const CompanyProfileTab = () => {
    const db = getDatabase(app);
    const userRef = ref(db, 'companies');
    const { user } = useAuth0();
    const [companies, setCompanies] = useState([]);
    const [expandedCompanyId, setExpandedCompanyId] = useState(null);

    useEffect(() => {
        const unsubscribe = onValue(userRef, (snapshot) => {
            const companyData = [];
            snapshot.forEach((childSnapshot) => {
                companyData.push({ id: childSnapshot.key, ...childSnapshot.val() });
            });
            setCompanies(companyData);
        });

        return () => {
            unsubscribe();
        };
    }, [userRef]);

    const handleExpand = (companyId) => {
        setExpandedCompanyId(expandedCompanyId === companyId ? null : companyId);
    };

    const getIconForField = (field, value) => {
        if (value === true) {
            return <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />;
        } else if (value === false) {
            return <FontAwesomeIcon icon={faTimes} className="text-red-500 mr-2" />;
        } else if (field === 'officialWebsite' && value) {
            return (
                <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <FontAwesomeIcon icon={faGlobe} className="text-blue-500 mr-2" />
                </a>
            );
        } else if (field === 'companySize' || field === 'industry') {
            return <FontAwesomeIcon icon={faBuilding} className="text-gray-600 mr-2" />;
        } else if (field === 'diversity') {
            return <FontAwesomeIcon icon={faUsers} className="text-gray-600 mr-2" />;
        } else {
            return <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2"/>;
        }
    };

    return (
        <div>
            {companies.length > 0 ? (
                companies.map((company) => (
                    <div
                        key={company.id}
                        className={`bg-white rounded-md p-6 shadow-md mb-4 ${expandedCompanyId === company.id ? 'bg-blue-100' : ''
                            }`}
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-semibold">{company.companyName}</h2>
                            <button
                                onClick={() => handleExpand(company.id)}
                                className="text-blue-500 hover:underline focus:outline-none"
                            >
                                {expandedCompanyId === company.id ? 'Collapse' : 'Expand'}
                            </button>
                        </div>
                        <p className="mt-2 text-gray-600">{company.companyDescription}</p>
                        <div className="mt-4">
                            <div className="flex items-center mb-2">
                                {getIconForField('accommodationsAvailable', company.accommodationsAvailable)}
                                <span className="text-gray-600">Accommodations available</span>
                            </div>
                            <div className="flex items-center mb-2">
                                {getIconForField('disabilityWheelchairsAvailable', company.disabilityWheelchairsAvailable)}
                                <span className="text-gray-600">Disability wheelchairs available</span>
                            </div>
                            <div className="flex items-center mb-2">
                                {getIconForField('companySize', company.companySize)}
                                <span className="text-gray-600">
                                    Size: {company.companySize} | Industry: {company.industry}
                                </span>
                            </div>
                            {company.officialWebsite && (
                                <div className="flex items-center mb-2">
                                    {getIconForField('officialWebsite', company.officialWebsite)} 
                                    <a
                                        href={company.officialWebsite}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Official Website
                                    </a>
                                </div>
                            )}
                            <div className="flex items-center mb-2">
                                {getIconForField('diversity', company.diversity)} 
                                <span className="text-gray-600">Diversity: {company.diversity}</span>
                            </div>
                            <div className="flex items-center mb-2">
                                {getIconForField(company.workplaceCulture)}
                                <span className="text-gray-600">
                                    Workplace Culture: {company.workplaceCulture}
                                </span>
                            </div>
                        </div>
                        {expandedCompanyId === company.id && (
                            <>
                                <div className="mt-4">
                                    <p>{company.additionalDetails}</p>
                                </div>
                                <button
                                    className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
                                    onClick={() => {
                                    }}
                                >
                                    Apply
                                </button>
                            </>
                        )}
                    </div>
                ))
            ) : (
                <p>No company profiles found.</p>
            )}
        </div>
    );
};

export default CompanyProfileTab;
