"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      `In my web development projects, I've contributed to building diverse platforms 
      aimed at enhancing user experiences and addressing specific needs. For instance,
       the Bus Booking and Management System utilized a combination of HTML, CSS, JavaScript,
        Spring Boot, Java, REST, and MySQL to create a comprehensive solution for booking bus tickets with optimized backend APIs.`,
    href: "",
  },
  {
    num: "02",
    title: "Ai Solutions",
    description:
      `In my AI solutions projects, I've leveraged advanced natural language processing (NLP) 
      models and the RAG (Retrieval-Augmented Generation) framework to develop innovative and 
      intelligent solutions. By harnessing the power of machine learning algorithms and deep 
      learning techniques, I've created AI systems capable of understanding, generating, and 
      processing human language with remarkable accuracy and efficiency. `,
    href: "",
  },
  {
    num: "03",
    title: "Teaching Assistant",
    description:
      `In my role as a Teaching Assistant, I had the privilege of guiding and supporting students
       in their learning journey, particularly in the areas of data structures and algorithms in C++
        and Java. Through personalized instruction and hands-on assistance, I helped students grasp 
        complex concepts and overcome challenges in their coursework.`,
    href: "",
  },
  {
    num: "04",
    title: "Tech content creation",
    description:
      `As a content creator on YouTube, I have the privilege of sharing my knowledge and expertise with 
      a global audience. Through engaging and informative videos, I strive to educate and inspire viewers 
      on a range of topics, including software development, coding tutorials, and tech reviews.`,
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
