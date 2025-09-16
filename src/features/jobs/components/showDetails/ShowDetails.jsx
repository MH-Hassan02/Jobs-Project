import "./ShowDetails.css";

const ShowDetails = ({ job }) => {
  return (
    <>
      <div className="detailsContainer">
        <div className="descriptionContainer">
          <h1>Job Description</h1>
          <p>{job.description}</p>
        </div>
        <div className="responsibilitiesContainer">
          <h1>Key Responsibilities</h1>
          <ul>
            {job.keyResponsibilities.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </div>
        <div className="skillsContainer">
          <h1>Professional Skills</h1>
          <ul>
            {job.professionalSkills.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </div>
        <div className="detailsTagsContainer">
          <h1>Tags:</h1>
          <div className="detailTag">
            {job.tags.map((value, index) => {
              return <label key={index}>{value}</label>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDetails;
