import React, { useRef, memo, Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Loader } from './index'

function Hamburger({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/gltf/hamburger.gltf');
  useFrame(() => {
    group.current.rotation.y += 0.0035
  })

  return (
    <Suspense fallback={<Loader />}>
      <group ref={group} {...props} dispose={null} scale={[0.25, 0.25, 0.25]} position={[0, 0, 0]} rotation={[0.5, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cheese.geometry}
          material={materials.cheeseMaterial}
          position={[0.28, 3.15, -0.3]}
          scale={0.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bun_bottom.geometry}
          material={materials.bunMaterial}
          position={[0.14, -2.31, 0.12]}
          scale={[-5.22, -4.33, -5.22]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bun_top.geometry}
          material={materials.bunMaterial}
          position={[0.2, 7.89, 0.06]}
          rotation={[-3.12, -0.58, 0.02]}
          scale={-5.13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Meat.geometry}
          material={materials.meatMaterial}
          position={[0.03, -0.14, 0]}
          scale={[-5.09, -2.9, -5.09]}
        />
      </group>
    </Suspense>
  );
}

useGLTF.preload('/gltf/hamburger.gltf')

export default memo(Hamburger)
