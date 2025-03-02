import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import compDatas from "../randomInfos/compDatas.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Hero3Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string,
      url: string,
    },
    secondary?: {
      text: string,
      url: string,
    },
  };
  reviews?: {
    count: number,
    avatars: {
      src: string,
      alt: string,
    }[],
  };
}

const Hero3 = ({
  heading = "Blocks built with Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Sign Up",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Get Started",
      url: "https://www.shadcnblocks.com",
    },
  },
  reviews = {
    count: 200,
    avatars: [
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
        alt: "Avatar 1",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
        alt: "Avatar 2",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
        alt: "Avatar 3",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
        alt: "Avatar 4",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
        alt: "Avatar 5",
      },
    ],
  },
}: Hero3Props) => {
  return (
    <section>
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl">
            {heading}
          </h1>
          <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
            {description}
          </p>
          <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <span className="inline-flex items-center -space-x-4">
              {reviews.avatars.map((avatar, index) => (
                <Avatar key={index} className="size-12 border">
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                </Avatar>
              ))}
            </span>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="size-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-left font-medium">
                from {reviews.count}+ reviews
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons.primary && (
              <Button asChild className="w-full sm:w-auto">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
            {buttons.secondary && (
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
          </div>
        </div>
        <div className="flex">
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder hero"
            className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]"
          />
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <main className="px-4 flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <Hero3
        heading="Find your Dream Job!"
        description="Explore job opportunities in Africa or find vetted candidates for your openings."
        buttons={{
          primary: {
            text: "Find Candidates",
            url: "/post-job",
          },
          secondary: {
            text: "Find Jobs",
            url: "/jobs",
          },
        }}
      />

      {/* Marquee for Infinite Scroll of Logos */}
      <section className="py-10">
        <Marquee
          speed={50} // Adjust speed for smoother scrolling
          gradient={false} // Disable the gradient effect for smoother transition
          loop={0} // Infinite loop
          autoFill={true} // Automatically fill the space when necessary
          pauseOnHover={true} // Pause on hover for user interaction
          play={true} // Ensure the marquee is playing by default
          direction="left" // Scroll direction from left to right
        >
          <div className="flex">
            {compDatas.map(({ name, id, path }) => (
              <div key={id} className="flex-shrink-0 mx-4">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cards */}
        <Card className="bg-zinc-900/80">
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Discover new job opportunities, submit your applications, and stay
            on top of your progress.
          </CardContent>
        </Card>
        <Card className="bg-zinc-900/80">
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Advertise open positions, review candidate applications, and hire
            the best talent for your company.
          </CardContent>
        </Card>
      </section>

      {/* Accordion */}
    </main>
  );
};

export default LandingPage;
