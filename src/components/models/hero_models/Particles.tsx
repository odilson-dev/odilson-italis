import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

interface Particle {
  position: [number, number, number];
  speed: number;
}

const Particles = ({ count = 200 }: { count?: number }) => {
  const mesh = useRef<THREE.Points>(null!);

  const [particles] = useState<Particle[]>(() => {
    const temp: Particle[] = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5, // higher starting point
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.005 + Math.random() * 0.001,
      });
    }
    return temp;
  });

  useFrame(() => {
    if (!mesh.current) return;
    const attr = mesh.current.geometry.attributes.position;
    const positions = attr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      let y = positions[i * 3 + 1];
      y -= particles[i]?.speed || 0;

      // If particle falls below threshold, reset it to the top.
      // Using a deterministic pseudo-random value based on index to avoid
      // "impure function" warnings in some strict linting environments.
      if (y < -2) {
        y = ((i * 0.618033) % 1) * 10 + 5;
      }

      positions[i * 3 + 1] = y;
    }
    attr.needsUpdate = true;
  });

  const initialPositions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      pos[i * 3] = p.position[0];
      pos[i * 3 + 1] = p.position[1];
      pos[i * 3 + 2] = p.position[2];
    });
    return pos;
  }, [count, particles]);

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          args={[initialPositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
