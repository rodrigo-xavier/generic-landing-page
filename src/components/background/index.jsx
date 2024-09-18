// components/AnimatedBackground.jsx
import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const numShapes = 50;
    const shapes = [];

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const drawShape = (shape) => {
      ctx.fillStyle = shape.color;
      ctx.beginPath();
      if (shape.type === 'circle') {
        ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
      } else if (shape.type === 'square') {
        ctx.fillRect(shape.x, shape.y, shape.size, shape.size);
      }
      ctx.fill();
    };

    const updateShape = (shape) => {
      shape.x += shape.dx;
      shape.y += shape.dy;

      if (shape.x < 0 || shape.x > canvas.width) shape.dx *= -1;
      if (shape.y < 0 || shape.y > canvas.height) shape.dy *= -1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.forEach(shape => {
        updateShape(shape);
        drawShape(shape);
      });
      requestAnimationFrame(animate);
    };

    // Initialize shapes
    for (let i = 0; i < numShapes; i++) {
      shapes.push({
        x: getRandomInt(0, canvas.width),
        y: getRandomInt(0, canvas.height),
        size: getRandomInt(10, 30),
        dx: getRandomInt(-2, 2),
        dy: getRandomInt(-2, 2),
        color: `rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, 0.5)`,
        type: Math.random() > 0.5 ? 'circle' : 'square',
      });
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default AnimatedBackground;
