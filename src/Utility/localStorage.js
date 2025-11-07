const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplications = getStoredJobApplication();
  const existingJobApplication = storedJobApplications.find(
    (jobId) => jobId === id
  );
  if (!existingJobApplication) {
    storedJobApplications.push(id);
    localStorage.setItem('job-application',JSON.stringify(storedJobApplications))
  }
};

export { saveJobApplication, getStoredJobApplication };
