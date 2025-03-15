import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { State } from "country-state-city";
import { BarLoader } from "react-spinners";
import { Search, MapPin, Building2, X } from "lucide-react";
import useFetch from "@/hooks/use-fetch";

import JobCard from "@/components/job-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getCompanies } from "@/api/apiCompanies";
import { getJobs } from "@/api/apiJobs";

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");

  const { isLoaded } = useUser();

  const { data: companies, fn: fnCompanies } = useFetch(getCompanies);

  const { loading: loadingJobs, data: jobs, fn: fnJobs } = useFetch(getJobs, {
    location,
    company_id,
    searchQuery,
  });

  useEffect(() => {
    if (isLoaded) {
      fnCompanies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) fnJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, location, company_id, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);

    const query = formData.get("search-query");
    if (query) setSearchQuery(query);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setCompany_id("");
    setLocation("");
  };

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BarLoader width={"10%"} color="#3B82F6" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-10 ">
        Discover Your Next Opportunity
      </h1>

      <div className="bg-black bg-opacity-5 backdrop-blur-md shadow-2xl rounded-2xl border-2 border-gray-200 p-6 mb-6">
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row gap-4 items-center"
        >
          <div className="relative flex-grow w-full">
            <Input
              type="text"
              placeholder="Search Jobs by Title..."
              name="search-query"
              className="pl-10 pr-4 py-3 w-full border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Button
            type="submit"
            variant="default"
            className="w-full md:w-auto px-6 py-3  bg-teal-600 hover:bg-teal-700  text-white rounded-lg transition-colors"
          >
            Search Jobs
          </Button>
        </form>

        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Select
              value={location}
              onValueChange={(value) => setLocation(value)}
            >
              <SelectTrigger className="pl-10 py-3 border-2 border-gray-500 rounded-lg">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <SelectValue placeholder="Filter by Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {State.getStatesOfCountry("ZA").map(({ name }) => (
                    <SelectItem key={name} value={name}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="relative flex-grow">
            <Select
              value={company_id}
              onValueChange={(value) => setCompany_id(value)}
            >
              <SelectTrigger className="pl-10 py-3 border-2 border-gray-500 rounded-lg">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <SelectValue placeholder="Filter by Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {companies?.map(({ name, id }) => (
                    <SelectItem key={name} value={id}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="default"
            onClick={clearFilters}
            className="w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <X className="w-5 h-5" />
            Clear Filters
          </Button>
        </div>
      </div>

      {loadingJobs && (
        <div className="flex justify-center items-center my-8">
          <BarLoader width={"10%"} color="#3B82F6" />
        </div>
      )}

      {loadingJobs === false && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs?.length ? (
            jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                savedInit={job?.saved?.length > 0}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-white text-xl">
              <div className="mb-4">
                <span role="img" aria-label="sad-face">
                  😢
                </span>
              </div>
              <h2 className="text-2xl font-semibold">Oops! No Jobs Found</h2>
              <p className="mt-2 text-lg">
                It seems like there aren&apos;t any matches for your search. Try
                adjusting your filters and give it another go!
              </p>
              <p className="mt-2 text-sm text-gray-300">
                Need help? Check out the faq or reach out to support!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobListing;
