"use client";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function OrganicDigitalAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        // Resize handler
        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        // Particles representing "Digital data acting like Nature"
        const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
        const count = 60;

        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1
            });
        }

        let animationFrameId: number;
        let time = 0;

        const render = () => {
            time += 0.005;
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "#4A5D4E"; // Accent nature color

            particles.forEach((p, i) => {
                // Organic movement: Perlin-noise-like flow
                p.x += p.vx + Math.sin(time + p.y * 0.002) * 0.2;
                p.y += p.vy + Math.cos(time + p.x * 0.002) * 0.2;

                // Wrap around
                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                // Draw connections (Digital network feeling)
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(74, 93, 78, ${0.15 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <motion.div ref={containerRef} style={{ opacity }} className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <canvas ref={canvasRef} className="w-full h-full" />
        </motion.div>
    );
}
