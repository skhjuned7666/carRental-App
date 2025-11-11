"use client";

import Particles from "@/components/Particles";

const UnifiedBackground = ({ className = "" }) => {
  return (
    <div className={`fixed inset-0 z-0 ${className}`}>
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

export default UnifiedBackground;
