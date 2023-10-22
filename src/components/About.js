import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='p-5'>
      <div className="container mx-auto p-8 shadow-lg bg-gradient-to-br from-purple-400 to-indigo-600 font-karla text-white">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-extrabold mb-4">About Us: Empowering Differences, Enriching Businesses.</h1>
            <p className="text-lg">
              Welcome to EquiHire, where we are dedicated to reshaping the job market, creating a more inclusive space for individuals with disabilities.
            </p>

            <h2 className="text-2xl font-semibold mt-8">Our Mission</h2>
            <p className="text-lg">
              Our mission is to connect job seekers with disabilities to inclusive employers who embrace diversity and provide a supportive and accessible workplace environment.
            </p>

            <h2 className="text-2xl font-semibold mt-8">Key Features</h2>
            <p className="text-lg">
              Our platform offers an array of features to ensure a seamless and inclusive job search experience.

              <ul className="list-disc list-inside mt-4">
                <li>Connect with Potential Employers.</li>
                <li>Voice recognition functionality.</li>
                <li>Toggle Colour Blind Model.</li>
                <li>Job Role Finder ML Model.</li>
                <li>Data Security.</li>
              </ul>
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <img src='About.svg' alt="Inclusive Illustration" className="w-full" />
          </div>
        </div>
      </div>
      <Link to="/">
        <p>Back to Homepage</p>
      </Link>
    </div>
  );
};

export default About;
