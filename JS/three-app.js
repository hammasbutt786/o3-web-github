// import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
// import { Scene, PerspectiveCamera, WebGLRenderer } from "./packages/three/build/three.module.js";
// import * as THREE from "./packages/three/build/three.module.js";
// import Nebula, { SpriteRenderer } from "./packages/three-nebula/build/three-nebula.js";
// import json from "./json/particles.json";
// import json from "./json/Nebulaparticles.json";
// import json from "./json/Nebula-particles-3.json";
import * as THREE from "three";

// export let scene;
// export let camera;

// export default  () => {
//   camera = new THREE.PerspectiveCamera(
//     1000,
//     window.innerWidth / window.innerHeight,
//     10,
//     1000
//   );
//   camera.position.z = 20;
//   scene = new THREE.Scene();

//   renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.domElement.classList.add("three-renderer");
//   document.body.appendChild(renderer.domElement);

//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.setClearColor(0x000000, 0)
//   return { scene, camera, renderer };
// };
// console.log({Nebula})
// function animate(nebula, app) {

//   requestAnimationFrame(() => animate(nebula, app));
//   nebula.update();
//   app.renderer.render(app.scene, app.camera);
// }

// Nebula.fromJSONAsync(json.particleSystemState, THREE).then(loaded => {
//   console.log('Loaded:', loaded);
//   const app = getThreeApp();
//   const nebulaRenderer = new SpriteRenderer(app.scene, THREE);
//   const nebula = loaded.addRenderer(nebulaRenderer);
//   console.log('Nebula:', nebula);
//   window.addEventListener('resize', () => {
//     app.renderer.setSize(window.innerWidth, window.innerHeight);
//     app.camera.aspect = window.innerWidth / window.innerHeight;
//     app.camera.updateProjectionMatrix();
//   });
//   animate(nebula, app);
// });
// import { Scene, PerspectiveCamera, WebGLRenderer } from "three";

// export let scene;
// export let camera;
// export let renderer;

// export default () => {
//   camera = new PerspectiveCamera(
//     70,
//     window.innerWidth / window.innerHeight,
//     1,
//     1000
//   );
//   camera.position.z = 100;
//   scene = new Scene();

//   renderer = new WebGLRenderer();
//   renderer.domElement.classList.add("three-renderer");
//   document.body.appendChild(renderer.domElement);
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.setClearColor(0x000000, 0)



//   return { scene, camera, renderer };
// };


// import * as THREE from 'three';
// // import * as THREE from './packages/three/build/three.module.js';
// console.log({THREE})
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.domElement.classList.add("three-renderer");

// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//   requestAnimationFrame(animate);

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }

// animate();