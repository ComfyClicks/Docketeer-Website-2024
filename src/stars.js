// A decorative perspective star field. Canvas keeps the space identity without
// downloading a 3D engine or allocating hundreds of sphere geometries.
const button = document.getElementById('background-motion');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d', { alpha: false });

if (context && button) {
  button.hidden = false;
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);
  const events = new AbortController();
  const options = { signal: events.signal };
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const stars = Array.from({ length: 240 }, () => ({
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
    depth: Math.random() * 0.9 + 0.1,
  }));
  let width;
  let height;
  let background;
  // The gradient is static between resizes. Cache a one-pixel-wide strip
  // instead of rasterizing a full-screen gradient on every frame.
  const backdrop = document.createElement('canvas');
  const backdropContext = backdrop.getContext('2d', { alpha: false });
  let frame;
  let previousTime;
  let paused = false;
  const frameInterval = 1000 / 30;

  function draw() {
    if (backdropContext) context.drawImage(backdrop, 0, 0, width, height);
    else {
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);
    }
    context.fillStyle = 'white';
    context.beginPath();
    for (const star of stars) {
      const x = width / 2 + star.x * width / (2 * star.depth);
      const y = height / 2 + star.y * height / (2 * star.depth);
      if (x < 0 || y < 0 || x > width || y > height) continue;
      const radius = Math.min(1.6, 0.45 / star.depth);
      context.moveTo(x + radius, y);
      context.arc(x, y, radius, 0, Math.PI * 2);
    }
    context.fill();
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    // Bound the backing-store cost on high-density mobile displays.
    const scale = Math.min(window.devicePixelRatio || 1, width <= 768 ? 1 : 2);
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    background = context.createLinearGradient(0, 0, 0, height);
    background.addColorStop(0, '#000000');
    background.addColorStop(1, '#000019');
    if (backdropContext) {
      backdrop.width = 1;
      backdrop.height = canvas.height;
      const gradient = backdropContext.createLinearGradient(0, 0, 0, backdrop.height);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(1, '#000019');
      backdropContext.fillStyle = gradient;
      backdropContext.fillRect(0, 0, 1, backdrop.height);
    }
    draw();
  }

  function stop() {
    cancelAnimationFrame(frame);
    frame = undefined;
    previousTime = undefined;
  }

  function animate(time) {
    frame = requestAnimationFrame(animate);
    // Limit drawing, not movement speed. The small tolerance accommodates
    // rounding of display timestamps at 60Hz and 120Hz.
    if (previousTime !== undefined && time - previousTime < frameInterval - 0.5) return;
    const elapsed = previousTime === undefined ? 0 : Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;
    for (const star of stars) {
      star.depth -= elapsed * 0.08;
      if (star.depth <= 0.1) {
        star.depth = 1;
        star.x = Math.random() * 2 - 1;
        star.y = Math.random() * 2 - 1;
      }
    }
    draw();
  }

  function updateMotion() {
    stop();
    button.disabled = preference.matches;
    button.textContent = preference.matches ? 'Background motion reduced' : paused ? 'Play background' : 'Pause background';
    if (!paused && !preference.matches && !document.hidden) frame = requestAnimationFrame(animate);
  }

  button.addEventListener('click', () => { paused = !paused; updateMotion(); }, options);
  preference.addEventListener('change', updateMotion, options);
  document.addEventListener('visibilitychange', updateMotion, options);
  window.addEventListener('resize', resize, options);
  window.addEventListener('pagehide', stop, options);
  window.addEventListener('pageshow', updateMotion, options);
  resize();
  updateMotion();

  if (import.meta.hot) import.meta.hot.dispose(() => {
    stop();
    events.abort();
    canvas.remove();
  });
}
