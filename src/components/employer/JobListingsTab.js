import JobListingCard from "./JobListingCard";

const JobListingsTab = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Job Listings</h2>
            <p>View, edit, or add new job listings to attract diverse talents. Let's build an inclusive workforce together!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <JobListingCard
                    title="Frontend Developer"
                    location="New York, NY"
                    description="We are looking for a skilled Frontend Developer to join our team. Apply now!"
                />
                <JobListingCard
                    title="Backend Developer"
                    location="San Francisco, CA"
                    description="Join our Backend Developer team and work on exciting projects."
                />
                <JobListingCard
                    title="UX Designer"
                    location="Los Angeles, CA"
                    description="Passionate about user experience design? Join us!"
                />
            </div>
        </div>
    );
};

export default JobListingsTab;