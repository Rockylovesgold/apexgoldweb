"use client";

import { useEffect, useRef } from "react";

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface CandleLayer {
  x: number;
  y: number;
  w: number;
  h: number;
  wickU: number;
  wickD: number;
  bullish: boolean;
  dx: number;
  opacity: number;
  layer: "back" | "mid" | "front";
}

interface DataNode {
  x: number;
  y: number;
  r: number;
  opacity: number;
  phase: number;
}

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animId = 0;
    let paused = false;
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    let elapsed = 0;
    let lastTime = performance.now();

    function setSize() {
      if (!canvas || !ctx) return;
      W = window.innerWidth;
      H = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    setSize();

    const GRID_SPACING = 64;
    const candleLayers: CandleLayer[] = [];
    const backCount = Math.floor((W / 80) * 0.6);
    const midCount = Math.floor((W / 120) * 0.5);
    const frontCount = Math.floor((W / 160) * 0.4);

    for (let i = 0; i < backCount; i++) {
      candleLayers.push({
        x: rand(0, W),
        y: rand(0, H),
        w: rand(4, 10),
        h: rand(12, 36),
        wickU: rand(4, 14),
        wickD: rand(4, 14),
        bullish: Math.random() > 0.5,
        dx: rand(-0.08, 0.08),
        opacity: rand(0.015, 0.035),
        layer: "back",
      });
    }
    for (let i = 0; i < midCount; i++) {
      candleLayers.push({
        x: rand(0, W),
        y: rand(0, H),
        w: rand(6, 14),
        h: rand(18, 48),
        wickU: rand(6, 20),
        wickD: rand(6, 20),
        bullish: Math.random() > 0.5,
        dx: rand(-0.12, 0.12),
        opacity: rand(0.025, 0.055),
        layer: "mid",
      });
    }
    for (let i = 0; i < frontCount; i++) {
      candleLayers.push({
        x: rand(0, W),
        y: rand(0, H),
        w: rand(8, 16),
        h: rand(24, 56),
        wickU: rand(8, 24),
        wickD: rand(8, 24),
        bullish: Math.random() > 0.5,
        dx: rand(-0.18, 0.18),
        opacity: rand(0.04, 0.08),
        layer: "front",
      });
    }

    const nodeCount = Math.min(12, Math.floor((W * H) / 120000));
    const nodes: DataNode[] = Array.from({ length: nodeCount }, () => ({
      x: rand(0, W),
      y: rand(0, H),
      r: rand(0.8, 2),
      opacity: rand(0.04, 0.12),
      phase: rand(0, Math.PI * 2),
    }));

    const pathLen = 80;
    const pathPoints: number[] = Array.from({ length: pathLen }, (_, i) =>
      0.35 * H + 0.25 * H * Math.sin((i / (pathLen - 1)) * Math.PI * 1.8) + rand(-6, 6)
    );
    let pathOffset = 0;

    function frame(now: number) {
      if (paused || !ctx) {
        lastTime = now;
        animId = requestAnimationFrame(frame);
        return;
      }
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      elapsed += dt;

      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H / 2;

      const baseGrad = ctx.createLinearGradient(0, 0, 0, H);
      baseGrad.addColorStop(0, "#060608");
      baseGrad.addColorStop(0.4, "#0a0a0e");
      baseGrad.addColorStop(1, "#0e0e14");
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, W, H);

      const gridOpacity = 0.03 + 0.015 * Math.sin(elapsed * 0.3);
      ctx.strokeStyle = `rgba(255,255,255,${gridOpacity})`;
      ctx.lineWidth = 1;
      const xOff = (elapsed * 2) % GRID_SPACING;
      const yOff = (elapsed * 1.5) % GRID_SPACING;
      for (let x = -xOff; x < W + GRID_SPACING; x += GRID_SPACING) {
        ctx.beginPath();
        ctx.moveTo(Math.round(x), 0);
        ctx.lineTo(Math.round(x), H);
        ctx.stroke();
      }
      for (let y = -yOff; y < H + GRID_SPACING; y += GRID_SPACING) {
        ctx.beginPath();
        ctx.moveTo(0, Math.round(y));
        ctx.lineTo(W, Math.round(y));
        ctx.stroke();
      }

      candleLayers.forEach((c) => {
        c.x += c.dx;
        if (c.x < -c.w - 20) c.x = W + 20;
        if (c.x > W + c.w + 20) c.x = -20;

        const drawX = Math.round(c.x);
        const drawY = Math.round(c.y);
        const color = c.bullish ? "rgba(0,200,83," : "rgba(229,57,53,";
        const alpha = c.layer === "back" ? c.opacity * 0.7 : c.layer === "mid" ? c.opacity : c.opacity;
        ctx.fillStyle = color + alpha + ")";
        ctx.strokeStyle = color + alpha + ")";
        ctx.lineWidth = 1;

        const wickX = drawX + Math.round(c.w / 2);
        ctx.beginPath();
        ctx.moveTo(wickX, drawY - c.wickU);
        ctx.lineTo(wickX, drawY + c.h + c.wickD);
        ctx.stroke();
        ctx.fillRect(drawX, drawY, Math.round(c.w), Math.round(c.h));
      });

      pathOffset = (pathOffset + 8 * dt) % (W + 80);
      const pathStep = (W + 80) / (pathLen - 1);
      ctx.strokeStyle = `rgba(201,162,39,${0.055 + 0.025 * Math.sin(elapsed * 0.5)})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      let started = false;
      for (let i = 0; i < pathLen; i++) {
        const px = i * pathStep - pathOffset;
        if (px >= -2 && px <= W + 2) {
          if (!started) {
            ctx.moveTo(px, pathPoints[i]);
            started = true;
          } else ctx.lineTo(px, pathPoints[i]);
        }
      }
      ctx.stroke();

      nodes.forEach((n) => {
        const pulse = 0.7 + 0.3 * Math.sin(elapsed * 0.8 + n.phase);
        ctx.beginPath();
        ctx.arc(Math.round(n.x), Math.round(n.y), n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,162,39,${n.opacity * pulse})`;
        ctx.fill();
      });

      const vignette = ctx.createRadialGradient(cx, cy, H * 0.2, cx, cy, H * 0.9);
      vignette.addColorStop(0, "rgba(10,10,13,0)");
      vignette.addColorStop(0.6, "rgba(10,10,13,0.4)");
      vignette.addColorStop(1, "rgba(10,10,13,0.85)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, W, H);

      animId = requestAnimationFrame(frame);
    }

    animId = requestAnimationFrame(frame);

    function onVisibility() {
      paused = document.hidden;
      if (!paused) lastTime = performance.now();
    }
    document.addEventListener("visibilitychange", onVisibility);

    function onResize() {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setSize();
      }, 200);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
