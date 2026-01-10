import { useEffect, useRef } from 'react';
import './Starfield.css';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    let shootingStars = [];
    const numStars = 300;
    let mouseX = 0;
    let mouseY = 0;
    let wishText = null;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    // Initialize stars
    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.7 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
          originalX: 0,
          originalY: 0
        });
        stars[i].originalX = stars[i].x;
        stars[i].originalY = stars[i].y;
      }
    };

    // Create shooting star occasionally
    const createShootingStar = () => {
      if (Math.random() < 0.003) { // Low probability for shooting stars
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 60,
          speed: Math.random() * 10 + 8,
          angle: Math.random() * Math.PI / 6 + Math.PI / 6,
          opacity: 1
        });
        wishText = { opacity: 1.5 }; // Trigger "Make a wish!" text
      }
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animation loop
    const animate = () => {
      // Create gradient background with slight blue tint
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      gradient.addColorStop(0, '#000814');
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update stars
      stars.forEach(star => {
        // Twinkle effect
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3;

        // Mouse interaction - stars move away from cursor
        const dx = star.x - mouseX;
        const dy = star.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          star.x += (dx / distance) * force * 2;
          star.y += (dy / distance) * force * 2;
        } else {
          // Gradually return to original position
          star.x += (star.originalX - star.x) * 0.01;
          star.y += (star.originalY - star.y) * 0.01;
        }

        // Update position with velocity
        star.x += star.vx;
        star.y += star.vy;

        // Update original position too
        star.originalX += star.vx;
        star.originalY += star.vy;

        // Wrap around edges
        if (star.originalX < 0) {
          star.originalX = canvas.width;
          star.x = canvas.width;
        }
        if (star.originalX > canvas.width) {
          star.originalX = 0;
          star.x = 0;
        }
        if (star.originalY < 0) {
          star.originalY = canvas.height;
          star.y = canvas.height;
        }
        if (star.originalY > canvas.height) {
          star.originalY = 0;
          star.y = 0;
        }

        // Draw star with glow
        const finalOpacity = star.opacity + twinkle;

        // Outer glow
        ctx.beginPath();
        const glowGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 3);
        glowGradient.addColorStop(0, `rgba(91, 156, 255, ${finalOpacity * 0.3})`);
        glowGradient.addColorStop(1, 'rgba(91, 156, 255, 0)');
        ctx.fillStyle = glowGradient;
        ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Star itself
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
        ctx.fill();
      });

      // Draw shooting stars
      shootingStars = shootingStars.filter(star => {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.01;

        if (star.opacity > 0) {
          const tailX = star.x - Math.cos(star.angle) * star.length;
          const tailY = star.y - Math.sin(star.angle) * star.length;

          const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
          gradient.addColorStop(0.5, `rgba(91, 156, 255, ${star.opacity * 0.5})`);
          gradient.addColorStop(1, 'rgba(91, 156, 255, 0)');

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();

          return true;
        }
        return false;
      });

      // Draw and update "Make a wish!" text
      if (wishText && wishText.opacity > 0) {
        ctx.font = "italic 18px 'Times New Roman', serif";
        ctx.fillStyle = `rgba(255, 255, 224, ${Math.min(1, wishText.opacity)})`;
        ctx.textAlign = 'right';
        ctx.fillText("Make a wish!", canvas.width - 30, 40);
        wishText.opacity -= 0.01; // Fade out
      } else {
        wishText = null;
      }

      createShootingStar();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" />;
};

export default Starfield;
