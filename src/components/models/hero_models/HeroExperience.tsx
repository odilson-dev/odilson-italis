import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Room } from "./Room";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const prefersReducedMotion = useMediaQuery({
    query: "(prefers-reduced-motion: reduce)",
  });
  const [inView, setInView] = useState(true);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "120px", threshold: 0 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [container]);

  if (prefersReducedMotion) {
    return <div ref={setContainer} className="h-full w-full" />;
  }

  return (
    <div ref={setContainer} className="h-full w-full">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={inView ? "always" : "never"}
        gl={{
          antialias: !isMobile,
          powerPreference: "high-performance",
          alpha: true,
        }}
        camera={{ position: [0, 0, 15], fov: 45 }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.2} color="#1a1a40" />
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          enabled={inView}
        />

        <Suspense fallback={null}>
          <HeroLights />
          {!isMobile && <Particles count={isTablet ? 40 : 80} />}
          <group
            scale={isMobile ? 0.7 : 1}
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Room enableBloom={!isMobile} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroExperience;
