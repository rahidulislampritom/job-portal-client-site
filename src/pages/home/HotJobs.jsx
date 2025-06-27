import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";

const HotJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:6900/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])

    return (
        <div>
            <div className="text-center py-14">
                <h2 className="text-4xl font-bold pb-2">Jobs of the day</h2>
                <p className="text-lg ">Search and connect with the right candidates faster</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    jobs.map((job, index) => <HotJobsCard key={index} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;