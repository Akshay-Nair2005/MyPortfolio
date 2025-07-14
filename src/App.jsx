import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls as OrbitalControls } from "@react-three/drei";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function RotatingCube() {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry radius={1} detail={0} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
    </mesh>
  );
}

function App() {
  return (
    // <Canvas
    //   style={{
    //     width: "100vw",
    //     height: "100vh",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <OrbitalControls enableZoom enablePan enableRotate />
    //   <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6} />
    //   <color attach="background" args={["#F0F0F0"]} />

    //   <RotatingCube />
    // </Canvas>
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
