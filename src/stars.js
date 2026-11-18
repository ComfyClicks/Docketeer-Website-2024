// A decorative perspective star field. Canvas keeps the space identity without
// downloading a 3D engine or allocating hundreds of sphere geometries.
const button = document.getElementById('background-motion');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

if (!context || !button) {
  if (button) button.hidden = true;
} else {
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
  let frame;
  let previousTime;
  let playing = false;

  function draw() {
    context.fillStyle = background;
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'white';
    for (const star of stars) {
      const x = width / 2 + star.x * width / (2 * star.depth);
      const y = height / 2 + star.y * height / (2 * star.depth);
      if (x < 0 || y < 0 || x > width || y > height) continue;
      context.beginPath();
      context.arc(x, y, Math.min(1.6, 0.45 / star.depth), 0, Math.PI * 2);
      context.fill();
    }
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    // Bound the backing-store cost on high-density mobile displays.
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    background = context.createLinearGradient(0, 0, 0, height);
    background.addColorStop(0, '#000000');
    background.addColorStop(1, '#000005');
    draw();
  }

  function stop() {
    cancelAnimationFrame(frame);
    frame = undefined;
    previousTime = undefined;
  }

  function animate(time) {
    // Time-based movement behaves consistently on 60Hz and 120Hz displays.
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
    frame = requestAnimationFrame(animate);
  }

  function updateMotion() {
    stop();
    if (preference.matches) playing = false;
    button.disabled = preference.matches;
    button.textContent = preference.matches
      ? 'Background animation off (reduced motion)'
      : playing ? 'Pause background animation' : 'Play background animation';
    if (playing && !document.hidden) frame = requestAnimationFrame(animate);
  }

  button.addEventListener('click', () => { playing = !playing; updateMotion(); }, options);
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
