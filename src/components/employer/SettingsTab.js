import React, { useState } from 'react';

const SettingsTab = () => {
    const [settings, setSettings] = useState({
        notifications: true,
        emailUpdates: true,
        privacy: true,
    });

    const handleSettingChange = (setting) => {
        setSettings({
            ...settings,
            [setting]: !settings[setting],
        });
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>
            <div className="mb-4">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={settings.notifications}
                        onChange={() => handleSettingChange('notifications')}
                    />
                    <span className="ml-2 text-gray-700">Receive Notifications</span>
                </label>
            </div>
            <div className="mb-4">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={settings.emailUpdates}
                        onChange={() => handleSettingChange('emailUpdates')}
                    />
                    <span className="ml-2 text-gray-700">Receive Email Updates</span>
                </label>
            </div>
            <div className="mb-4">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={settings.privacy}
                        onChange={() => handleSettingChange('privacy')}
                    />
                    <span className="ml-2 text-gray-700">Privacy Settings</span>
                </label>
            </div>
        </div>
    );
};

export default SettingsTab;
