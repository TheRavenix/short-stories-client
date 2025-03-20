"use client";

import { useEffect, useRef } from "react";

import styles from "./HeroCanvas.module.scss";

interface Props {}

interface Orb {
  x: number;
  y: number;
  size: number;
  fillStyle: string;
  speed: number;
}

const HeroCanvas: React.FC<Props> = () => {
  const canvas = useRef<HTMLCanvasElement>(null!);
  const width = useRef<number>(null!);
  const height = useRef<number>(null!);
  const animationId = useRef<number>(null!);
  const lastTime = useRef<number>(null);
  const orbs = useRef<Orb[]>([]);
  const generateOrbInterval = useRef<NodeJS.Timeout>(null!);
  const orbsLength = useRef(0);
  const resizeTimeout = useRef<NodeJS.Timeout>(null!);
  const prevWindowWidth = useRef<number>(null);

  useEffect(() => {
    const ctx = canvas.current?.getContext("2d")!;

    function draw() {
      const root = document.documentElement;
      const primaryColor = getComputedStyle(root)
        .getPropertyValue("--primary")
        .trim();

      ctx.clearRect(0, 0, width.current, height.current);

      for (const orb of orbs.current) {
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
        ctx.fillStyle = primaryColor;
        ctx.shadowColor = primaryColor;
        ctx.shadowBlur = 15;
        ctx.globalAlpha = 0.8 + Math.sin(Date.now() * 0.004) * 0.2;
        ctx.fill();
        ctx.closePath();
      }
    }

    function update(time: number) {
      if (!lastTime.current) lastTime.current = time;

      const deltaTime = (time - lastTime.current) / 1000;
      lastTime.current = time;

      for (let i = 0; i < orbs.current.length; i++) {
        const orb = orbs.current[i];
        orb.x += Math.sin(Date.now() * 0.0005 + orb.speed * deltaTime) * 0.2;
        orb.y += Math.cos(Date.now() * 0.0003 + orb.speed * deltaTime) * 0.2;

        if (orb.y <= 0) {
          orbs.current.splice(i, 1);
          continue;
        }
      }
    }

    function animate(time?: number) {
      if (typeof time === "undefined") {
        animationId.current = requestAnimationFrame(animate);
        return;
      }

      draw();
      update(time);
      animationId.current = requestAnimationFrame(animate);
    }

    function changeWidth(w: number) {
      width.current = w;

      if (canvas.current) {
        canvas.current.width = w;
      }
    }

    function changeHeight(h: number) {
      height.current = h;

      if (canvas.current) {
        canvas.current.height = h;
      }
    }

    function resetOrbs() {
      const root = document.documentElement;
      const primaryColor = getComputedStyle(root)
        .getPropertyValue("--primary")
        .trim();

      orbsLength.current = width.current > 576 ? 25 : 15;
      orbs.current = [];

      for (let i = 0; i < orbsLength.current; i++) {
        orbs.current.push({
          x: Math.random() * width.current,
          y: Math.random() * height.current,
          fillStyle: primaryColor,
          size: 2.5,
          speed: 100,
        });
      }
    }

    function handleOnResize() {
      const newWidth = window.innerWidth;

      if (newWidth !== prevWindowWidth.current) {
        clearTimeout(resizeTimeout.current);

        resizeTimeout.current = setTimeout(() => {
          changeWidth(window.innerWidth);
          changeHeight((80 * window.innerHeight) / 100);
          resetOrbs();
        }, 250);

        prevWindowWidth.current = newWidth;
      }
    }

    function init() {
      prevWindowWidth.current = window.innerWidth;

      window.addEventListener("resize", handleOnResize);

      changeWidth(window.innerWidth);
      changeHeight((80 * window.innerHeight) / 100);
      resetOrbs();
      animate();
    }

    init();

    return () => {
      cancelAnimationFrame(animationId.current);
      clearInterval(generateOrbInterval.current);
      window.removeEventListener("resize", handleOnResize);
      clearTimeout(resizeTimeout.current);
    };
  }, []);

  return <canvas className={styles.canvas} ref={canvas} />;
};

export { HeroCanvas };
