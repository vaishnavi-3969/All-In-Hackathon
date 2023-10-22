import React from 'react';

const MyApplicationsTab = () => {
  const applications = [
    {
      id: 1,
      jobTitle: 'Frontend Developer',
      company: 'Tech Co.',
      dateApplied: '2023-10-15',
      status: 'In Review',
    },
    {
      id: 2,
      jobTitle: 'Backend Developer',
      company: 'Dev Solutions',
      dateApplied: '2023-10-10',
      status: 'Rejected',
    },
    {
      id: 3,
      jobTitle: 'UI/UX Designer',
      company: 'Design Studio',
      dateApplied: '2023-10-05',
      status: 'Interview Confirmed',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Applications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {applications.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </div>
    </div>
  );
};

const ApplicationCard = ({ application }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-md">
      <h3 className="text-lg font-semibold">{application.jobTitle}</h3>
      <p className="text-gray-500">{application.company}</p>
      <p className="text-gray-500">Date Applied: {application.dateApplied}</p>
      <p className="text-gray-500">Status: {application.status}</p>
    </div>
  );
};

export default MyApplicationsTab;
