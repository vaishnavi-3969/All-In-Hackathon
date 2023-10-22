import React, { useState, useEffect } from 'react';

const JobListingCard = ({ title, location, description, website, genderInclusivity, disabilityInclusivity, accommodation, date }) => {
    const [expanded, setExpanded] = useState(false);
    const [randomLogo, setRandomLogo] = useState('');
    const [candidatesApplied, setCandidatesApplied] = useState(0);
    const [perfectMatches, setPerfectMatches] = useState(0);

    useEffect(() => {
        fetch('https://source.unsplash.com/200x150/?company')
            .then((response) => {
                setRandomLogo(response.url);
            });

        setCandidatesApplied(Math.floor(Math.random() * 100));
        setPerfectMatches(Math.floor(Math.random() * 10));
    }, []);

    const toggleExpandedView = () => {
        setExpanded(!expanded);
    };

    const handleApplyClick = () => {
        alert(`Checking for relevant candidate match for ${title}`);
    };

    return (
        <div className={`border p-4 rounded-lg shadow-md cursor-pointer ${expanded ? 'bg-gray-100' : ''}`} onClick={toggleExpandedView}>
            <div className="flex justify-between items-center">
                <div>
                    <img src={randomLogo} alt="Company Logo" className="p-1 w-50 h-25 md:rounded object-cover" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-gray-600">{location}</p>
                </div>
            </div>
            <p className="mt-2">{description}</p>
            {expanded && (
                <div className="mt-4">
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">Website:</p>
                            <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-500">{website}</a>
                        </div>
                        <div>
                            <p className="font-semibold">Gender Inclusivity:</p>
                            <p>{genderInclusivity}</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-2">
                        <div>
                            <p className="font-semibold">Disability Inclusivity:</p>
                            <p>{disabilityInclusivity}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Accommodation Available:</p>
                            <p>{accommodation}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold">Candidates Applied:</p>
                        <p>{candidatesApplied}</p>
                    </div>
                    <div className="mt-2">
                        <p className="font-semibold">Perfect Matches Found:</p>
                        <p>{perfectMatches}</p>
                    </div>
                    <button onClick={handleApplyClick} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 cursor-pointer">
                        Preview
                    </button>
                    <p>Posted on {date}</p>
                </div>
            )}
        </div>
    );
};

export default JobListingCard;
