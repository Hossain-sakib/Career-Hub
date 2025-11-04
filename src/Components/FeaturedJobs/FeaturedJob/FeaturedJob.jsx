import React from "react";
import { CiLocationOn } from "react-icons/ci";

const FeaturedJob = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img className="w-40 h-20 object-contain" src={logo} alt="logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-4">
            <button className="px-5 py-2 font-extrabold border rounded-s-sm border-purple-400 text-purple-400">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-extrabold border rounded-s-sm border-purple-400 text-purple-400">
              {job_type}
            </button>
          </div>
          <div>
            <CiLocationOn />
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
