import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id == idInt);
  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = job;

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have applied successfully");
  };
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-3 space-y-6">
          <h2 className="text-3xl font-bold mb-6">Job Details: {job_title}</h2>
          <p>
            <span className="font-bold">Job Description:</span>{" "}
            {job_description}
          </p>
          <p>
            <span className="font-bold">Responsibility:</span>{" "}
            {job_responsibility}
          </p>
          <p>
            <span className="font-bold">Educational Requirements:</span>{" "}
            {educational_requirements}
          </p>
          <p>
            <span className="font-bold">Experiences:</span> {experiences}
          </p>
        </div>
        <div className="border rounded-lg text text-purple-600 p-6 bg-purple-50 space-y-4">
          <h3 className="text-xl font-bold">Job Summary</h3>
          <hr />

          <p>
            <span className="font-semibold">Salary:</span> {salary}
          </p>
          <p>
            <span className="font-semibold">Title:</span> {job_title}
          </p>

          <button
            onClick={handleApplyJob}
            className="btn btn-primary w-full mt-4"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
