import { useEffect, useRef } from 'react';

interface WaveData {
  value: number;
  targetValue: number;
  speed: number;
}

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);
  const waveDataRef = useRef<WaveData[]>(
    Array(8).fill(0).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const updateWaveData = () => {
      waveDataRef.current.forEach(data => {
        if (Math.random() < 0.01) {
          data.targetValue = Math.random() * 0.7 + 0.1;
        }
        const diff = data.targetValue - data.value;
        data.value += diff * data.speed;
      });
    };

    const draw = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // WhyFi color palette: #f72585, #7209b7, #3a0ca3, #4361ee, #4cc9f0
      const colors = [
        { r: 247, g: 37, b: 133 },   // #f72585
        { r: 114, g: 9, b: 183 },    // #7209b7
        { r: 58, g: 12, b: 163 },    // #3a0ca3
        { r: 67, g: 97, b: 238 },    // #4361ee
        { r: 76, g: 201, b: 240 },   // #4cc9f0
        { r: 247, g: 37, b: 133 },   // #f72585 (repeat for more waves)
        { r: 114, g: 9, b: 183 },    // #7209b7
        { r: 58, g: 12, b: 163 }     // #3a0ca3
      ];

      for (let i = 0; i < 8; i++) {
        const freq = waveDataRef.current[i].value * 7.0;
        ctx.beginPath();

        for (let x = 0; x < canvas.width; x += 1) {
          const normalizedX = (x / canvas.width) * 2 - 1;
          let px = normalizedX + i * 0.04 + freq * 0.03;
          let py = Math.sin(px * 10 + timeRef.current) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
          const canvasY = (py + 1) * canvas.height / 2;

          if (x === 0) {
            ctx.moveTo(x, canvasY);
          } else {
            ctx.lineTo(x, canvasY);
          }
        }

        const intensity = Math.min(1, freq * 0.3);
        const color = colors[i];
        const r = color.r;
        const g = color.g;
        const b = color.b;

        ctx.lineWidth = 1 + (i * 0.3);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.6)`;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
        ctx.shadowBlur = 5;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    };

    const animate = () => {
      timeRef.current += 0.02;
      updateWaveData();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}