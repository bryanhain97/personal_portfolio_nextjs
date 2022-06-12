import React, { useMemo } from 'react';
import { BufferAttribute } from 'three';

function BufferPoints({ count = 1000, color }: any) {
    const points = useMemo(() => {
        const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5)
        return new BufferAttribute(new Float32Array(p), 3)
    }, [count])
    return (
        <points>
            <bufferGeometry boundingSphere={null}>
                <bufferAttribute attach={'attributes-position'} {...points} />
            </bufferGeometry>
            <pointsMaterial
                size={0.07}
                color={color}
                sizeAttenuation={true}
            />
        </points>
    );
}

export default BufferPoints
