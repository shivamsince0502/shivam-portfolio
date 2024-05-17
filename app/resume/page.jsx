"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMysql, SiRedis, SiLinux, SiJsonwebtokens, SiKubernetes, SiDocker, SiPython, SiMongodb, SiSocketdotio, SiCplusplus, SiPostgresql, SiSpring, SiHibernate } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    `I'm a dedicated Software Engineer based in India. With expertise in backend development and deployment, 
    I excel in crafting efficient APIs and optimizing processes. I have a strong foundation in software development
     and enjoy building full-stack web applications from scratch. As a former teaching assistant at Coding Ninjas, 
     I've honed my skills in explaining complex concepts and problem-solving. Passionate about continuous learning 
     and collaboration, I strive to deliver high-quality solutions and contribute meaningfully to the field of software engineering.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Shivam Kumar",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 967 651 3535",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Telegram",
      fieldValue: "shiv.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "kumar.shivam.cse@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    `Throughout my career journey, I've had the privilege of delving into various aspects
     of software engineering and development. From my role as an Associate Software Engineer
      at Wavemaker, Inc., where I spearheaded backend API development and optimization efforts,
       to my stint as a Teaching Assistant, guiding and mentoring students in their learning endeavors,
        each experience has enriched my skill set and expanded my horizons.`,
  items: [
    {
      company: "Wavemaker Inc",
      position: "Backend Engineer",
      duration: "June 2023 - Present",
    },
    {
      company: "Wavemaker Inc",
      position: "Software Development Intern",
      duration: "Feb 2023 - May 2023",
    },
    {
      company: "Coding Ninjas",
      position: "Teaching Assistant",
      duration: "Dec 2022 - Feb 2023",
    },
    {
      company: "Web Development Intern",
      position: "LetsGrowMore",
      duration: "Jun 2022 - Jul 2022",
    },
    {
      company: "Code Math",
      position: "Coding Instructor",
      duration: "Dec 2021 - Mar 2022",
    }
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "My educational background includes a Bachelor's degree in Computer Science Engineering from Chaibasa Engineering College. Prior to that, I completed my intermediate education with a focus on Physics, Chemistry, and Mathematics.",
  items: [
    {
      institution: "Chaibasa Engineering College, Chaibasa",
      degree: "Computer Science Engineering",
      duration: "Aug 2019 - June 2023",
    },
    {
      institution: "ARTH - The School of Technologies ",
      degree: "Arth learner",
      duration: "Sep 2020 - Dec 2020",
    },
    {
      institution: "IIEC Rise ",
      degree: "Specialist in python with flask",
      duration: "Aug 2020 - Dec 2020",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "DAV Public School Dhori Bokaro",
      degree: "Intermediate",
      duration: "2022",
    }
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    `I have hands-on experience with a diverse range of technologies, including Java, Spring Boot, 
    Hibernate, and JavaScript for backend development. Additionally, I am proficient in frontend technologies
     such as HTML, CSS, and JavaScript frameworks like React.js.`,
  skillList: [
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiPython/>,
      name: "Python"
    },
    {
      icon: <SiCplusplus/>,
      name: "c++"
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <SiSpring />,
      name: "Spring Boot",
    },
    {
      icon: <SiHibernate />,
      name: "Hibernate",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiMysql />,
      name: "figma",
    },
    {
      icon: <SiRedis />,
      name: "Redis",
    },
    {
      icon: <SiLinux />,
      name: "linux",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiPostgresql />,
      name: "Postgresql",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiJsonwebtokens/>,
      name: "JWT"
    }, 
    {
      icon: <SiKubernetes/>,
      name: "Kubernetes"
    },
    {
      icon: <SiDocker/>,
      name: "Docker"
    },
    {
      icon: <SiMongodb/>,
      name: "MongoDb"
    },
    {
      icon: <SiSocketdotio/>,
      name: "socket"
    }
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
