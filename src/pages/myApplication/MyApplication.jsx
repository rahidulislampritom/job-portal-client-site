import { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([])

    const axiosSecure = useAxiosSecure();



    useEffect(() => {
        // fetch(`https://job-portal-server-site-six.vercel.app/job-application?email=${user.email}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setJobs(data)
        //         // console.log(data)
        //     })


        // this is using for sending the token in ('/job-application ') of server site
        // axios.get(`https://job-portal-server-site-six.vercel.app/job-application?email=${user.email}`, { withCredentials: true })
        //     .then(res => setJobs(res.data))


        // this is using for sending the token in ('/job-application ') of server site and using axios hook
        axiosSecure.get(`/job-application?email=${user.email}`)
            .then(res => {
                setJobs(res.data)
            })


    }, [user.email, axiosSecure])


    // delete MyApplication
    const handleDelete = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://job-portal-server-site-six.vercel.app/job-application/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = jobs.filter(job => job._id !== id);
                        setJobs(remaining);

                    })

            }
        });

    }
    return (
        <div>
            <h2>Total jobs {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th>Name</th>
                            <th>Job Type</th>
                            <th>Category</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job, index) =>
                                <tr key={index}>
                                    {/* <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th> */}
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job.title}</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job.jobType}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Salary: {job.salaryRange.min} - {job.salaryRange.max}</span>
                                    </td>
                                    <td>{job.category}</td>
                                    <th>
                                        <button onClick={() => handleDelete(job._id)} className="btn btn-ghost btn-xs">X</button>
                                    </th>
                                </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyApplication;