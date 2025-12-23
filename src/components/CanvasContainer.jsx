import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

const CanvasContainer = ({ children, className }) => {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
};

export default CanvasContainer;
