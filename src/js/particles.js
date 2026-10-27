/**
 * SUBTLE PARTICLES & LIGHT FILM GRAIN
 * Creates very delicate, slow-drifting dust motes in warm ambient light.
 * Kept minimal and non-distracting to prioritize reading the letter.
 */

export function initParticleEngine() {
  const canvas = document.getElementById('canvas-grain');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Keep count very gentle and unobtrusive (16 motes)
  const particleCount = 18;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.3 + 0.5,
      alpha: Math.random() * 0.12 + 0.05,
      speedX: (Math.random() - 0.5) * 0.12,
      speedY: (Math.random() - 0.5) * 0.14 - 0.04,
      isWarm: i % 2 === 0
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.isWarm 
        ? `rgba(243, 241, 235, ${p.alpha})`
        : `rgba(210, 220, 230, ${p.alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  render();
}
