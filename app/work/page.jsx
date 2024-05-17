"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Bus Wallah",
    description:
      `Bus Booking System giving functionalities of giving path results to show shortest routes and busses available 
      on them and also the other paths , instead of it we can create our own path location with name of cities;`,
    stack: [{ name: "Spring Boot" }, { name: "Java" }, { name: "Javascript" }, { name: "REST" },{ name: "MYSQL" }, { name: "SMTP" }, { name: "Html" }, { name: "Css 3" }],
    image: "/assets/work/work1.png",
    live: "https://drive.google.com/file/d/1c-ytCyA8Zl0QB-fTX7NK8r1S5-KwjN-A/view?usp=share_link",
    github: "https://github.com/shivamsince0502/Bus-Wallah",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Online judge",
    description:
      `Online Judge is a web application that allows users to solve programming problems and get instant feedback
       on their solutions. It provides a platform for practicing coding skills, preparing for coding interviews,
        and hosting coding competitions.`,
    stack: [{ name: "Spring Boot" }, { name: "Java" }, { name: "Javascript" }, { name: "Next js" }, { name: "REST" }],
    image: "/assets/work/work2.png",
    live: "https://www.youtube.com/watch?v=bKeKlHllKws",
    github: "https://github.com/shivamsince0502/onlineJudge?tab=readme-ov-file",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Car Pool",
    description:
      `Carpooling app where Owner can login and create a ride and pooler can login and search for specifc rides and book
       them.Optimized spring apis on java for various crud operations and varried business logic`,
       stack: [{ name: "Spring Boot" }, { name: "Java" }, { name: "Javascript" }, { name: "Html" }, { name: "Css" }, { name: "REST" },{ name: "MYSQL" }, { name: "SMTP" }],
       image: "/assets/work/work3.png",
    live: "https://drive.google.com/file/d/1NNqNNVCqKQW29gE1HvYeXR5-VxEknc3U/view?usp=share_link",
    github: "https://github.com/shivamsince0502/carpool",
  },
  {
    num: "04",
    category: "Full Stack",
    title: "Code Head",
    description:
      `This a real-time code editor in which a room is created which can be joined by many other clients using the room id
       and username, and all can make changes simultaneously to the editor which will be displayed in real-time.`,
    stack: [{ name: "React.js" }, { name: "JavaScript" },{ name: "WebSocket.js" }, { name: "CSS" },{name : "HTML"}],
    image: "/assets/work/work4.png",
    live: "https://drive.google.com/file/d/17QTN3WAqZPFZQ9s9lel6BMCOYoWOUlqq/view?usp=share_link",
    github: "https://github.com/shivamsince0502/CodeHead?tab=readme-ov-file",
  },
  {
    num: "05",
    category: "Front End",
    title: "ToDo App",
    description:
      `Todo app to manage time Create the boxes we need to create Create the banner background image`,
    stack: [{ name: "Html.js" }, { name: "Css" }, {name : "javascript"}],
    image: "/assets/work/work5.png",
    live: "https://bucolic-conkies-7e1a2c.netlify.app/",
    github: "https://github.com/shivamsince0502/ToDoApp?tab=readme-ov-file",
  },
  {
    num: "06",
    category: "Front End",
    title: "Calculate Me",
    description:
      `This web app is to give user the ease to calculate basic maths calculations including Addition, Subtraction, Multiplication, Division following BODMAS rules`,
    stack: [{ name: "Html.js" }, { name: "Css" }, {name : "javascript"}],
    image: "/assets/work/work6.png",
    live: "https://extraordinary-blancmange-1ffc84.netlify.app/",
    github: "https://github.com/shivamsince0502/Calculate-Me",
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
