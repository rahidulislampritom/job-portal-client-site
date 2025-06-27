import { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // console.log(jobs)
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://job-portal-server-site-six.vercel.app/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user.email])
    return (
        <div>
            <h2>My total posted jobs{jobs.length}</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Application Count</th>
                            <th>Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{job.title}</td>
                                    <td>{job.deadLine}</td>
                                    <td>{job.applicationCount}</td>
                                    <Link to={`/viewApplication/${job._id}`}><button className="btn btn-link">View Application</button></Link>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;