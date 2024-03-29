/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 me3.glb 
*/

import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/me3.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.idle.play()
  })

  const groupStyles = {
    cursor: 'pointer', // Set cursor to pointer
  };

  const toAboutPage = () => {
    const targetElement = document.getElementById('aboutme');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toMyWorksPage = () => {
    const targetElement = document.getElementById('my-works');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toContactMePage = () => {
    const targetElement = document.getElementById('contact-me');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePointerOver = (event) => {
    const intersectedObject = event.object;
    if (intersectedObject.material.emissive !== undefined && (intersectedObject.name == "Cube001_2" ||
    intersectedObject.name == "Cube002_2" || intersectedObject.name == "Cube003_2" )) {
      intersectedObject.material.emissive.set(0x009292);
      intersectedObject.parent.position.y = -0.540;
    }
  };
  
  const handlePointerOut = (event) => {
    const intersectedObject = event.object;
    if (intersectedObject.material.emissive !== undefined && (intersectedObject.name == "Cube001_2" ||
    intersectedObject.name == "Cube002_2" || intersectedObject.name == "Cube003_2" )) {
      intersectedObject.material.emissive.set(0x000000);
      intersectedObject.parent.position.y = -0.523;
    }
  };


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, -1.182, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig7Hips} />
          <group name="Ch33_Eyelashes" />
          <skinnedMesh name="Ch33_Belt" geometry={nodes.Ch33_Belt.geometry} material={materials.Ch33_body} skeleton={nodes.Ch33_Belt.skeleton} />
          <skinnedMesh name="Ch33_Body" geometry={nodes.Ch33_Body.geometry} material={materials.Ch33_body} skeleton={nodes.Ch33_Body.skeleton} />
          <skinnedMesh name="Ch33_Hair" geometry={nodes.Ch33_Hair.geometry} material={materials.Ch33_hair} skeleton={nodes.Ch33_Hair.skeleton} />
          <skinnedMesh name="Ch33_Pants" geometry={nodes.Ch33_Pants.geometry} material={materials.Black} skeleton={nodes.Ch33_Pants.skeleton} />
          <skinnedMesh name="Ch33_Shirt" geometry={nodes.Ch33_Shirt.geometry} material={materials.white} skeleton={nodes.Ch33_Shirt.skeleton} />
          <skinnedMesh name="Ch33_Shoes" geometry={nodes.Ch33_Shoes.geometry} material={materials.Ch33_body} skeleton={nodes.Ch33_Shoes.skeleton} />
          <group name="Ch33_Suit">
            <skinnedMesh name="Mesh001" geometry={nodes.Mesh001.geometry} material={materials.Black} skeleton={nodes.Mesh001.skeleton} />
            <skinnedMesh name="Mesh001_1" geometry={nodes.Mesh001_1.geometry} material={materials.shinyBlack} skeleton={nodes.Mesh001_1.skeleton} />
          </group>
          <skinnedMesh name="Ch33_Tie" geometry={nodes.Ch33_Tie.geometry} material={materials.Ch33_body} skeleton={nodes.Ch33_Tie.skeleton} />
          <skinnedMesh name="FaceBuilderHead" geometry={nodes.FaceBuilderHead.geometry} material={materials.kt_facebuilder_material} skeleton={nodes.FaceBuilderHead.skeleton} />
        </group>
        <group name="aboutme" position={[-0.018, -0.523, 0.041]} rotation={[0, -0.126, 0.73]} scale={[0.007, 0.269, 0.208]} onPointerDown={toAboutPage} onPointerOver={handlePointerOver}
  onPointerOut={handlePointerOut}>
          <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Black.003']} />
          <mesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials['light.002']} />
          <mesh name="Cube001_2" geometry={nodes.Cube001_2.geometry} material={materials['screen.002']} />
          <mesh name="Cube001_3" geometry={nodes.Cube001_3.geometry} material={materials['logo.002']} />
        </group>
        <group name="myworks" position={[0.049, -0.523, 0.028]} rotation={[0, -1.309, 0.73]} scale={[0.007, 0.269, 0.208]} onPointerDown={toMyWorksPage} onPointerOver={handlePointerOver}
  onPointerOut={handlePointerOut}>
          <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['Black.002']} />
          <mesh name="Cube002_1" geometry={nodes.Cube002_1.geometry} material={materials['light.001']} />
          <mesh name="Cube002_2" geometry={nodes.Cube002_2.geometry} material={materials['screen.001']} />
          <mesh name="Cube002_3" geometry={nodes.Cube002_3.geometry} material={materials['logo.001']} />
        </group>
        <group name="contactme" position={[-0.018, -0.523, 0.041]} rotation={[Math.PI, -0.563, -2.411]} scale={[0.007, 0.269, 0.208]} onPointerDown={toContactMePage} onPointerOver={handlePointerOver}
  onPointerOut={handlePointerOut}>
          <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Black.001']} />
          <mesh name="Cube003_1" geometry={nodes.Cube003_1.geometry} material={materials.light} />
          <mesh name="Cube003_2" geometry={nodes.Cube003_2.geometry} material={materials.screen} />
          <mesh name="Cube003_3" geometry={nodes.Cube003_3.geometry} material={materials.logo} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/me3.glb')