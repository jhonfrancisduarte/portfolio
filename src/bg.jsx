import React, { useEffect , useRef} from 'react';
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

const Bg = () => {
  const isInitialized = useRef(false);
  useEffect(() => {
    if (!isInitialized.current) {
        isInitialized.current = true;

    // const assetUrl = './MeModel11.gltf';

    let scene, camera, renderer, controls, object, frame = 0;
    const myHead = document.querySelector(".three-bg");

    function init() {
        const raycaster = new THREE.Raycaster()
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 10000)
        renderer = new THREE.WebGLRenderer({antialias:true})
      
        // setting the objects to the page
        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(window.innerWidth,window.innerHeight);

        renderer.setPixelRatio(devicePixelRatio)
        renderer.setClearColor(new THREE.Color('#000000'), 1)
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        myHead.appendChild(renderer.domElement)

        camera.position.x = 1.9754760929923019;
        camera.position.y = 11.395551505166361;
        camera.position.z = -3.6402280678922754;

        // console.log(`Camera Position - X: ${camera.position.x}, Y: ${camera.position.y}, Z: ${camera.position.z}`);

        //new OrbitControls(camera, renderer.domElement)
        const controls = new OrbitControls( camera, renderer.domElement );
        controls.minDistance = 1.8;
        controls.maxDistance = 8;
        controls.update()

        //lighting of the scene
        const light = new THREE.AmbientLight(0x404040, 1)
        light.position.set(10,10,1);
        scene.add(light)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(0,1,10);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2040;
        directionalLight.shadow.mapSize.height = 2040;
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0xc4c4c4, 1);
        pointLight.position.set(0,10,0);
        pointLight.castShadow = true;
        pointLight.shadow.mapSize.width = 2040;
        pointLight.shadow.mapSize.height = 2040;
        scene.add(pointLight);

        // floor
        const plane = new THREE.Mesh(new THREE.PlaneGeometry(800, 800, 1), new THREE.MeshPhongMaterial({color:0x21282a}));
        plane.rotation.x = - Math.PI / 2
        plane.position.y = -3
        plane.receiveShadow = true
        scene.add(plane);

        document.addEventListener('mousemove', mouseCoordinates)
        let mouseX = 0
        let mouseY = 0
        function mouseCoordinates(event){
            mouseX = event.clientX
            mouseY = event.clientY  
        }


        function onWindowResize(){
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerHeight, window.innerHeight);
        }

        const tick = () =>{
            window.requestAnimationFrame(tick)
            renderer.render(scene, camera)

            const now = Date.now()/2000;
            pointLight.position.x = Math.cos(now) * 2;
            pointLight.position.z = Math.sin(now) * 2;
        }
        tick();
        // animate();
    }

    function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    init();

    // Cleanup on component unmount
    return () => {
      if (renderer) {
        // Dispose of the WebGLRenderer to prevent memory leaks
        renderer.dispose();
      }
    };
}}, []);

  return (
      <div className="three-bg"></div>
  );
}

export default Bg;
