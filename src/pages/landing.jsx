import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import compDatas from "../randomInfos/compDatas.json";

const LandingPage = () => {
  return (
    <main className="px-4 flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center text-4xl sm:text-6xl lg:text-8xl font-extrabold">
          <span className="animate-gradient text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-500">
            Find your Dream Job!
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-lg sm:text:xl">
          Explore job opportunities in Africa or find vetted candidates for your
          openings.
        </p>
      </section>
      <div className="flex gap-7 justify-center">
        <Link to="/post-job">
          <Button variant="lightPurple" size="xl">
            Find Candidates
          </Button>
        </Link>
        <Link to="/jobs">
          <Button
            variant="purple"
            class="bg-transparent text-white border-transparent relative overflow-hidden group glowing-border h-14 sm:h-16 rounded-md px-14 text-lg sm:text-lg font-bold"
          >
            Find Jobs
          </Button>
        </Link>

        {/* Buttons */}
      </div>
      {/* Carousel */}
      <Carousel className="w-full py-10">
        <CarouselContent className="flex justify-evenly">
          {compDatas.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 sm:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <section>{/* Cards */}</section>

      {/* Accordion */}
    </main>
  );
};

export default LandingPage;
