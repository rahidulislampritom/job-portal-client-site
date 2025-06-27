import { BsCurrencyDollar } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const jobsD = useLoaderData();
    const { _id, applicationDeadline, category, company, company_logo, description, hr_email, hr_name, jobType, location, requirements, responsibilities, salaryRange, title } = jobsD;
    // console.log(jobsD)
    return (
        <div className="w-2xl mx-auto my-5">
            <div whileHover={{ scale: 1.03 }} transition={{ ease: "easeOut", duration: 0.4 }} className="card bg-base-100 shadow-xl border border-gray-400 md:min-h-80 m-2.5 md:m-0">
                <div className="flex items-center gap-2 m-2">
                    <figure>
                        <img
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h2 className="font-medium">{company}</h2>
                        <p className="flex items-center"> <IoLocationSharp size={18} /> {location}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="flex gap-2 flex-wrap">
                        {
                            requirements.map((skill, index) =>
                                <div key={index} className="text-center border rounded-sm p-1 hover:bg-blue-500 hover:text-white">
                                    {skill}
                                </div>)
                        }
                    </div>
                    <div className="card-actions justify-end items-center">
                        <p className="flex items-center"><span className="font-medium">Salary:</span> <BsCurrencyDollar /> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                        <Link to={`/jobApply/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;