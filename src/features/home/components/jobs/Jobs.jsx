import { Link } from "react-router-dom";
import { jobsData } from "../../../jobs/data/jobsData";
import "./Jobs.css";
import JobCard from "../../../jobs/components/jobCard/JobCard";
const Jobs = () => {
  const sortedJobs = [...jobsData].sort(
    (a, b) => new Date(b.postedAt) - new Date(a.postedAt)
  );
  return (
    <>
      <div className="jobsContainerHome">
        <div className="contentContainer">
          <div className="jobsHeader">
            <h1>Recent Jobs Available</h1>
            <Link>View all</Link>
          </div>
          <div className="jobList">
            {sortedJobs.slice(0, 5).map((job) => {
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
