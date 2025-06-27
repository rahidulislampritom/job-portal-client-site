
import { BsCurrencyDollar } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "motion/react"
import { Link } from "react-router-dom";


const HotJobsCard = ({ job }) => {
    // console.log(job)
    const { _id, company, company_logo, description, location, requirements, salaryRange, title } = job;
    return (
        <div>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ ease: "easeOut", duration: 0.4 }} className="card bg-base-100 shadow-xl border border-gray-400 md:min-h-96 m-2.5 md:m-0">
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
                        <Link to={`/jobDetails/${_id}`}><button className="btn btn-primary">Apply</button></Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HotJobsCard;