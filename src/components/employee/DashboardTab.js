import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const DashboardTab = () => {
  const { user } = useAuth0();

  const insightsData = [
    { title: 'Applied', count: 10 },
    { title: 'Action Required', count: 3 },
    { title: 'Upcoming Interviews', count: 2 },
    { title: 'Offers', count: 5 },
    { title: 'New Messages', count: 8 },
    { title: 'Pending Reviews', count: 4 },
    { title: 'Total Jobs', count: 25 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome, {user.name}!</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {insightsData.map((insight, index) => (
          <InsightCard key={index} title={insight.title} count={insight.count} />
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul className="divide-y divide-gray-200">
          <li className="py-4">
            <p className="text-lg">New job listing: Senior Software Engineer at XYZ Inc.</p>
            <p className="text-gray-500">2 days ago</p>
          </li>
          <li className="py-4">
            <p className="text-lg">Interview scheduled for Software Developer position</p>
            <p className="text-gray-500">5 days ago</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const InsightCard = ({ title, count }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-md text-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-blue-700">{count}</p>
    </div>
  );
};

export default DashboardTab;
