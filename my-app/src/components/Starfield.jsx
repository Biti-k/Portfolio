import { useEffect, useRef } from "react";

const Starfield = ({ numStars = 180, fps = 40 }) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let screenW = window.innerWidth;
    let screenH = window.innerHeight;

    canvas.width = screenW;
    canvas.height = screenH;

    // Clase Star
    class Star {
      constructor(x, y, length, opacity) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.opacity = opacity;
        this.factor = 1;
        this.increment = Math.random() * 0.03;
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI / 10);

        if (this.opacity > 1) {
          this.factor = -1;
        } else if (this.opacity <= 0) {
          this.factor = 1;
          this.x = Math.random() * screenW;
          this.y = Math.random() * screenH;
        }

        this.opacity += this.increment * this.factor;

        ctx.beginPath();
        for (let i = 5; i--;) {
          ctx.lineTo(0, this.length);
          ctx.translate(0, this.length);
          ctx.rotate(Math.PI * 2 / 10);
          ctx.lineTo(0, -this.length);
          ctx.translate(0, -this.length);
          ctx.rotate(-(Math.PI * 6 / 10));
        }

        ctx.lineTo(0, this.length);
        ctx.closePath();
        ctx.fillStyle = `rgba(255, 255, 200, ${this.opacity})`;
        ctx.shadowBlur = 5;
        ctx.shadowColor = "#ffff33";
        ctx.fill();
        ctx.restore();
      }
    }

    // Crear estrellas iniciales
    starsRef.current = Array.from({ length: numStars }, () => {
      const x = Math.random() * screenW;
      const y = Math.random() * screenH;
      const length = 1 + Math.random() * 2;
      const opacity = Math.random();
      return new Star(x, y, length, opacity);
    });

    // Animar
    const animate = () => {
      context.clearRect(0, 0, screenW, screenH);
      starsRef.current.forEach(star => star.draw(context));
    };

    const interval = setInterval(animate, 1000 / fps);

    // Ajuste al redimensionar
    const handleResize = () => {
      screenW = window.innerWidth;
      screenH = window.innerHeight;
      canvas.width = screenW;
      canvas.height = screenH;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [numStars, fps]);

  return (
    <canvas
      ref={canvasRef}
      id="space"
      className="bg-black fixed top-0 left-0 w-full h-full"
    />
  );
};

export default Starfield;
