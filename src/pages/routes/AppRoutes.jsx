import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Home from "../home/Home";
import NotFound from "../../components/notFound/NotFound";
import Jobs from "../../features/jobs/components/jobs/Jobs";

const JobPage = lazy(() => import("../JobPage"));

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Jobs type="recentJobs" />} />
          <Route path="saved" element={<Jobs type="savedJobs" />} />
        </Route>
        <Route path="/jobs" element={<JobPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
