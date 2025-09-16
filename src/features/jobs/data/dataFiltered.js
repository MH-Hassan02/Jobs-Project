import { jobsData } from "./jobsData";
import { savedJobsID } from "./savedJobs";

export const sortedJobsAscending = () => {
  return [...jobsData].sort(
    (a, b) => new Date(b.postedAt) - new Date(a.postedAt)
  );
};

export const sortedJobsDescending = () => {
  return [...jobsData].sort(
    (a, b) => new Date(a.postedAt) - new Date(b.postedAt)
  );
};

export const savedJobs = () => {
  return [...jobsData].filter((job) => savedJobsID.includes(job.id));
};

export const searchedJobs = (searchQuery) => {
  // Filtered data for Each Query
  const descMatch = jobsData.filter((job) => {
    return (
      job.description.toLowerCase().includes(searchQuery.desc) ||
      job.companyName.toLowerCase().includes(searchQuery.desc) ||
      job.jobTitle.toLowerCase().includes(searchQuery.desc)
    );
  });

  const locationMatch = jobsData.filter((job) => {
    return job.location.toLowerCase().includes(searchQuery.location);
  });

  const categoryMatch = jobsData.filter((job) => {
    return job.category.toLowerCase().includes(searchQuery.category);
  });

  // Identifying the Common Elements in the three arrays
  const commonElements = descMatch.filter((job) => {
    return locationMatch.includes(job) && categoryMatch.includes(job);
  });

  // Filtering out the common elements from the 3 original arrays so they dont get rendered multiple times
  const descFiltered = descMatch.filter((job) => !commonElements.includes(job));
  const locationFiltered = locationMatch.filter(
    (job) => !commonElements.includes(job)
  );
  const categoryFiltered = categoryMatch.filter(
    (job) => !commonElements.includes(job)
  );

  // Returning the commone elements first and then the rest
  return [
    ...commonElements,
    ...descFiltered,
    ...locationFiltered,
    ...categoryFiltered,
  ];
};
