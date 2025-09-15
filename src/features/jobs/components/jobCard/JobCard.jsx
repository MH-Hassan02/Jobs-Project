import { BsBookmarkCheckFill, BsBookmarkPlus } from "react-icons/bs";
import "./JobCard.css";
import { FiBriefcase, FiClock, FiCreditCard, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { savedJobs } from "../../data/savedJobs";

const JobCard = ({ job }) => {
  const tagsOptions = [
    { label: job.category, icon: <FiBriefcase /> },
    { label: job.jobType, icon: <FiClock /> },
    { label: job.salary, icon: <FiCreditCard /> },
    { label: job.location, icon: <FiMapPin /> },
  ];
  return (
    <Link title="View Job Details">
      <div className="jobCardContainer">
        <div className="jobCardContent">
          <div className="jobCardHeader">
            <span>
              {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}
            </span>
            <div className="saveJobIconContainer" title="Save this Job">
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
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
