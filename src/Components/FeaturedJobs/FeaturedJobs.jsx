import { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("/public/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="space-y-4">
      <h2 className="text-6xl text-center">Featured Jobs</h2>
      <p className="text-center">
        Discover top opportunities handpicked for you. These featured jobs
        highlight in-demand roles from leading companies.
      </p>
      <div className="flex flex-col items-center space-y-6">
        <div className="grid grid-cols-2 gap-6 ">
          {jobs.slice(0, dataLength).map((job) => (
            <FeaturedJob key={job.id} job={job}></FeaturedJob>
          ))}
        </div>
        <div className={dataLength === jobs.length ? "hidden" : ""}>
          <div className="flex justify-center">
            <button
              onClick={() => setDataLength(jobs.length)}
              className="btn btn-primary"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
