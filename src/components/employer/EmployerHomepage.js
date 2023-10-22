import React, { useState } from 'react';
import EmployerNavbar from './EmployerNavbar';
import DashboardTab from './Dashboard';
import JobListingsTab from './JobListingsTab';

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
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500'
            } border border-blue-500 rounded-lg p-2 px-4 focus:outline-none hover:bg-blue-500 hover:text-white transition duration-300`}
            onClick={() => setActiveTab(tabName)}
        >
            {children}
        </button>
    );
};





const CompanyProfileTab = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Company Profile</h2>
            <p>Manage your company profile information here. Share your company's commitment to inclusivity and showcase your culture to potential employees.</p>
        </div>
    );
};

const AddCompanyTab = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Add Company</h2>
            <p>Help us expand the reach of EquiHire by adding a new company. Promote inclusivity in the workforce by connecting more employers and job seekers.</p>
        </div>
    );
};


export default EmployerHomepage;
