import { useEffect, useRef } from "react";
import Hero from "../components/hero/Hero";
import Jobs from "../features/jobs/components/jobs/Jobs";
import { useSearchParams } from "react-router-dom";

const JobPage = () => {
  const jobsRef = useRef();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (jobsRef.current) {
      jobsRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [searchParams]);

  return (
    <>
      <Hero />
      <div ref={jobsRef}>
        <Jobs type="allJobs" />
      </div>
    </>
  );
};

export default JobPage;
