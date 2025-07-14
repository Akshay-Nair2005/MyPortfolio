import { Float, useGLTF } from "@react-three/drei";
const BookLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/magic_book_of_eden.glb");
  return (
    <Float floatIntensity={1}>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
          rotation={[10, 9, 9]}
          scale={0.025}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/magic_book_of_eden.glb");

export default BookLogo;
