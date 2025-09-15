import Hero from "../features/home/components/hero/Hero"
import Jobs from "../features/home/components/jobs/Jobs"

const Home = () => {
  return (
    <>
      <Hero />
      <Jobs header={"Recent Jobs Available"} />
      <Jobs header={"Saved Jobs"} />
    </>
  );
}

export default Home