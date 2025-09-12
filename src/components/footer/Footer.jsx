import { Link } from "react-router-dom";
import "./Footer.css";
import { FiBriefcase } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="contentContainer">
          <div className="footerMain">
            <div className="jobSection">
              <div className="jobSectionHeader">
                <FiBriefcase />
                <span>Job</span>
              </div>
              <p>
                The best job searching platform where you can browse thorugh
                hundreds of job applications.
              </p>
            </div>
            <div className="listsSection">
              <div className="companySection">
                <span>Company</span>
                <ul>
                  <li>About Us</li>
                  <li>Our Team</li>
                  <li>Partners</li>
                  <li>For Candidates</li>
                </ul>
              </div>
              <div className="categoriesSection">
                <span>Job Categories</span>
                <ul>
                  <li>Frontend Developer</li>
                  <li>Backend Developer</li>
                  <li>DevOps Engineer</li>
                  <li>SQA Engineer</li>
                  <li>Product Analyst</li>
                </ul>
              </div>
            </div>
            <div className="newsSection">
              <h2>Newsletter</h2>
              <p>Never miss a job update now</p>
              <input type="email" placeholder="Email Address" />
              <button>Subscribe Now</button>
            </div>
          </div>
          <div className="footerBottom">
            <span>© Copyright Job Portal {new Date().getFullYear()}</span>
            <div className="footerLinks">
              <Link>Privacy Policy</Link>
              <Link>Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
