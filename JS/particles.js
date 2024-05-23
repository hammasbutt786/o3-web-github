
// import Nebula ,{SpriteRenderer} from "three-nebula";
// import json from "./json/particles.json";
// import json from "./json/Nebulaparticles.json";
// import json from "../json/Nebula-particles-3.json";
// import Nebula, { SpriteRenderer } from "../packages/three-nebula/build/three-nebula.js";
// import Nebula, { SpriteRenderer } from "/packages/three-nebula/build/three-nebula";
// import Nebula, { SpriteRenderer } from "../packages/three-nebula-master/website/components/primitives/Nebula/index.js";
import * as THREE from "three";
import JSON from '../json/Nebula-particles-3.json' assert { type: 'json' };
// import { SpriteRenderer } from "three-nebula";

export let scene;
export let camera;
export let renderer;

function getThreeApp (){
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

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0)
  return { scene, camera, renderer };
};
// import json from "./json/hh.json";
// import getThreeApp from "./three-app.js";

function animate(nebula, app) {
    requestAnimationFrame(() => {
        setTimeout(() => {
          animate(nebula, app);
        }, 1000 / 30); // delay 16.7ms (approximately 60fps)
      });
  nebula.update();
  app.renderer.render(app.scene, app.camera);
}
console.log({Nebula})

Nebula.System.fromJSONAsync(JSON.particleSystemState, THREE).then(loaded => {
  console.log('Loaded:', loaded);
  const app = getThreeApp();
  const nebulaRenderer = new Nebula.SpriteRenderer(app.scene, THREE);
  const nebula = loaded.addRenderer(nebulaRenderer);
  console.log('Nebula:', nebula);
//   const Nebula = new Nebula()
  window.addEventListener('resize', () => {
    app.renderer.setSize(window.innerWidth, window.innerHeight);
    app.camera.aspect = window.innerWidth / window.innerHeight;
    app.camera.updateProjectionMatrix();
  });
  animate(nebula, app);
});