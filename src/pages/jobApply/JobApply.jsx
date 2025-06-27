import { useParams } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";


const JobApply = () => {


    const { user } = useAuth();
    // console.log(user);

    const { id } = useParams();
    // console.log(id);

    const handleJobApplySubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkedIn, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }
        // console.log(jobApplication);


        // this is for posting data of job application from apply now 
        fetch('https://job-portal-server-site-six.vercel.app/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Apply Successful!',
                        icon: 'success',
                    })
                }
            })

    }


    return (
        <div className="bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Apply Job and Good Luck</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleJobApplySubmit}>
                            <fieldset className="fieldset">
                                <label className="label">LinkedIn URL</label>
                                <input name="linkedIn" type="url" className="input w-full" placeholder="LinkedIn URL" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label">Github  URL</label>
                                <input name="github" type="url" className="input w-full" placeholder="Github URL" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label">Resume URL</label>
                                <input name="resume" type="url" className="input w-full" placeholder="Resume URL" />
                            </fieldset>
                            {/* <fieldset className="fieldset">
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" />
                            </fieldset> */}
                            <fieldset className="fieldset">
                                {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                                <button className="btn btn-neutral mt-4">Apply</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApply;