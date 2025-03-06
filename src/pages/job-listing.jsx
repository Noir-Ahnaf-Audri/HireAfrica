import { useSession } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { getJobs } from "@/api/apiJobs";

const JobListing = () => {
  const { session } = useSession();
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      if (!session) {
        console.error("Session is not available.");
        return;
      }

      const supabaseAccessToken = await session.getToken({
        template: "supabase",
      });

      const fetchedJobs = await getJobs(supabaseAccessToken);
      setJobs(fetchedJobs);
    };

    fetchJobs();
  }, [session]); // Ensure the useEffect runs when session is available

  return (
    <div>
      {jobs ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>{job.job_title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading jobs...</p>
      )}
    </div>
  );
};

export default JobListing;
