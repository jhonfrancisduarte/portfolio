import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

let scene, camera, renderer, controls, object;
const myHead = document.querySelector("div.my-head");

function init() {

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111827);

  camera = new THREE.PerspectiveCamera(30,window.innerWidth/window.innerHeight,.05,300);
  camera.position.x = 0.8492103361842244;
  camera.position.y = 1.097266817809792;
  camera.position.z = -12.045215133927902;

  //Add lights to the scene, so we can actually see the 3D model
  const hlight = new THREE.AmbientLight(0x404040,2);
  scene.add(hlight);

  const directionalLight = new THREE.DirectionalLight(0xffffff,1);
  directionalLight.position.set(1,1,0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  const directionalLight2 = new THREE.DirectionalLight(0xffffff,1);
  directionalLight2.position.set(-1,-1,);
  directionalLight2.castShadow = true;
  scene.add(directionalLight2);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  myHead.appendChild(renderer.domElement);

  controls = new OrbitControls( camera, renderer.domElement );
  // Disable panning
  controls.enablePan = false;

  // Enable rotation and zooming
  controls.enableRotate = true;
  controls.enableZoom = true;
  controls.minDistance = 5; // Adjust this value as needed
  controls.maxDistance = 20;
  controls.addEventListener('change', () => {
    // Log the camera's position whenever it changes
    console.log(`Camera Position - X: ${camera.position.x}, Y: ${camera.position.y}, Z: ${camera.position.z}`);
  });


  const loader = new GLTFLoader();
  loader.load(
      assetUrl ,
      function (gltf) {
        object = gltf.scene;
        scene.add(object);
        animate();
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        console.error(error);
      }
  );
}

function animate() {
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}

init();