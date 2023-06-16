import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  // const earth = useGLTF("./planet/scene.gltf");
  const earth = useGLTF("./desktop_pcworld/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={55}
      // scale={13} v2
      position-y={0}
      position-x={1}
      // position-z={0.2}
      position-z={4}
      // position-z={0}
      rotation-y={-0.8}
      rotation-x={0.6}
      rotation-z={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0">
      <Canvas
        shadows
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 65,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        {/* <axesHelper args={[20]} /> */}
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotateSpeed={4}
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
