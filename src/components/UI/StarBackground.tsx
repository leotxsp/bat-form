import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";

const particleCount = 40;
const flareCount = 10;

interface Particle {
  x: number;
  y: number;
  r: number;
  opacity: number;
  dx: number; // drift speed x
  dy: number; // drift speed y
}

function createParticles(width: number, height: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      opacity: Math.random(),
      dx: (Math.random() - 0.5) * 0.3, // small drift horizontally
      dy: (Math.random() - 0.5) * 0.1, // small drift vertically
    });
  }
  return particles;
}

function createFlares(width: number, height: number): Particle[] {
  const flares: Particle[] = [];
  for (let i = 0; i < flareCount; i++) {
    flares.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 80 + 40,
      opacity: Math.random() * 0.05,
      dx: 0,
      dy: 0,
    });
  }
  return flares;
}

const StarBackground = () => {
  const { width, height } = useWindowDimensions();

  const [particles, setParticles] = useState<Particle[]>(() =>
    createParticles(width, height)
  );
  const [flares, setFlares] = useState<Particle[]>(() =>
    createFlares(width, height)
  );

  // Regenerate on rotation
  useEffect(() => {
    setParticles(createParticles(width, height));
    setFlares(createFlares(width, height));
  }, [width, height]);

  // Animate/flicker with plain React
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => {
          let newX = p.x + p.dx;
          let newY = p.y + p.dy;

          // wrap around screen edges
          if (newX < 0) newX = width;
          if (newX > width) newX = 0;
          if (newY < 0) newY = height;
          if (newY > height) newY = 0;

          return {
            ...p,
            x: newX,
            y: newY,
            opacity: Math.min(
              1,
              Math.max(0, p.opacity + (Math.random() - 0.5) * 0.05)
            ),
          };
        })
      );
    }, 50); // update every 50ms for smoother movement
    return () => clearInterval(interval);
  }, [width, height]);

  return (
    <Canvas style={{ position: "absolute", top: 0, left: 0, width, height }}>
      <Group>
        {particles.map((p, i) => (
          <Circle
            key={`p-${i}`}
            cx={p.x}
            cy={p.y}
            r={p.r}
            color="white"
            opacity={p.opacity}
          />
        ))}
        {flares.map((f, i) => (
          <Circle
            key={`f-${i}`}
            cx={f.x}
            cy={f.y}
            r={f.r}
            color="white"
            opacity={f.opacity}
          />
        ))}
      </Group>
    </Canvas>
  );
};

export default StarBackground;
