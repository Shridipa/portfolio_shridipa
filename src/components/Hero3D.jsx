import { useState } from "react";
import { Float, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";



const MagicAtmosphere = () => {
    const [sparks] = useState(() => [...Array(50)].map((_, i) => ({
        key: i,
        pos: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20]
    })));

    return (
        <>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Floating Sparkles */}
            {sparks.map((spark) => (
                <Float key={spark.key} position={spark.pos} speed={2}>
                    <Sphere args={[0.015, 8, 8]}>
                        <meshStandardMaterial
                            color="#fbbf24"
                            emissive="#fbbf24"
                            emissiveIntensity={4}
                        />
                    </Sphere>
                </Float>
            ))}
        </>
    );
};

const Hero3D = () => {
    return (
        <>
            <ambientLight intensity={0.2} />
            {/* Cinematic Key Light */}
            <spotLight
                position={[10, 20, 10]}
                intensity={3}
                color="#fef3c7"
                angle={0.15}
                penumbra={1}
                castShadow
            />
            {/* Mood Light (Gryffindor Red) */}
            <pointLight
                position={[-10, -5, -10]}
                color="#7f1d1d"
                intensity={5}
            />

            <MagicAtmosphere />
        </>
    );
};

export default Hero3D;
