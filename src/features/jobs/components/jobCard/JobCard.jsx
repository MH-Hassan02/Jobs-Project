import { BsBookmarkCheckFill, BsBookmarkPlus } from "react-icons/bs";
import "./JobCard.css";
import { FiBriefcase, FiClock, FiCreditCard, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { savedJobsID } from "../../data/savedJobs";
import { useState } from "react";
import ShowDetails from "../showDetails/showDetails";

const JobCard = ({ job }) => {
  const [savedJobs, setSavedJobs] = useState(savedJobsID);
  const [showDetails, setShowDetails] = useState(false);
  const tagsOptions = [
    { label: job.category, icon: <FiBriefcase /> },
    { label: job.jobType, icon: <FiClock /> },
    { label: job.salary, icon: <FiCreditCard /> },
    { label: job.location, icon: <FiMapPin /> },
  ];

  const saveJobHandler = (event, jobId) => {
    event.preventDefault();
    event.stopPropagation();
    // {
    //   savedJobs.includes(id)
    //     ? setSavedJobs()
    //     : setSavedJobs((prev) => [...prev, id]);
    // }
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((itemId) => itemId !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <Link
      title={showDetails ? "Hide Job Details" : "View Job Details"}
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className={`jobCardContainer ${showDetails ? "expanded" : ""}`}>
        <div className="jobCardContent">
          <div className="jobCardHeader">
            <span>
              {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}
            </span>
            <div
              className="saveJobIconContainer"
              title="Save this Job"
              onClick={(event) => saveJobHandler(event, job.id)}
            >
              {savedJobs.includes(job.id) ? (
                <BsBookmarkCheckFill />
              ) : (
                <BsBookmarkPlus />
              )}
            </div>
          </div>
          <div className="jobCardPosition">
            <div className="imgContainer">
              <img src={job.photo} alt="Job Icon" />
            </div>
            <div className="textContainer">
              <h2>{job.jobTitle}</h2>
              <h3>{job.companyName}</h3>
            </div>
          </div>
          <div className="jobCardDetails">
            <div className="tagsContainer">
              {tagsOptions.map((tag) => {
                return (
                  <>
                    <div className="tagDetail">
                      {tag.icon}
                      <label>{tag.label}</label>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {showDetails && <ShowDetails job={job} />}

          <div className="applyBtnContainer">
            <button>Apply Here</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
