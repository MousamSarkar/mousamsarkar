import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { AxesHelper } from "three";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.2} />
      <axesHelper size={3} xAxisColor="#f8fafc" />
      <directionalLight position={[0, 0, 0.05]} color="#fb7185" intensity={3} />
      <directionalLight
        position={[0, -1, 0.05]}
        color="#f8fafc"
        intensity={2.0}
      />
      <directionalLight
        position={[0.5, 0, 0.05]}
        color="#f8fafc"
        intensity={2.0}
      />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/**Mirroring using 2*Math.PI */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      // dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
        renderer.dispose() renderer.forceContextLoss()
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
