import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";

const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const navigateUser = (currRole) => {
    navigate(currRole === "recruiter" ? "/post-job" : "/jobs");
  };

  const handleRoleSelection = async (role) => {
    await user
      .update({ unsafeMetadata: { role } })
      .then(() => {
        console.log(`Role updated to: ${role}`);
        navigateUser(role);
      })
      .catch((err) => {
        console.error("Error updating role:", err);
      });
  };

  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigateUser(user.unsafeMetadata.role);
    }
  }, [user]);

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-white bg-opacity-5 backdrop-blur-md shadow-2xl rounded-2xl p-10 text-center transform transition-all hover:scale-105 duration-300">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
          Sign Up as
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Button
            variant="outline"
            className="h-44 text-2xl md:text-3xl 
              bg-teal-600 hover:bg-teal-700 
              text-white 
              rounded-xl 
              shadow-md 
              transition-all 
              duration-300 
              hover:shadow-lg 
              hover:scale-105"
            onClick={() => handleRoleSelection("candidate")}
          >
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Candidate
            </div>
          </Button>
          <Button
            variant="outline"
            className="h-44 text-2xl md:text-3xl 
              bg-indigo-600 hover:bg-indigo-700 
              text-white 
              rounded-xl 
              shadow-md 
              transition-all 
              duration-300 
              hover:shadow-lg 
              hover:scale-105"
            onClick={() => handleRoleSelection("recruiter")}
          >
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <path d="M20 8v6"></path>
                <path d="M23 11h-6"></path>
              </svg>
              Recruiter
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
