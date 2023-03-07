import React, { useMemo, useRef } from 'react';
import { BufferAttribute, TextureLoader, AdditiveBlending, Points, Vector3 } from 'three';
import { useFrame, useLoader } from '@react-three/fiber'


function BufferPoints({ count = 400, color = '#ccc' }: any) {
    const rotationSpeed = 0.0005
    const particleSize = 0.4
    const pointsRef = useRef<Points | null>(null)
    const textureMap = useLoader(TextureLoader, '/particles/icons8-html-55.png')
    const points = useMemo(() => {
        const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 12)
        return new BufferAttribute(new Float32Array(p), 3)
    }, [count])

    useFrame(() => {
        if (pointsRef !== null) {
            pointsRef.current!.rotation.y -= rotationSpeed
        }
    })
    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach={'attributes-position'} {...points} />
            </bufferGeometry>
            <pointsMaterial
                size={particleSize}
                color={color}
                map={textureMap}
                depthWrite={false}
                blending={AdditiveBlending}
                sizeAttenuation={true}
            />
        </points>
    );
}

export default BufferPoints
