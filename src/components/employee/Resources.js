import React from 'react';

const EmployeeResources = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Employee Resources</h2>
      <p>
        Welcome to the Employee Resources section. Here, you can access various resources and information to help you with your employment and career.
      </p>
      <h3 className="text-xl font-semibold mt-4">Resource Categories</h3>
      <ul className="list-disc pl-6">
        <li>Training Materials</li>
        <li>Job Search Tips</li>
        <li>Employee Benefits</li>
        <li>Company Policies</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4">Useful Links</h3>
      <ul className="list-disc pl-6">
        <li>Internal Job Postings</li>
        <li>Employee Handbook</li>
        <li>HR Contacts</li>
      </ul>
    </div>
  );
};

export default EmployeeResources;
