import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/voxel_computer.glb");
  const meshRef = useRef();
  const pivotRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.z += 0.1 * delta; // Subtract to rotate in the opposite direction
    // Subtract to rotate in the opposite direction
  });

  return (
    <group {...props} dispose={null}>

        <mesh
          castShadow
          receiveShadow
          ref={meshRef}
          geometry={nodes.Object_2.geometry}
          material={materials.palette}
          rotation={[-Math.PI / 2, 0, 0]}
        />

    </group>
  );
}

useGLTF.preload("/voxel_computer.glb");
