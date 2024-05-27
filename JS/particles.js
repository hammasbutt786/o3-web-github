import * as THREE from "three";
import JSON from '../json/Nebula-particles-3.json' with { type: 'json' };
export let scene;
export let camera;
export let renderer;

function getThreeApp() {
  camera = new THREE.PerspectiveCamera(
    1000,
    window.innerWidth / window.innerHeight,
    10,
    1000
  );
  camera.position.z = 20;
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.domElement.classList.add("three-renderer");
  document.body.appendChild(renderer.domElement);
  const clock = new THREE.Clock();
  const delta = clock.getDelta();
  const time = clock.getElapsedTime();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0)
  return { scene, camera, renderer, delta, time };
  // renderer.setPixelRatio(window.devicePixelRatio);
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.setClearColor(0x000000, 0)
  // return { scene, camera, renderer };
};
function animate(nebula, app) {
  // requestAnimationFrame(() => animate(nebula, app));
  setTimeout(() => {
    requestAnimationFrame(() => { 
      animate(nebula, app);
    });
  }, 1000 / 14); // (approximately 24fps)
  nebula.update();
  app.renderer.render(app.scene, app.camera);
}

Nebula.System.fromJSONAsync(JSON.particleSystemState, THREE).then(loaded => {
  console.log('Loaded:', loaded);
  const app = getThreeApp();
  const nebulaRenderer = new Nebula.SpriteRenderer(app.scene, THREE);
  // const force = new Nebula
  const nebula = loaded
    .addRenderer(nebulaRenderer)
  console.log({ nebula })
  window.addEventListener('resize', () => {
    app.renderer.setSize(window.innerWidth, window.innerHeight);
    app.camera.aspect = window.innerWidth / window.innerHeight;
    app.camera.updateProjectionMatrix();
  });
  animate(nebula, app);
});