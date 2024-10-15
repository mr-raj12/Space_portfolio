"use client";
import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';

// Define the type for randomInSphere function
const randomInSphere = (radius: number, count: number): Float32Array => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const phi = Math.random() * 2 * Math.PI; // Random angle
        const costheta = Math.random() * 2 - 1; // Random z
        const theta = Math.acos(costheta);
        const r = radius * Math.cbrt(Math.random()); // Random radius
        positions[i * 3] = r * Math.sin(theta) * Math.cos(phi); // x
        positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi); // y
        positions[i * 3 + 2] = r * Math.cos(theta); // z
    }
    return positions;
};

const StarBackground = (props: any) => {
    const ref = useRef<any>(null);  // Specify type of ref
    const [sphere] = useState<Float32Array>(() => randomInSphere(1.2, 5000)); // Type for sphere

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere} // You can also try changing this to "geometry" if issue persists
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#fff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className="w-full h-screen fixed inset-0 z-[20]">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);


export default StarsCanvas;
