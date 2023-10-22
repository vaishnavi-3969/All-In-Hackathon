const JobListingCard = ({ title, location, description }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{location}</p>
            <p className="mt-2">{description}</p>
        </div>
    );
};
export default JobListingCard;