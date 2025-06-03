'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Starfield() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  const options = useMemo(() => ({
    background: {
      color: {
        value: "#0b0b1e", // deep galaxy
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: { enable: false },
      },
    },
    particles: {
      number: {
        value: 85,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#c084fc", "#7e22ce", "#8b5cf6", "#ffffff"], // 💫 Galaxy colors
      },
      shape: {
        type: "star", // ⭐ make them stars!
        options: {
          star: {
            sides: 5,
          },
        },
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.5,
          sync: false,
        },
      },
      opacity: {
        value: 0.6,
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.3,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#8a2be2",
        opacity: 0.25,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      style={{
        position: "absolute",
        zIndex: 0,
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    />
  );
}
