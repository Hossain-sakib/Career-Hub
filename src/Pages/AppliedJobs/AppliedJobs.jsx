import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { getStoredJobApplication } from "../../Utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds){
        const job = jobs.find(job => job.id===id);
        if(job){
            jobsApplied.push(job)
        }
      }
      console.log(jobs, storedJobIds, jobsApplied);
    }
  }, []);

  return <div>Jobs I Applied</div>;
};

export default AppliedJobs;
