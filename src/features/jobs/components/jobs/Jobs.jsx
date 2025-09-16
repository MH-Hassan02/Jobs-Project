import { Link, useLocation, useSearchParams } from "react-router-dom";
import { jobsData } from "../../data/jobsData";
import "./Jobs.css";
import JobCard from "../jobCard/JobCard";
import {
  savedJobs,
  searchedJobs,
  sortedJobsAscending,
} from "../../data/dataFiltered";
import { useState } from "react";

const Jobs = ({ type }) => {
  const [searchParams] = useSearchParams();
  const [jobsCount, setJobsCount] = useState(5);
  const location = useLocation();
  const state= location?.state?.type
  let jobsToDisplay = [];
  let header = "";

  if (searchParams.size > 0) {
    const searchDesc = searchParams.get("desc").toLowerCase();
    const searchLocation = searchParams.get("location").toLowerCase();
    const searchCategory = searchParams.get("category").toLowerCase();

    const searchQuery = {
      desc: searchDesc,
      location: searchLocation,
      category: searchCategory,
    };

    jobsToDisplay = searchedJobs(searchQuery);
    header = "Search Results";
  } else if (type === "recentJobs") {
    jobsToDisplay = sortedJobsAscending();
    header = "Recent Jobs Available";
  } else if (type === "savedJobs" || state === "savedJobs") {
    jobsToDisplay = savedJobs();
    header = "Saved Jobs";
  } else if (type === "allJobs") {
    jobsToDisplay = jobsData;
    header = "All Jobs";
  }

  const loadMoreHandler = () => {
    setJobsCount((prev) => prev + 10);
  };

  return (
    <>
      <div className="jobsContainerHome">
        <div className="contentContainer">
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
            {jobsCount < jobsToDisplay.length && location.pathname !== "/" && (
              <button onClick={loadMoreHandler} className="loadMoreBtn">
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
