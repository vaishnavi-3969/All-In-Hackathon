import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
    const [jobs, setJobs] = useState([]);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const fetchJobData = async () => {
            const jobData = [
                {
                    id: 1,
                    title: 'Frontend Developer',
                    company: 'Tech Co.',
                    location: 'New York, NY',
                    description: 'We are looking for a skilled Frontend Developer to join our team.',
                },
                {
                    id: 2,
                    title: 'Backend Developer',
                    company: 'Dev Solutions',
                    location: 'San Francisco, CA',
                    description: 'Join our team as a Backend Developer and work on exciting projects.',
                },
                {
                    id: 3,
                    title: 'UI/UX Designer',
                    company: 'Design Studio',
                    location: 'Los Angeles, CA',
                    description: 'Seeking a talented UI/UX Designer to create stunning user interfaces.',
                },
                {
                    id: 4,
                    title: 'Data Scientist',
                    company: 'AI Innovations',
                    location: 'Seattle, WA',
                    description: 'Join our data science team to build cutting-edge AI solutions.',
                },
                {
                    id: 5,
                    title: 'Marketing Specialist',
                    company: 'Marketing Pro',
                    location: 'Chicago, IL',
                    description: 'We need a marketing guru to drive our marketing campaigns.',
                },
                {
                    id: 6,
                    title: 'Software Engineer',
                    company: 'CodeCrafters',
                    location: 'Austin, TX',
                    description: 'Build the future of software with us as a software engineer.',
                },
                {
                    id: 7,
                    title: 'Product Manager',
                    company: 'InnovateX',
                    location: 'San Jose, CA',
                    description: 'Lead our product development team to create amazing products.',
                },
                {
                    id: 8,
                    title: 'Graphic Designer',
                    company: 'ArtWorks',
                    location: 'Miami, FL',
                    description: 'Use your design skills to create stunning visuals and artworks.',
                },
                {
                    id: 9,
                    title: 'Sales Representative',
                    company: 'SalesForce',
                    location: 'Denver, CO',
                    description: 'Join our sales team and be the face of our company.',
                },
                {
                    id: 10,
                    title: 'Project Manager',
                    company: 'ProjectPros',
                    location: 'Boston, MA',
                    description: 'Manage and deliver projects effectively as a project manager.',
                },
                {
                    id: 11,
                    title: 'Accountant',
                    company: 'FinanceFirm',
                    location: 'Houston, TX',
                    description: 'Manage financial accounts and ensure financial stability.',
                },
                {
                    id: 12,
                    title: 'Network Engineer',
                    company: 'ConnectIT',
                    location: 'Dallas, TX',
                    description: 'Help us maintain and improve our network infrastructure.',
                },
                {
                    id: 13,
                    title: 'Content Writer',
                    company: 'WritersHub',
                    location: 'Portland, OR',
                    description: 'Create engaging and informative content for our audience.',
                },
                {
                    id: 14,
                    title: 'Customer Support Specialist',
                    company: 'SupportX',
                    location: 'Phoenix, AZ',
                    description: 'Provide top-notch customer support to our clients.',
                },
                {
                    id: 15,
                    title: 'Mechanical Engineer',
                    company: 'MachineryCo',
                    location: 'Detroit, MI',
                    description: 'Design and maintain mechanical systems and machinery.',
                },
                {
                    id: 16,
                    title: 'Teacher',
                    company: 'EducationFirst',
                    location: 'Philadelphia, PA',
                    description: 'Educate and inspire students with your teaching skills.',
                },
                {
                    id: 17,
                    title: 'Chef',
                    company: 'CulinaryDelights',
                    location: 'San Diego, CA',
                    description: 'Create culinary masterpieces in our restaurant.',
                },
                {
                    id: 18,
                    title: 'Nurse',
                    company: 'HealthCareHeroes',
                    location: 'Nashville, TN',
                    description: 'Care for patients and make a difference in healthcare.',
                },
                {
                    id: 19,
                    title: 'Architect',
                    company: 'DesignWonders',
                    location: 'Minneapolis, MN',
                    description: 'Design innovative architectural structures and spaces.',
                },
                {
                    id: 20,
                    title: 'Data Analyst',
                    company: 'DataInsights',
                    location: 'Salt Lake City, UT',
                    description: 'Analyze data and provide valuable insights for our organization.',
                },
                // {
                //     id: 21,
                //     title: 'Electrical Engineer',
                //     company: 'ElecTech',
                //     location: 'Austin, TX',
                //     description: 'Join our electrical engineering team to work on innovative projects.',
                // },
                // {
                //     id: 22,
                //     title: 'Legal Counsel',
                //     company: 'LawFirmX',
                //     location: 'New York, NY',
                //     description: 'Provide legal expertise and guidance to our clients.',
                // },
                // {
                //     id: 23,
                //     title: 'Social Media Manager',
                //     company: 'SocialBoost',
                //     location: 'San Francisco, CA',
                //     description: 'Manage our social media presence and engage with our audience.',
                // },
                // {
                //     id: 24,
                //     title: 'Data Entry Specialist',
                //     company: 'DataPro',
                //     location: 'Chicago, IL',
                //     description: 'Accurately enter and manage data for our organization.',
                // },
                // {
                //     id: 25,
                //     title: 'HR Specialist',
                //     company: 'HRConnect',
                //     location: 'Los Angeles, CA',
                //     description: 'Support HR operations and ensure employee satisfaction.',
                // },
                // {
                //     id: 26,
                //     title: 'Pharmacist',
                //     company: 'PharmaCare',
                //     location: 'Dallas, TX',
                //     description: 'Dispense medications and provide pharmaceutical care.',
                // },
                // {
                //     id: 27,
                //     title: 'Web Developer',
                //     company: 'WebMasters',
                //     location: 'Seattle, WA',
                //     description: 'Create and maintain websites and web applications.',
                // },
                // {
                //     id: 28,
                //     title: 'Research Scientist',
                //     company: 'SciTech Research',
                //     location: 'Boston, MA',
                //     description: 'Conduct research and contribute to scientific advancements.',
                // },
                // {
                //     id: 29,
                //     title: 'Customer Success Manager',
                //     company: 'SuccessGurus',
                //     location: 'Denver, CO',
                //     description: 'Ensure customer success and satisfaction with our products.',
                // },
                // {
                //     id: 30,
                //     title: 'Digital Marketing Specialist',
                //     company: 'DigitalTrends',
                //     location: 'San Jose, CA',
                //     description: 'Drive digital marketing campaigns and strategies.',
                // },
                // {
                //     id: 31,
                //     title: 'Biomedical Engineer',
                //     company: 'BioInnovate',
                //     location: 'Minneapolis, MN',
                //     description: 'Design and develop biomedical solutions and devices.',
                // },
                // {
                //     id: 32,
                //     title: 'UX Researcher',
                //     company: 'User Insights',
                //     location: 'Portland, OR',
                //     description: 'Conduct user research to improve user experiences.',
                // },
                // {
                //     id: 33,
                //     title: 'Financial Analyst',
                //     company: 'FinanceWorks',
                //     location: 'Houston, TX',
                //     description: 'Analyze financial data and provide insights for decision-making.',
                // },
                // {
                //     id: 34,
                //     title: 'UX/UI Designer',
                //     company: 'DesignCrafters',
                //     location: 'Miami, FL',
                //     description: 'Combine design and user experience to create intuitive interfaces.',
                // },
                // {
                //     id: 35,
                //     title: 'Construction Manager',
                //     company: 'BuildPro',
                //     location: 'Phoenix, AZ',
                //     description: 'Manage construction projects and ensure quality work.',
                // },
                // {
                //     id: 36,
                //     title: 'Environmental Scientist',
                //     company: 'EcoSolutions',
                //     location: 'Nashville, TN',
                //     description: 'Study and protect the environment with scientific research.',
                // },
                // {
                //     id: 37,
                //     title: 'Mobile App Developer',
                //     company: 'AppMasters',
                //     location: 'Detroit, MI',
                //     description: 'Develop mobile applications and bring ideas to life.',
                // },
                // {
                //     id: 38,
                //     title: 'Data Engineer',
                //     company: 'DataWare',
                //     location: 'Salt Lake City, UT',
                //     description: 'Build and maintain data pipelines for data-driven organizations.',
                // },
                // {
                //     id: 39,
                //     title: 'Event Coordinator',
                //     company: 'EventMakers',
                //     location: 'Philadelphia, PA',
                //     description: 'Plan and coordinate events to create memorable experiences.',
                // },
                // {
                //     id: 40,
                //     title: 'Human Resources Manager',
                //     company: 'HRXcel',
                //     location: 'San Diego, CA',
                //     description: 'Lead HR initiatives and manage human resources operations.',
                // },
            ];


            const imagePromises = jobData.map(async (job) => {
                const response = await fetch(`https://source.unsplash.com/200x150/?logo`);
                return response.url;
            });

            const imageUrls = await Promise.all(imagePromises);
            const jobsWithImages = jobData.map((job, index) => ({
                ...job,
                imageUrl: imageUrls[index],
            }));

            setJobs(jobsWithImages);
        };

        fetchJobData();
    }, []);

    const handleApply = () => {
        setShowSuccessDialog(true);
    };
    const filteredJobs = jobs.filter((job) => {
        if (filter === 'all') return true;
        if (filter === 'frontend') return job.title === 'Frontend Developer';
        if (filter === 'backend') return job.title === 'Backend Developer';
        if (filter === 'design') return job.title === 'UI/UX Designer';
        return true;
    });
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Job Search</h2>

            <Link to="https://jobrolefinder.streamlit.app/">
                <button className='p-2 bg-green-200 md:rounded'>
                    Job Role Finder
                </button>
            </Link>
            <h2 className="text-3xl font-semibold mb-8">Explore Job Listings</h2>
            <p className="text-lg text-gray-600 mb-8">
                All Job Listings by your companies
            </p>

            {/* Filter */}
            <div className="mb-4">
                <label htmlFor="filter" className="text-sm font-semibold">
                    Filter by:
                </label>
                <select
                    id="filter"
                    className="ml-2 p-2 border border-gray-300 rounded"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="design">UI/UX Designer</option>
                    {/* Add more filter options here */}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} onApply={handleApply} />
                ))}
            </div>

            {showSuccessDialog && (
                <div className="bg-white p-4 shadow-lg rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h3 className="text-xl font-semibold mb-2">Application Submitted Successfully!</h3>
                    <p>Your application is now under review.</p>
                    <button
                        onClick={() => setShowSuccessDialog(false)}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};


const JobCard = ({ job, onApply }) => {
    return (
        <div className="bg-white p-4 shadow-lg rounded-md">
            <img src={job.imageUrl} alt={job.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-500">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
            <p className="mt-4">{job.description}</p>
            <button
                onClick={onApply}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover-bg-blue-700 transition duration-300"
            >
                Apply Now
            </button>
        </div>
    );
};

export default Search;
