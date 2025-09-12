import { useState } from "react";
import "./Hero.css";
import { FaSearch } from "react-icons/fa";
import { FiBriefcase, FiUsers } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
const Hero = () => {
  const locationOptions = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Quetta",
    "Peshawer",
  ];
  const categoryOptions = [
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
    "SQA Engineer",
    "Product Analyst",
  ];
  const statsOptions = [
    { icon: <FiBriefcase />, value: "1254", label: "Jobs" },
    { icon: <FiUsers />, value: "8234", label: "Applicants" },
    { icon: <HiOutlineBuildingOffice2 />, value: "125", label: "Companies" },
  ];

  return (
    <div className="heroContainer">
      <div className="contentContainer">
        <div className="heroHeader">
          <h1>Find Your Dream Job Today!</h1>
          <h4>Connecting Talent with Opportunity: Your Gateway to Success</h4>
        </div>
        <div className="heroSearchSection">
          <input type="text" placeholder="Job Title or Company" />
          <select id="location">
            <option selected disabled>
              Select Location
            </option>
            {locationOptions.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
          <select>
            <option selected disabled>
              Select Category
            </option>
            {categoryOptions.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
          <button>
            <FaSearch />
            Search Job
          </button>
        </div>
        <div className="heroStatsSection">
          {statsOptions.map((option, index) => {
            return (
              <div className="heroStats" key={index}>
                <div className="iconContainer">{option.icon}</div>
                <div className="txtContainer">
                  <span className="statsNumbers">{option.value}</span>
                  <span>{option.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
