/**
 * PARTICLES & FILM GRAIN CANVAS ENGINE
 * Creates subtle floating dust particles and real-time grain noise.
 */

export function initParticleEngine() {
  const canvas = document.getElementById('canvas-grain');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Resize handler
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Dust Particles Array
  const particleCount = 45;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.3 - 0.1,
      pulse: Math.random() * 0.02
    });
  }

  // Animation Loop
  function render() {
    ctx.clearRect(0, 0, width, height);

    // Render Floating Particles
    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap around edges
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw particle glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(191, 161, 117, ${p.alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  render();
}
