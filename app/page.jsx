"use client"
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Shivam Kumar</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Backend Developer with expertise in API engineering, deployment using Spring Boot, Java, Docker,
              and OpenAPI. Led projects enhancing performance and developer experience through advanced NLP techniques,
              indexing optimizations, and seamless deployment processes.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <DownloadButton></DownloadButton>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};


const DownloadButton = () => {
  const handleDownload = () => {
    const filePath = `https://drive.google.com/file/d/1GgzdzPEGl6ZzQhfbog5N_Tjc7VKzuyR7/view?usp=sharing`;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'shivam_kumar.pdf'; 
    link.click();
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownload}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};
export default Home;
