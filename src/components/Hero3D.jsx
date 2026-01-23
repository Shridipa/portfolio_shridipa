import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Cone, Points, PointMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

const GoldenSnitch = () => {
    const snitchRef = useRef();
    const leftWingRef = useRef();
    const rightWingRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Complex organic movement
        if (snitchRef.current) {
            snitchRef.current.position.y = Math.sin(time * 0.8) * 0.4 + Math.cos(time * 1.5) * 0.2;
            snitchRef.current.position.x = Math.sin(time * 0.5) * 0.8;
            snitchRef.current.rotation.y = time * 0.5;
            snitchRef.current.rotation.z = Math.sin(time * 0.5) * 0.2;
        }

        // Refined Wing flutter (high-speed)
        const flutter = Math.sin(time * 45) * 0.35;
        const wingAngle = Math.PI / 3;

        if (leftWingRef.current) {
            leftWingRef.current.rotation.z = -wingAngle + flutter;
            leftWingRef.current.rotation.y = Math.sin(time * 2) * 0.1;
        }
        if (rightWingRef.current) {
            rightWingRef.current.rotation.z = wingAngle - flutter;
            rightWingRef.current.rotation.y = -Math.sin(time * 2) * 0.1;
        }
    });

    return (
        <group ref={snitchRef}>
            {/* Golden Core */}
            <Sphere args={[0.38, 64, 64]}>
                <meshStandardMaterial
                    color="#fbbf24"
                    metalness={1}
                    roughness={0}
                    emissive="#fbbf24"
                    emissiveIntensity={1}
                />
                <pointLight intensity={15} distance={8} color="#fbbf24" />
            </Sphere>

            {/* Volumetric Glow Layer */}
            <Sphere args={[0.42, 64, 64]}>
                <MeshDistortMaterial
                    color="#fbbf24"
                    distort={0.5}
                    speed={4}
                    transparent
                    opacity={0.3}
                    side={THREE.DoubleSide}
                />
            </Sphere>

            {/* Wings - Premium Silver Mesh */}
            <group position={[0.4, 0.15, 0]} ref={rightWingRef}>
                <Cone args={[0.06, 2.2, 4]} rotation={[0, 0, -Math.PI / 2]}>
                    <meshStandardMaterial
                        color="#ffffff"
                        transparent
                        opacity={0.2}
                        metalness={1}
                        roughness={0}
                        wireframe
                    />
                </Cone>
            </group>

            <group position={[-0.4, 0.15, 0]} ref={leftWingRef}>
                <Cone args={[0.06, 2.2, 4]} rotation={[0, 0, Math.PI / 2]}>
                    <meshStandardMaterial
                        color="#ffffff"
                        transparent
                        opacity={0.2}
                        metalness={1}
                        roughness={0}
                        wireframe
                    />
                </Cone>
            </group>
        </group>
    );
};

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

            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <GoldenSnitch />
            </Float>

            <MagicAtmosphere />
        </>
    );
};

export default Hero3D;
