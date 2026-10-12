"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 800);

    const isDark = resolvedTheme === "dark";

    // Palette: Salesforce Blue, Agentforce Indigo/Violet, Neon Cyan, Emerald
    const colors = isDark
      ? [
          "rgba(56, 189, 248, ", // Neon Sky
          "rgba(129, 140, 248, ", // Neon Indigo
          "rgba(168, 85, 247, ",  // Vivid Violet
          "rgba(34, 211, 238, ",  // Electric Cyan
          "rgba(52, 211, 153, ",  // Neon Emerald
        ]
      : [
          "rgba(2, 132, 199, ",  // Deep Sky
          "rgba(79, 70, 229, ",  // Deep Indigo
          "rgba(124, 58, 237, ", // Violet
          "rgba(13, 148, 136, ", // Teal
        ];

    const particleCount = width < 768 ? 35 : 75;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius: Math.random() * 2.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.4 + (isDark ? 0.45 : 0.35),
      });
    }

    // Mouse interaction tracking
    const mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 800;
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines between close particles
      const maxDistance = width < 768 ? 100 : 145;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * (isDark ? 0.38 : 0.22);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${opacity})`
              : `rgba(79, 70, 229, ${opacity})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        // Subtle mouse repulsion / attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= Math.cos(angle) * force * 2.2;
          p.y -= Math.sin(angle) * force * 2.2;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Draw particle with vivid glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.baseAlpha})`;
        ctx.shadowBlur = isDark ? 12 : 5;
        ctx.shadowColor = p.color + "0.8)";
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [resolvedTheme]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Animated interactive canvas for floating neural tech particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-90 transition-opacity duration-500"
      />

      {/* Ambient glowing radial orbs with smooth pulsing animation */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-sky-500/25 via-indigo-600/25 to-cyan-400/20 blur-[140px] rounded-full animate-pulse [animation-duration:6s] pointer-events-none" />
      <div className="absolute top-16 right-[10%] w-80 h-80 bg-violet-500/20 blur-[90px] rounded-full animate-pulse [animation-duration:8s] pointer-events-none" />
      <div className="absolute bottom-10 left-[8%] w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full animate-pulse [animation-duration:7s] pointer-events-none" />
    </div>
  );
}
