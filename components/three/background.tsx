import React, { useMemo, useRef } from 'react';
import { BufferAttribute, Mesh } from 'three';
import { useFrame } from '@react-three/fiber'

function BufferPoints({ count = 1200, color }: any) {
    const pointsRef = useRef<Mesh | null | any>(null)
    const points = useMemo(() => {
        const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5)
        return new BufferAttribute(new Float32Array(p), 3)
    }, [count])
    useFrame((): void => {
        if (pointsRef !== null) {
            pointsRef.current.rotation.y += 0.0005
        }
    })
    return (
        // <motion.points animate={{ x: 2 }}>
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach={'attributes-position'} {...points} />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color={color}
                sizeAttenuation={true}
            />
        </points>
    );
}

export default BufferPoints
