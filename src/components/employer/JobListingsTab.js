import React from 'react';
import JobListingCard from './JobListingCard';
import { Link } from 'react-router-dom';

const JobListingsTab = () => {
    const jobListings = [
        {
            title: 'Frontend Developer',
            location: 'New York, NY',
            description: 'We are looking for a skilled Frontend Developer to join our team. Apply now!',
            logo: 'frontend-logo.png',
            website: 'frontend',
            genderInclusivity: 'Open to All Genders',
            disabilityInclusivity: 'Accessible Workplace',
            accommodation: 'Accommodation Available',
            date: 'October 20, 2023',
        },
        {
            title: 'Backend Developer',
            location: 'San Francisco, CA',
            description: 'Join our Backend Developer team and work on exciting projects.',
            logo: 'backend-logo.png',
            website: 'backend',
            genderInclusivity: 'Open to All Genders',
            disabilityInclusivity: 'Accessible Workplace',
            accommodation: 'Accommodation Available',
            date: 'October 21, 2023',
        },
        {
            title: 'UX Designer',
            location: 'Los Angeles, CA',
            description: 'Passionate about user experience design? Join us!',
            logo: 'ux-logo.png',
            website: 'ux',
            genderInclusivity: 'Open to All Genders',
            disabilityInclusivity: 'Accessible Workplace',
            accommodation: 'Accommodation Available',
            date: 'October 22, 2023',
        },
        {
            title: 'Product Manager',
            location: 'Chicago, IL',
            description: 'Seeking an experienced Product Manager to lead product development.',
            logo: 'product-logo.png',
            website: 'product',
            genderInclusivity: 'Open to All Genders',
            disabilityInclusivity: 'Accessible Workplace',
            accommodation: 'Accommodation Available',
            date: 'October 23, 2023',
        },
        {
            title: 'Data Analyst',
            location: 'Austin, TX',
            description: 'Join our data analytics team and help drive data-driven decisions.',
            logo: 'data-logo.png',
            website: 'data',
            genderInclusivity: 'Open to All Genders',
            disabilityInclusivity: 'Accessible Workplace',
            accommodation: 'Accommodation Available',
            date: 'October 24, 2023',
        },
        {
            title: 'Marketing Specialist',
            location: 'Seattle, WA',
            description: 'Exciting opportunity for a Marketing Specialist to drive brand awareness.',
            logo: 'marketing-logo.png',
            website: 'marketing',
            genderInclusivity: 'Open to All Genders',
            disabilityInclusivity: 'Accessible Workplace',
            accommodation: 'Accommodation Available',
            date: 'October 25, 2023',
        },
        {
            title: 'HR Manager',
            location: 'Denver, CO',
            description: 'We are hiring an HR Manager to foster an inclusive workplace.',
            logo: 'hr-logo.png',
            website: 'hr',
            genderInclusivity: 'Open to All Genders',
            disabilityInclusivity: 'Accessible Workplace',
            accommodation: 'Accommodation Available',
            date: 'October 26, 2023',
        },
        {
            title: 'Graphic Designer',
            location: 'Boston, MA',
            description: 'Join our design team and create visually stunning graphics.',
            logo: 'graphic-logo.png',
            website: 'graphic',
            genderInclusivity: 'Open to All Genders',
            disabilityInclusivity: 'Accessible Workplace',
            accommodation: 'Accommodation Available',
            date: 'October 27, 2023',
        },
        {
            title: 'Content Writer',
            location: 'Miami, FL',
            description: 'Passionate about writing? Join us as a Content Writer!',
            logo: 'content-logo.png',
            website: 'content',
            genderInclusivity: 'Open to All Genders',
            disabilityInclusivity: 'Accessible Workplace',
            accommodation: 'Accommodation Available',
            date: 'October 28, 2023',
        },
        {
            title: 'Sales Representative',
            location: 'Houston, TX',
            description: 'Exciting sales role to drive revenue and growth.',
            logo: 'sales-logo.png',
            website: 'sales',
            genderInclusivity: 'Open to All Genders',
            disabilityInclusivity: 'Accessible Workplace',
            accommodation: 'Accommodation Available',
            date: 'October 29, 2023',
        },
        {
            title: 'Software Engineer',
            location: 'San Diego, CA',
            description: 'Join our software engineering team to build cutting-edge solutions.',
            logo: 'software-logo.png',
            website: 'software',
            genderInclusivity: 'Open to All Genders',
            disabilityInclusivity: 'Accessible Workplace',
            accommodation: 'Accommodation Available',
            date: 'October 30, 2023',
        },
    ];

    return (
        <div>
            <p>Confused which job role to apply to? Using following link based on your tech stack decide the job roles to apply for?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {jobListings.map((job, index) => (
                    <JobListingCard
                        key={index}
                        title={job.title}
                        location={job.location}
                        description={job.description}
                        logo={job.logo}
                        website={job.website}
                        genderInclusivity={job.genderInclusivity}
                        disabilityInclusivity={job.disabilityInclusivity}
                        accommodation={job.accommodation}
                        date={job.date}
                    />
                ))}
            </div>
        </div>
    );
};

export default JobListingsTab;
