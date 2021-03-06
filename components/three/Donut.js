import React, { memo, useRef, Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Loader } from './index'

function Donut({ ...props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF('/gltf/donut.gltf');
    useFrame(() => {
        group.current.rotation.y += 0.0035
    })
    return (
        <Suspense fallback={<Loader />}>
            <group ref={group} {...props} dispose={null} scale={0.9} rotation={[0.8, 0, 0]} >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icing.geometry}
                    material={materials.Icing}
                    position={[0.07, 0.73, -0.03]}
                    scale={0.278}
                />
                {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes.Spirnkle_short.geometry}
                material={materials.Sprinkle_short_material}
                position={[-1.01, 0.44, 3.43]}
            /> */}
                {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sprinkle_curved.geometry}
                material={materials.Sprinkle_curved_material}
                position={[-0.62, 0.44, 1.72]}
            /> */}
                {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sprinkle_curved_s.geometry}
                material={materials.Sprinkle_curved_s_material}
                position={[0.01, 1, 1.57]}
            /> */}
                {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sprinkle_long.geometry}
                material={materials.Sprinkle_long_material}
                position={[-0.61, 0.44, 2.96]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sprinkle_medium.geometry}
                material={materials.Sprinkle_medium_material}
                position={[-1.48, 0.44, 2.08]}
            /> */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Donut.geometry}
                    material={materials.Donut}
                    position={[0.09, 0.57, -0.11]}
                    rotation={[-Math.PI, 1.22, -Math.PI]}
                    scale={0.27}
                />
            </group>
        </Suspense>
    );
}

useGLTF.preload('/gltf/donut.gltf')

export default memo(Donut)
