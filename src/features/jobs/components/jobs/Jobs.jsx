import { useLocation, useSearchParams } from "react-router-dom";
import { jobsData } from "../../data/jobsData";
import "./Jobs.css";
import {
  savedJobs,
  searchedJobs,
  sortedJobsAscending,
} from "../../data/dataFiltered";
import { useState } from "react";
import JobList from "../jobList/JobList";

const Jobs = ({ type }) => {
  const [searchParams] = useSearchParams();
  const [jobsCount, setJobsCount] = useState(5);
  const location = useLocation();
  const state = location?.state?.type;
  let jobsToDisplay = [];
  let header = "";

  // Search Query Handling
  if (searchParams.size > 0) {
    const searchDesc = searchParams.get("desc").toLowerCase();
    const searchLocation = searchParams.get("location").toLowerCase();
    const searchCategory = searchParams.get("category").toLowerCase();
    const searchQuery = {
      desc: searchDesc || "",
      location: searchLocation || "",
      category: searchCategory || "",
    };
    jobsToDisplay = searchedJobs(searchQuery);
    const searchBreakdown = [
      searchQuery.desc,
      searchQuery.location,
      searchQuery.category,
    ].filter(Boolean);
    header = `Search Results: ${searchBreakdown.join(", ")}`;
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
          <JobList
            jobsToDisplay={jobsToDisplay}
            jobsCount={jobsCount}
            header={header}
            type={type}
            loadMoreHandler={loadMoreHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Jobs;
