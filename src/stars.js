import * as THREE from 'three';
//Declare three.js variables
let camera,
  scene,
  renderer,
  stars = [];

//assign three.js objects to each variable
function init() {
  const output = document.createElement('canvas');
  const webgl = output.getContext('webgl2');
  if (!webgl) return false;
  //camera
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 1;

  //scene
  scene = new THREE.Scene();

  // Create a canvas element and get its 2D context
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) return false;

  // Set the canvas size to match the renderer size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Create a gradient from blue to black
  let gradient = context.createLinearGradient(0, 0, 0, window.innerHeight);

  gradient.addColorStop(0, '#000000');
  gradient.addColorStop(1, '#000005');


  // Fill the canvas with the gradient
  context.fillStyle = gradient;
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);

  // Create a texture from the canvas
  const texture = new THREE.CanvasTexture(canvas);

  // Use the texture as the scene background
  scene.background = texture;

  //renderer
  renderer = new THREE.WebGLRenderer({ canvas: output, context: webgl });
  renderer.domElement.setAttribute('aria-hidden', 'true');
  //set the size of the renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  //add the renderer to the html document body
  document.body.appendChild(renderer.domElement);
  //adjust for screen size
  window.addEventListener('resize', function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Resize the canvas and gradient when the window is resized
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#000000');
    gradient.addColorStop(1, '#000005');
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    texture.needsUpdate = true;
    renderer.render(scene, camera);
  });
  return true;
}

function addSphere() {
  // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position.
  for (let z = -20000; z < 20000; z += 60) {
    // Make a sphere (exactly the same as before).
    let geometry = new THREE.SphereGeometry(0.5, 32, 32);
    let material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    let sphere = new THREE.Mesh(geometry, material);

    // This time we give the sphere random x and y positions between -500 and 500
    sphere.position.x = Math.random() * 1000 - 500;
    sphere.position.y = Math.random() * 1000 - 500;

    // Then set the z position to where it is in the loop (distance of camera)
    sphere.position.z = z;

    // scale it up a bit
    sphere.scale.x = sphere.scale.y = 1;

    //add the sphere to the scene
    scene.add(sphere);

    //finally push it to the stars array
    stars.push(sphere);
  }
}

function animateStars() {
  // loop through each star
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];

    // and move it forward dependent on the mouseY position.
    star.position.z += i / 150;

    // if the particle is too close move it to the back
    if (star.position.z > 1000) star.position.z -= 2000;
  }
}

// Motion is opt-in. Reduced-motion preference always stops it, including
// preference changes while the page is open; the static scene remains visible.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.getElementById('background-motion');
let frame;
let playing = false;

function stop() {
  cancelAnimationFrame(frame);
  frame = undefined;
}

function render() {
  renderer.render(scene, camera);
  animateStars();
  frame = requestAnimationFrame(render);
}

function updateMotion() {
  stop();
  if (motionPreference.matches) playing = false;
  motionButton.disabled = motionPreference.matches;
  motionButton.textContent = motionPreference.matches
    ? 'Background animation off (reduced motion)'
    : playing ? 'Pause background animation' : 'Play background animation';
  if (playing && !document.hidden) render();
}

try {
  if (init()) {
    addSphere();
    renderer.render(scene, camera);
    motionButton.addEventListener('click', () => { playing = !playing; updateMotion(); });
    motionPreference.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateMotion);
    updateMotion();
  } else {
    motionButton.hidden = true;
  }
} catch {
  // The decorative scene is optional; CSS provides a readable dark background.
  motionButton.hidden = true;
  renderer?.domElement.remove();
  renderer?.dispose();
}
