import { Link } from "react-router-dom";
import JobCard from "../jobCard/JobCard";
import "./JobList.css";

const JobList = ({
  jobsToDisplay,
  jobsCount,
  header,
  type,
  loadMoreHandler,
}) => {
  return (
    <>
      <div className="jobsHeader">
        <h1>{header}</h1>
        {type === "recentJobs" && <Link to="/jobs">View all</Link>}
        {type === "savedJobs" && (
          <Link to="/jobs" state={{ type: "savedJobs" }}>
            View all
          </Link>
        )}
      </div>
      <div className="jobList">
        {jobsToDisplay.slice(0, jobsCount).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        {jobsCount < jobsToDisplay.length &&
          location.pathname !== "/" &&
          location.pathname !== "/saved" && (
            <button onClick={loadMoreHandler} className="loadMoreBtn">
              Load More
            </button>
          )}
      </div>
    </>
  );
};

export default JobList;
