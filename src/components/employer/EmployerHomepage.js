import React, { useState } from 'react';
import EmployerNavbar from './EmployerNavbar';
import DashboardTab from './Dashboard';
import JobListingsTab from './JobListingsTab';
import AddCompanyTab from './AddCompanyTab';
import CompanyProfileTab from './CompanyProfileTab';

const EmployerHomepage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div>
            <EmployerNavbar />
            <div className="p-8">
                <h1 className="text-3xl font-semibold mb-4">Welcome to EquiHire - Employer Dashboard</h1>

                <div className="flex space-x-4 mb-4">
                    <TabButton
                        activeTab={activeTab}
                        tabName="dashboard"
                        setActiveTab={setActiveTab}
                    >
                        Dashboard
                    </TabButton>
                    <TabButton
                        activeTab={activeTab}
                        tabName="jobListings"
                        setActiveTab={setActiveTab}
                    >
                        Job Listings
                    </TabButton>
                    <TabButton
                        activeTab={activeTab}
                        tabName="companyProfile"
                        setActiveTab={setActiveTab}
                    >
                        Company Profile
                    </TabButton>
                    <TabButton
                        activeTab={activeTab}
                        tabName="addCompany"
                        setActiveTab={setActiveTab}
                    >
                        Add Company
                    </TabButton>
                </div>

                {activeTab === 'dashboard' && <DashboardTab />}
                {activeTab === 'jobListings' && <JobListingsTab />}
                {activeTab === 'companyProfile' && <CompanyProfileTab />}
                {activeTab === 'addCompany' && <AddCompanyTab />}
            </div>
        </div>
    );
};

const TabButton = ({ activeTab, tabName, setActiveTab, children }) => {
    return (
        <button
            className={`text-lg ${
                activeTab === tabName
                    ? 'bg-gray-800 text-white'
                    : 'bg-green-600 text-white'
            } border border-blue-500 rounded-lg p-2 px-4 focus:outline-none hover:bg-green-800 hover:text-white transition duration-300`}
            onClick={() => setActiveTab(tabName)}
        >
            {children}
        </button>
    );
};





export default EmployerHomepage;
