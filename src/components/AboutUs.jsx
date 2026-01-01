import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import Button from "./Button";

const AboutUs = () => {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      // Smooth transition to specific location
      globeRef.current.pointOfView(
        { lat: 19.0211, lng: 73.5134, altitude: 1.5 }, // altitude controls zoom
        3000 // duration in ms
      );
    }
  }, []);
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("nairakshay2005@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/3dboy.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Akshay Nair</p>
              <p className="grid-subtext">
                With 1 years of work experience and 4 years of coding, I have
                honed my skills in fullstack development, creating dynamic and
                responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/techstack.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={350}
                width={350}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: "19.0211",
                    lng: "73.8321",
                    text: "I'm here!",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I&apos;m very flexible to work remotely
              </p>
              <p className="grid-subtext">
                I&apos;m based in Mumbai, India, but I&apos;m open to working
                remotely.I can adapt to different time zones and am comfortable
                with remote communication.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-16" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">
                My Passion is Tea,Reading and Coding
              </p>
              <p className="grid-subtext">
                I love developing applications that are user-friendly,
                efficient, and visually appealing. Coding isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new
                technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/ocufox.png"
              alt="grid-3"
              className="w-full sm:h-[246px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Ocufox Technologies Pvt Ltd</p>
              <p className="grid-subtext">
                Collaborating with senior developers for over and year to work
                on cutting edge projects, ensuring the projects usability,
                scalability,maintainability,working as a full Stack developer,
                integrating frontend andbackend solutions and contributions to
                projects.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container ">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[200px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  nairakshay2005@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
