import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Heromodel from "./Heromodel";
import CanvasLoader from "./CanvasLoader";
import Target from "./Target";
import { calculateSizes } from "../constants";
import ReactLogo from "./ReactLogo";
import FlutterLogo from "./FlutterLogo";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import BookLogo from "./BookLogo";
import HeroCamera from "./HeroCamera";
import Button from "./Button";
const Hero = () => {
  // const controls = useControls("Heromodel", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //   },
  //   scale: {
  //     value: 0.1,
  //     min: 0.01,
  //     max: 1,
  //   },
  // });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isSmall = useMediaQuery({ maxWidth: 440 });
  // const istablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes();

  // const calculateSizes = () => {
  // Define sizes based on device type
  // };

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-28 mt-28 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-semibold text-white sm:font-medium  text-center font-poppins">
          Hii, I am Akshay Nair <span className="waving-hand">👋</span>
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full ">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera>
              <Heromodel
                scale={isMobile ? 0.09 : 0.125}
                rotation={isMobile ? [0.24, 3.14, 0] : [0.24, 3.14, 0]}
                position={isMobile ? [0.9, -6.0, -8.1] : [0.9, -10.0, -8.1]}
                // scale={[controls.scale, controls.scale, controls.scale]}
                // rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
                // rotation={[0,-Math.PI, 0]}
                // position={[controls.positionX, controls.positionY, controls.positionZ]}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <FlutterLogo position={sizes.flutterLogoPosition} />
              <BookLogo position={sizes.HtmlLogoPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight
              position={[10, 10, 10]}
              intensity={1}
              color="#ffffff"
            />
          </Suspense>
        </Canvas>
        <div>
          <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space ">
            <a
              href="#contact"
              className="text-white/65 font-bold text-2xl hover:text-white transition-colors font-generalsans"
            >
              <Button
                name="Get in Touch"
                isBeam
                containerClass="sm:w-fit w-full sm:min-w-96"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
