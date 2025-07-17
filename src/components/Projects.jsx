import React, { Suspense } from "react";
import { myProjects } from "../constants/index.js";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import DemoComputer from "./DemoComputer.jsx";
const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const projectCount = myProjects.length;
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  return (
    <section className="c-space my-20">
      <p className="head-text ">My Projects</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className=" rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Center>
              <Suspense fallback={null}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt=""
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit round-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt=""
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText text-white-100 text-lg">
              {currentProject.desc}
            </p>
            <p className="animatedText text-white-100 text-lg">
              {currentProject.subdesc}
            </p>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} src={tag} alt="" className="w-10 h-10">
                  <img src={tag.path} alt="" />
                </div>
              ))}
            </div>
            <a
              href={currentProject.href}
              target="_blank"
              className="flex items-center gap-2 text-white-600  transition-all duration-300 cursor-pointer"
            >
              <p>Check Out the Project</p>
              <img src="/assets/arrow-up.png" alt="" className="w-3 h-3" />
            </a>
          </div>
          <div className="flex items-center justify-between mt-5">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img src="/assets/left-arrow.png" alt="" className="w-4 h-4" />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img src="/assets/right-arrow.png" alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
