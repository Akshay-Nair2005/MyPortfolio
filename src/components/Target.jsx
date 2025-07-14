import React from "react";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
  const targetref = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    gsap.to(targetref.current.position, {
      y: targetref.current.position.y + 0.1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <mesh
      {...props}
      ref={targetref}
      rotation={[0, Math.PI / 7, 0]}
      scale={1.5}
      position={[-10, -10, -1]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
