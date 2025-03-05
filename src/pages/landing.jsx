/* eslint-disable react/prop-types */
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import compDatas from "../randomInfos/compDatas.json";
import faq from "../randomInfos/faq.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
}) => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        {/* Text Section */}
        <div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left order-last lg:order-first">
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
              <Button
                asChild
                variant=""
                className="w-full sm:w-auto glowing-border text-white"
              >
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex order-first lg:order-last">
          <img
            src="/hiring1.png"
            alt="placeholder hero"
            className="transform scale-70 max-h-[400px] w-full rounded-md object-cover sm:max-h-[500px] lg:max-h-[800px] z-[-1]"
          />
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <main className="px-4 flex flex-col gap-10 sm:gap-20 py-20 sm:py-0">
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
          speed={50}
          gradient={false}
          loop={0}
          autoFill={true}
          pauseOnHover={true}
          play={true}
          direction="left"
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
      <section className="container px-4 mx-auto">
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
        <h2 className="py-4 my-6 text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl">
          FAQ
        </h2>
        <Accordion type="multiple" className="px-4 w-full bg-zinc-900/80">
          {" "}
          {/* Adding a background to the Accordion */}
          {faq.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
};

export default LandingPage;
