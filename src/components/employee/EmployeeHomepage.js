import React, { useState } from 'react';
import EmployeeNavbar from './EmployeeNavbar';
import DashboardTab from './DashboardTab';
import Search from './Search';
import MyApplicationsTab from './MyApplicationsTab';
import MessagesTab from '../employer/MessagesTab';
import SettingsTab from '../employer/SettingsTab';
import Notifications from './Notifications';
import Resources from './Resources';

const EmployeeHomepage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div>
            <EmployeeNavbar />
            <div className="p-8">
                <h1 className="text-3xl font-semibold mb-4">Welcome to EquiHire - Employee Dashboard</h1>

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
                        tabName="jobSearch"
                        setActiveTab={setActiveTab}
                    >
                        Job Search
                    </TabButton>
                    <TabButton
                        activeTab={activeTab}
                        tabName="myApplications"
                        setActiveTab={setActiveTab}
                    >
                        My Applications
                    </TabButton>
                    <TabButton
                        activeTab={activeTab}
                        tabName="messages"
                        setActiveTab={setActiveTab}
                    >
                        Messages
                    </TabButton>
                    <TabButton
                        activeTab={activeTab}
                        tabName="notifications"
                        setActiveTab={setActiveTab}
                    >
                        Notifications
                    </TabButton>
                    <TabButton
                        activeTab={activeTab}
                        tabName="resources"
                        setActiveTab={setActiveTab}
                    >
                        Educational resources
                    </TabButton>
                    <TabButton
                        activeTab={activeTab}
                        tabName="settings"
                        setActiveTab={setActiveTab}
                    >
                        Settings
                    </TabButton>
                    <TabButton
                        activeTab={activeTab}
                        tabName="vrworkspace"
                        setActiveTab={setActiveTab}
                    >
                        VR Workspace
                    </TabButton>
                </div>

                {activeTab === 'dashboard' && <DashboardTab />}
                {activeTab === 'jobSearch' && <Search />}
                {activeTab === 'myApplications' && <MyApplicationsTab />}
                {activeTab === 'messages' && <MessagesTab />}
                {activeTab === 'notifications' && <Notifications />}
                {activeTab === 'resources' && <Resources />}
                {activeTab === 'settings' && <SettingsTab />}

            </div>
        </div>
    );
};

const TabButton = ({ activeTab, tabName, setActiveTab, children }) => {
    return (
        <button
            className={`text-lg ${activeTab === tabName
                    ? 'bg-gray-800 text-white'
                    : 'bg-blue-600 text-white'
                } border border-blue-500 rounded-lg p-2 px-4 focus:outline-none hover:bg-blue-800 hover:text-white transition duration-300`}
            onClick={() => setActiveTab(tabName)}
        >
            {children}
        </button>
    );
};

export default EmployeeHomepage;
