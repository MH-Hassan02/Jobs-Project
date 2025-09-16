import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <div className="contentContainer">
          <Link to="/">
            <div className="logoSection">
              <img src={logo} alt="Job Logo" />
              <span>Job Portal</span>
            </div>
          </Link>
          <div className="navLinksSection">
            <Link to="/">Home</Link>
            <Link to="/jobs">Jobs</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </div>
          <div className="navButtons">
            <button className="navloginBtn">Login</button>
            <button className="navRegBtn">Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
