import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Box = () => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 2, 1]} />
      <meshBasicMaterial color={0x000000} />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas className='flex-1'>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
