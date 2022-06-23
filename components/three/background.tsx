import React, { useMemo, useRef } from 'react';
import { BufferAttribute, Mesh, TextureLoader, AdditiveBlending, Points } from 'three';
import { useFrame, useLoader } from '@react-three/fiber'

function BufferPoints({ count = 1200, color }: any) {
    const rotationSpeed = 0.00145
    const particleSize: number = 0.2
    const pointsRef = useRef<Points | null>(null)
    const textureMap = useLoader(TextureLoader, '/particles/circle_02.png')
    const points = useMemo(() => {
        const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 10)
        return new BufferAttribute(new Float32Array(p), 3)
    }, [count])

    useFrame((): void => {
        if (pointsRef !== null) {
            pointsRef.current!.rotation.y += rotationSpeed
        }
    })
    return (
        // <motion.points animate={{ x: 2 }}>
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach={'attributes-position'} {...points} />
            </bufferGeometry>
            <pointsMaterial
                size={particleSize}
                color={color}
                map={textureMap}
                alphaMap={textureMap}
                depthWrite={false}
                blending={AdditiveBlending}
                sizeAttenuation={true}
            />
        </points>
    );
}

export default BufferPoints
