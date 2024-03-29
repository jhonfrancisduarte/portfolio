import './App.css'
import Navbar from './navbar'
import About from './about'
import Works from './works.jsx'
import Contact from './contact.jsx'
import MouseTrail from './mouseTrail.jsx'
import Bg from './bg.jsx'
import Model from './Me3.jsx'
import Model3 from './AboutMe2.jsx'
import Model4 from './ContactMeModel.jsx'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import React, { useRef } from 'react';

const CustomOrbitControls = () => {
  const { camera, gl } = useThree();
  const controls = useRef();

  // Set up controls
  useFrame(() => {
    if (controls.current) {
      controls.current.enableZoom = false; // Disable zooming
      controls.current.enableRotate = false; // Disable rotation
      controls.current.enablePan = true; // Enable panning
      controls.current.update();
    }
  });

  return <OrbitControls ref={controls} args={[camera, gl.domElement]} />;
};

function App() {
  const canvasClassName = 'my-canvas';
  const canvasClassName2 = 'my-canvas2';
  const canvasClassName3 = 'my-canvas3';

  const assignIdToCanvas = () => {
    const canvasElement = document.querySelector(`.${canvasClassName}`);
    if (canvasElement) {
      canvasElement.id = 'welcome';
    }
  };

  const assignIdToCanvas2 = () => {
    const canvasElement = document.querySelector(`.${canvasClassName2}`);
    if (canvasElement) {
      canvasElement.id = 'about';
    }
  };

  const assignIdToCanvas3 = () => {
    const canvasElement = document.querySelector(`.${canvasClassName3}`);
    if (canvasElement) {
      canvasElement.id = 'contact';
    }
  };

  return (
      <>
        <div className="pages-container">

          <div className='homePage' id='welcome'>
            <Navbar />
            <Canvas
                  className={canvasClassName}
                  camera={{ position: [1, 0, 2.8], fov: 50 }}
                  gl={{ antialias: true }}
                  onCreated={({ gl }) => {
                    assignIdToCanvas();
                  }}
                >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <directionalLight position={[-5, -5, -5]} intensity={0.5} />
                <Suspense fallback={null}>
                  <Model />
                </Suspense>
                <OrbitControls
                  minDistance={1.5}  // Set your preferred minimum distance
                  maxDistance={3}  // Set your preferred maximum distance
                />
            </Canvas>
            <Bg />
          </div>

          <div className="aboutMePage" id='aboutme'>
                <About />
                <Canvas
                  className={canvasClassName2}
                  camera={{ position: [1, 0, 3.5], fov: 50 }}
                  gl={{ antialias: true, shadowMap: { enabled: true } }}
                  onCreated={({ gl }) => {
                    assignIdToCanvas2();
                  }}
                >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} 
                                  castShadow shadow-mapSize={{ width: 1024, height: 1024 }}
                                  shadow-bias={-0.001}/>
                <directionalLight position={[-5, -5, -5]} intensity={0.5} 
                                  castShadow shadow-mapSize={{ width: 1024, height: 1024 }}
                                  shadow-bias={-0.001}/>
                <directionalLight position={[0, 0, -5]} intensity={0.5} 
                                  castShadow shadow-mapSize={{ width: 1024, height: 1024 }}
                                  shadow-bias={-0.001}/>
                <directionalLight position={[5, 0, 0]} intensity={0.5} 
                                  castShadow shadow-mapSize={{ width: 1024, height: 1024 }}
                                  shadow-bias={-0.001}/>
                <Suspense fallback={null}>
                  <Model3 />
                </Suspense>
                <OrbitControls
                  minDistance={1.5}  // Set your preferred minimum distance
                  maxDistance={6}  // Set your preferred maximum distance
                />
            </Canvas>
          </div>

          <div className="myWorksPage" id='my-works'>
            <Works />
            {/* <MouseTrail /> */}
          </div>

          <div className="contactMePage" id='contact-me'>
            <Contact />
            <Canvas
                  className={canvasClassName3}
                  camera={{ position: [0, 0, 1.7], fov: 50 }}
                  gl={{ antialias: true, shadowMap: { enabled: true } }}
                  onCreated={({ gl }) => {
                    assignIdToCanvas3();
                  }}
                >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} 
                                  castShadow shadow-mapSize={{ width: 1024, height: 1024 }}
                                  shadow-bias={-0.001}/>
                <directionalLight position={[-5, -5, -5]} intensity={0.5} 
                                  castShadow shadow-mapSize={{ width: 1024, height: 1024 }}
                                  shadow-bias={-0.001}/>
                <directionalLight position={[0, 0, -5]} intensity={0.5} 
                                  castShadow shadow-mapSize={{ width: 1024, height: 1024 }}
                                  shadow-bias={-0.001}/>
                <directionalLight position={[5, 0, 0]} intensity={0.5} 
                                  castShadow shadow-mapSize={{ width: 1024, height: 1024 }}
                                  shadow-bias={-0.001}/>
                <Suspense fallback={null}>
                  <Model4 />
                </Suspense>
                <CustomOrbitControls />
            </Canvas>
          </div>

          <div className="copyright">
            <p>ⓒ 2024 by JFAD</p>
          </div>

        </div>
      </>
  )
}

export default App
