import Hero from "../components/hero/Hero";
import Jobs from "../features/jobs/components/jobs/Jobs";

const Home = () => {
  return (
    <>
      <Hero />
      <Jobs type={"recentJobs"} />
      <Jobs type={"savedJobs"} />
    </>
  );
};

export default Home;
