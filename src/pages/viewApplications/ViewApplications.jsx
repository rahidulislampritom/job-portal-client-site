import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
    const applications = useLoaderData();
    // console.log(applications)

    const handleChangeStatus = (e, id) => {

        const data = {
            status: e.target.value, id
        }

        fetch(`https://job-portal-server-site-six.vercel.app/job-application/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'successfully update status!',
                        icon: 'success',
                    })

                }

            })
    }
    return (
        <div>
            <h2>Applications for this job: {applications.length}</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Github Link</th>
                            <th>Linked In Link</th>
                            <th>Resume Link</th>
                            <th>Update Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((app, index) => <tr key={app._id}>
                                <th>{index + 1}</th>
                                <td>{app?.applicant_email}</td>
                                <td>{app.github}</td>
                                <td>{app.linkedIn}</td>
                                <td>{app.resume}</td>
                                <td>
                                    <select onChange={(e) => handleChangeStatus(e, app._id)} defaultValue={app.status || 'Change Status'} className="select">
                                        <option disabled>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>

                            </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;