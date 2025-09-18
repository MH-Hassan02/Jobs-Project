import { NavLink, Outlet } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="sectionChangeBtn">
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? "linkActive" : "")}
        >
          Recent Jobs
        </NavLink>
        <NavLink
          to="saved"
          className={({ isActive }) => (isActive ? "linkActive" : "")}
        >
          Saved Jobs
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
