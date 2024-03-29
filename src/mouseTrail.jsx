import { useEffect, useRef } from 'react';

const MouseTrail = () => {
  const canvasRef = useRef(null);
  const maxDistance = 90;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const devicePixelRatio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    const fixedCharacters = "JHONFRANCISDUARTEjhonfrancisduarte";
    let characterIndex = 0;

    const getNextCharacter = () => {
    const currentCharacter = fixedCharacters[characterIndex];
    characterIndex = (characterIndex + 1) % fixedCharacters.length;
    return currentCharacter;
    };

    var hue = 0;

    const createParticle = (x, y) => {
        const size = 20;
        const color = `hsl(${hue},92%,92%)`;
        const speedX = Math.random() * 2 - 1;
        const speedY = Math.random() * 2 - 1;
      
        return { x, y, size, color, speedX, speedY, character: getNextCharacter(), opacity: 1 };
      };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance <= maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = particles[i].color;
            ctx.font = `${particles[i].size}px sans-serif`;
            ctx.fillStyle = particles[i].color;
            ctx.fillText(particles[i].character, particles[i].x, particles[i].y);
          }
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hue++;
      connectParticles();
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size -= 0.2;
        if (particle.size <= 0.3) {
          particles.splice(index, 1);
        }
      });
    };

    animate();

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      for (let i = 0; i < 1; i++) {
        particles.push(createParticle(x, y));
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="trails-container" />;
};

export default MouseTrail;
