import { Link } from "react-router-dom";
import { jobsData } from "../../../jobs/data/jobsData";
import { savedJobs } from "../../../jobs/data/savedJobs";
import "./Jobs.css";
import JobCard from "../../../jobs/components/jobCard/JobCard";

const Jobs = ({ header }) => {
  if (header === "Recent Jobs Available") {
    var sortedJobs = [...jobsData].sort(
      (a, b) => new Date(b.postedAt) - new Date(a.postedAt)
    );
  } else if (header === "Saved Jobs") {
    var filteredSavedJobs = [...jobsData].filter((job) =>
      savedJobs.includes(job.id)
    );
    console.log(filteredSavedJobs, "filteredSavedJobs");
  }
  return (
    <>
      <div className="jobsContainerHome">
        <div className="contentContainer">
          <div className="jobsHeader">
            <h1>{header}</h1>
            <Link>View all</Link>
          </div>
          <div className="jobList">
            {header === "Recent Jobs Available" &&
              sortedJobs.slice(0, 5).map((job) => {
                return (
                  <>
                    <JobCard job={job} />
                  </>
                );
              })}
            {header === "Saved Jobs" &&
              filteredSavedJobs.slice(0, 5).map((job) => {
                return (
                  <>
                    <JobCard job={job} />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
