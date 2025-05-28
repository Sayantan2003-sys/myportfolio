import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export const BackgroundParticles = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#1f1f1f" },
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          links: {
            enable: true,
            distance: 120,
            color: "#00bfff",
            opacity: 0.4,
          },
          move: { enable: true, speed: 1 },
          color: { value: "#00bfff" },
        },
      }}
    />
  );
};
