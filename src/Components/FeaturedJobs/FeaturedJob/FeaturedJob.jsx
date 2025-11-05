import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router";

const FeaturedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm border border-purple-500 p-y-8">
      <figure>
        <img className="w-40 h-20 object-contain" src={logo} alt="logo" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-2xl">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-4">
          <button className="px-5 py-2 font-extrabold border rounded-s-sm border-purple-400 text-purple-400">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded-s-sm border-purple-400 text-purple-400">
            {job_type}
          </button>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex flex-row text-purple-500 text-lg items-center gap-2">
            <MdLocationOn className="text-xl" /> <p>{location}</p>
          </div>
          <div className="flex flex-row text-purple-500 text-lg items-center gap-2">
            <AiOutlineDollarCircle className="text-xl" /> <p>{salary}</p>
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
