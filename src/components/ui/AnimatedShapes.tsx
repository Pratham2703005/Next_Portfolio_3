"use client";

import { useEffect, useRef } from 'react';

export default function AnimatedShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const shapes: Shape[] = [];
    const shapeCount = 8; // Reduced from 15 to 8 for better performance

    class Shape {
      x: number;
      y: number;
      size: number;
      type: 'circle' | 'square' | 'zigzag'  | 'arc';
      speed: number;
      angle: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 60 + 40;
        this.type = ['circle', 'square', 'spiral', 'arc'][Math.floor(Math.random() * 5)] as any;
        this.speed = Math.random() * 0.3 + 0.1;
        this.angle = Math.random() * Math.PI * 2;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.17 + 0.07;
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = `rgba(0, 255, 65, ${this.opacity})`;
        ctx.lineWidth = 2;

        switch (this.type) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.stroke();
            break;

          case 'square':
            ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size);
            break;

          case 'zigzag':
            ctx.beginPath();
            const zigzagPoints = 8;
            for (let i = 0; i < zigzagPoints; i++) {
              const x = (i / zigzagPoints - 0.5) * this.size * 2;
              const y = (i % 2 === 0 ? -1 : 1) * this.size / 2;
              i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.stroke();
            break;


          case 'arc':
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 1.5);
            ctx.stroke();
            break;
        }

        ctx.restore();
      }

      update() {
  // move
  this.x += Math.cos(this.angle) * this.speed;
  this.y += Math.sin(this.angle) * this.speed;
  this.rotation += this.rotationSpeed;

  // bounce on edges
  if (this.x - this.size < 0 || this.x + this.size > canvas!.width) {
    this.angle = Math.PI - this.angle; // reverse x direction
  }
  if (this.y - this.size < 0 || this.y + this.size > canvas!.height) {
    this.angle = -this.angle; // reverse y direction
  }
}
    }

    // Create shapes
    for (let i = 0; i < shapeCount; i++) {
      shapes.push(new Shape());
    }

    // Animation loop with throttling for better performance
    let lastTime = 0;
    const fps = 30; // Reduced from 60fps to 30fps
    const interval = 1000 / fps;

    function animate(currentTime: number) {
      if (!ctx || !canvas) return;
      
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime >= interval) {
        lastTime = currentTime - (deltaTime % interval);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        shapes.forEach(shape => {
          shape.update();
          shape.draw();
        });
      }

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    // Handle resize with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas!.width = window.innerWidth;
        canvas!.height = window.innerHeight;
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
