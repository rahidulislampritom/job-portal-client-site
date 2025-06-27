import Swal from "sweetalert2";
import useAuth from "../../hooks/UseAuth";

const AddJob = () => {

    const { user } = useAuth();

    const handleAddJobSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData);
        const { min, max, currency, ...newJob } = initialData;
        // console.log(newJob);
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        // console.log(newJob);

        fetch('https://job-portal-server-site-six.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    Swal.fire({
                        icon: "success",
                        title: "POST successful",
                    });
                }
                // console.log(data);
            })

    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-7xl mx-auto  shrink-0 shadow-2xl">
                <div className="card-body ">
                    <form onSubmit={handleAddJobSubmit}>
                        {/* title  */}
                        <fieldset className="fieldset">
                            <label className="label">Title</label>
                            <input name="title" type="text" className="input w-full" placeholder="Title" />
                        </fieldset>
                        {/* location  */}
                        <fieldset className="fieldset">
                            <label className="label">Location</label>
                            <input name="location" type="text" className="input w-full" placeholder="Location" />
                        </fieldset>
                        {/* jobType */}
                        <fieldset className="fieldset">
                            <label className="label">Job Type</label>
                            <select name="jobType" defaultValue="Pick a job type" className="select w-full">
                                <option disabled={true}>Pick a job type</option>
                                <option>Hybrid</option>
                                <option>Remote</option>
                                <option>Contractual</option>
                                <option>Intern</option>
                                <option>Full-Time</option>
                            </select>
                        </fieldset>
                        {/* job category  */}
                        <fieldset className="fieldset">
                            <label className="label">Job-Category</label>
                            <select name="category" defaultValue="Pick a job Field" className="select w-full">
                                <option disabled={true}>Pick a job Field</option>
                                <option>Engineering</option>
                                <option>Marketing</option>
                                <option>Finance</option>
                                <option>Teaching</option>
                                <option>Data Science</option>
                                <option>Design</option>
                                <option>Management</option>
                                <option>Development</option>
                            </select>
                        </fieldset>
                        {/* salary range  */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
                            <fieldset className="fieldset">
                                <label className="label">Salary-Range</label>
                                <input name="min" type="number" className="input w-full" placeholder="Min" />
                            </fieldset>
                            <fieldset className="fieldset">
                                {/* <label className="label">Salary-Range</label> */}
                                <input name="max" type="number" className="input w-full" placeholder="Max" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <select name="currency" defaultValue="Currency" className="select w-full">
                                    <option disabled={true}>Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>INR</option>
                                    <option>EUR</option>
                                </select>
                            </fieldset>
                        </div>
                        {/* description  */}
                        <fieldset className="fieldset">
                            <label className="label">Description</label>
                            <textarea name="description" className="textarea w-full" placeholder="Job description..."></textarea>
                        </fieldset>
                        {/* company  */}
                        <fieldset className="fieldset">
                            <label className="label">Company</label>
                            <input name="company" type="text" className="input w-full" placeholder="Company name" />
                        </fieldset>
                        {/* requirements  */}
                        <fieldset className="fieldset">
                            <label className="label">Requirements</label>
                            <textarea name="requirements" className="textarea w-full" placeholder="put each requirements in a new line..."></textarea>
                        </fieldset>
                        {/* responsibilities  */}
                        <fieldset className="fieldset">
                            <label className="label">Responsibilities</label>
                            <textarea name="responsibilities" className="textarea w-full" placeholder="put each responsibilities  in a new line..."></textarea>
                        </fieldset>
                        {/* hr_email  */}
                        <fieldset className="fieldset">
                            <label className="label">HR Email</label>
                            <input name="hrEmail" type="email" defaultValue={user.email} className="input w-full" placeholder="HR_email" />
                        </fieldset>
                        {/* hr_name  */}
                        <fieldset className="fieldset">
                            <label className="label">HR Name</label>
                            <input name="hrName" type="text" className="input w-full" placeholder="HR_name" />
                        </fieldset>
                        {/* deadline  */}
                        <fieldset className="fieldset">
                            <label className="label">Deadline</label>
                            <input name="deadLine" type="date" className="input w-full" placeholder="HR_name" />
                        </fieldset>
                        {/* company logo  */}
                        <fieldset className="fieldset">
                            <label className="label">Company Logo URL</label>
                            <input name="company" type="text" className="input w-full" placeholder="Company Logo URL" />
                        </fieldset>
                        {/* submit  */}
                        <fieldset className="text-center">
                            <button className="btn btn-neutral mt-4 w-full">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;