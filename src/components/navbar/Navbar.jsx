import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

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
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "linkActive" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) => (isActive ? "linkActive" : "")}
            >
              Jobs
            </NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
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
