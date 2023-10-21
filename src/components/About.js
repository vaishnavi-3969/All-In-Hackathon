import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8 shadow-md bg-gray-100 rounded-lg font-karla">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl text-purple-700 font-semibold mb-4">About Our Inclusive Job Matching Platform</h1>
          <p className="text-gray-700">
            Welcome to "EquiHire", where we're committed to making the job market more inclusive for individuals with disabilities.
          </p>

          <h2 className="text-xl font-semibold mt-6">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to connect job seekers with disabilities to inclusive employers who value diversity and provide a supportive and accessible workplace environment.
          </p>

          <h2 className="text-xl font-semibold mt-6">Key Features</h2>
          <p className="text-gray-700">
            Our platform offers a range of features to ensure a seamless and inclusive job search experience.

            <ul className="list-disc list-inside">
              <li>Text-to-Speech:</li>
              <li>Machine Learning Model:</li>
              <li>Connection with potential employers:</li>
            </ul>
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <img src='About.svg' alt="Inclusive Illustration" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
