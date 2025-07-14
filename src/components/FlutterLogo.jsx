import { Float, useGLTF } from "@react-three/drei";

const FlutterLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/flutter.glb");
  return (
    <Float floatIntensity={1}>
      <group {...props} dispose={null} position={[10, -10, 3]}>
        {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.back}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.1}
      /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials["SVGMat.026"]}
          position={[-0.85, -0.048, 0.003]}
          rotation={[1.585, 0, 0]}
          scale={50}
        />
        {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials["SVGMat.027"]}
        position={[-0.052, -0.048, 0.003]}
        rotation={[1.585, 0, 0]}
        scale={50}
      /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials["SVGMat.028"]}
          position={[-0.9, -0.048, 0.5]}
          rotation={[1.585, 0, 0]}
          scale={50}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/flutter.glb");

export default FlutterLogo;
