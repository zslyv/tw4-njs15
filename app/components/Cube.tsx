'use client';

import { JSX, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

type ThreeMeshProps = {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
} & JSX.IntrinsicElements['mesh'];

export default function RotatingCube(props: ThreeMeshProps) {
  const meshRef = useRef<Mesh>(null!);

  useFrame((_state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.1;
  });

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ff7f50" roughness={0.2} metalness={0.8} />
    </mesh>
  );
}