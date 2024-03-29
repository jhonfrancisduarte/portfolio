/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 AboutMe2.glb 
*/

import React, { useRef, useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model3(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/AboutMe2.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.aboutanim.play()
  })


  const aboutPointerOver = (event) => {
    const intersectedObject = event.object;
    if (intersectedObject.material.emissive !== undefined) {
      intersectedObject.material.emissive.set(0x009292);
    }
  };
  
  const aboutPointerOut = (event) => {
    const intersectedObject = event.object;
    if (intersectedObject.material.emissive !== undefined) {
      intersectedObject.material.emissive.set(0x000000);
    }
  };

  const aboutMenuClick = (menu) => {
    const personalData = document.getElementById('personal-data');
    const skills = document.getElementById('my-skills');
    const experience = document.getElementById('my-experience');
  
    switch (menu) {
      case 'PersonalData':
        if (personalData && skills && experience) {
          personalData.classList.add('active');
          skills.classList.remove('active');
          experience.classList.remove('active');
        }
        break;
      case 'Skills':
        if (personalData && skills && experience) {
          personalData.classList.remove('active');
          skills.classList.add('active');
          experience.classList.remove('active');
        }
        break;
      case 'Experience':
        if (personalData && skills && experience) {
          personalData.classList.remove('active');
          skills.classList.remove('active');
          experience.classList.add('active');
        }
        break;
      case 'Home':
        const targetElement = document.getElementById('welcome');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      case 'MyWorks':
        const targetElement2 = document.getElementById('my-works');
        if (targetElement2) {
          targetElement2.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      case 'ContactMe':
        const targetElement3 = document.getElementById('contact-me');
        if (targetElement3) {
          targetElement3.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      default:
        break;
    }
  };
  

  const aboutSocialClick = (link) => {
    window.open(link, '_blank');
  };  

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, -1.182, 0]}>
          <primitive object={nodes.mixamorig7Hips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <group name="Ch33_Eyelashes" rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
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
        <group name="cs_grp">
          <group name="cs_arm_fk" position={[1.5, 8.5, 0]} scale={0.822} />
          <group name="cs_calf_fk" position={[0.5, 8.5, 0]} scale={0.822} />
          <group name="cs_circle" position={[0.5, 4.5, 0]} scale={0.206} />
          <group name="cs_circle001" position={[0.5, 4.5, 0]} scale={0.206} />
          <group name="cs_circle_025" position={[2.5, 4.5, 0]} scale={0.206} />
          <group name="cs_foot" position={[0.5, 10.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.308} />
          <group name="cs_foot001" position={[0.5, 10.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.308} />
          <group name="cs_foot002" position={[0.5, 10.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.308} />
          <group name="cs_foot_01" position={[0.5, 18.5, 0]} rotation={[0, Math.PI / 2, 0]} scale={2.186} />
          <group name="cs_foot_roll" position={[0.5, 12.5, 0]} scale={0.592} />
          <group name="cs_forearm_fk" position={[2.5, 8.5, 0]} scale={0.822} />
          <group name="cs_hand" position={[0.5, 19.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.308} />
          <group name="cs_head" position={[0.5, 13.5, 0]} scale={0.206} />
          <group name="cs_hips" position={[0.5, 11.5, 0]} scale={0.206} />
          <group name="cs_master" position={[0.5, 17.5, 0]} scale={0.1} />
          <group name="cs_neck" position={[0.5, 14.5, 0]} scale={0.206} />
          <group name="cs_shoulder_left" position={[0.5, 15.5, 0]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={1.038} />
          <group name="cs_shoulder_right" position={[0.5, 16.5, 0]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={1.038} />
          <group name="cs_sphere" position={[0.5, 2.5, 0]} scale={0.206} />
          <group name="cs_sphere_012" position={[3.5, 2.5, 0]} scale={0.206} />
          <group name="cs_square" position={[1.5, 1.497, 0]} rotation={[-Math.PI, 0, 0]} scale={0.154} />
          <group name="cs_square_2" position={[0.5, 1.497, 0]} rotation={[-Math.PI, 0, 0]} scale={0.154} />
          <group name="cs_thigh_fk" position={[0.5, 7.5, 0]} scale={0.822} />
          <group name="cs_toe" position={[0.5, 9.5, 0]} scale={0.429} />
        </group>
        <group name="Chair" position={[0.048, -0.774, 0.019]} scale={0.013}>
          <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.ChairSilber} />
          <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials.ChairBlack} />
        </group>
        <group name="Facebook" position={[1.955, -0.819, -1.185]} rotation={[0, -1.021, 0]} scale={[0.13, 0.13, 0.018]} 
                              onPointerDown={() => aboutSocialClick("https://www.facebook.com/francis.duarte.319")} 
                              onPointerOver={aboutPointerOver}
                              onPointerOut={aboutPointerOut}>
          <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['white.003']} />
          <mesh name="Cube_1" geometry={nodes.Cube_1.geometry} material={materials['Computer.002']} />
        </group>
        <group name="Youtube" position={[2.146, -0.848, -0.788]} rotation={[0, -1.183, 0]} scale={[0.13, 0.096, 0.018]} 
                              onPointerDown={() => aboutSocialClick("https://www.youtube.com/channel/UCDzjowV4oNJ_KEx2zJaMhYg")}
                              onPointerOver={aboutPointerOver}
                              onPointerOut={aboutPointerOut}>
          <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials['white.004']} />
          <mesh name="Cube010_1" geometry={nodes.Cube010_1.geometry} material={materials['Computer.003']} />
        </group>
        <group name="Linkedin" position={[2.271, -0.834, -0.364]} rotation={[0, -1.36, 0]} scale={[0.13, 0.13, 0.018]} 
                              onPointerDown={() => aboutSocialClick("https://www.linkedin.com/in/jhon-francis-duarte-a93931257/")} 
                              onPointerOver={aboutPointerOver}
                              onPointerOut={aboutPointerOut}>
          <mesh name="Cube016" geometry={nodes.Cube016.geometry} material={materials['white.005']} />
          <mesh name="Cube016_1" geometry={nodes.Cube016_1.geometry} material={materials['Computer.004']} />
        </group>
        <group name="Floor" position={[0.1, -1.205, -0.015]} rotation={[Math.PI, 0, 0]} scale={[-2.191, -0.464, -2.191]}>
          <mesh name="Torus002" geometry={nodes.Torus002.geometry} material={materials.white} />
          <mesh name="Torus002_1" geometry={nodes.Torus002_1.geometry} material={materials['Computer.001']} />
        </group>
        <mesh name="Name" geometry={nodes.Name.geometry} material={materials.white} position={[-0.019, -1.205, 0.039]} rotation={[Math.PI / 2, 0, 2.704]} scale={0.374} />
        <mesh name="AboutScreen" geometry={nodes.AboutScreen.geometry} material={materials.screen} position={[0.1, -1.205, -0.015]} rotation={[Math.PI, 0, 0]} scale={[-2.191, -0.268, -2.191]} />
        <mesh name="Title" geometry={nodes.Title.geometry} material={materials.light} position={[-1.553, 0.226, -1.693]} rotation={[Math.PI / 2, 0, -0.712]} scale={0.222} />
        <group name="PersonalData" position={[-1.553, -0.047, -1.693]} rotation={[Math.PI / 2, 0, -0.712]} scale={0.156} 
                                    onPointerDown={() => aboutMenuClick('PersonalData')}  
                                    onPointerOver={aboutPointerOver}
                                    onPointerOut={aboutPointerOut}>
          <mesh name="Text005" geometry={nodes.Text005.geometry} material={materials['light.001']} />
          <mesh name="Text005_1" geometry={nodes.Text005_1.geometry} material={materials['screen.001']} />
        </group>
        <group name="Skills" position={[-1.741, -0.223, -1.487]} rotation={[Math.PI / 2, 0, -0.871]} scale={0.156} 
                                    onPointerDown={() => aboutMenuClick('Skills')} 
                                    onPointerOver={aboutPointerOver}
                                    onPointerOut={aboutPointerOut}>
          <mesh name="Text006" geometry={nodes.Text006.geometry} material={materials['light.002']} />
          <mesh name="Text006_1" geometry={nodes.Text006_1.geometry} material={materials['screen.002']} />
        </group>
        <group name="Experience" position={[-1.59, -0.395, -1.652]} rotation={[Math.PI / 2, 0, -0.712]} scale={0.156} 
                                    onPointerDown={() => aboutMenuClick('Experience')} 
                                    onPointerOver={aboutPointerOver}
                                    onPointerOut={aboutPointerOut}>
          <mesh name="Text007" geometry={nodes.Text007.geometry} material={materials['light.003']} />
          <mesh name="Text007_1" geometry={nodes.Text007_1.geometry} material={materials['screen.003']} />
        </group>
        <mesh name="AboutScreen001" geometry={nodes.AboutScreen001.geometry} material={materials['white.001']} position={[0.1, -1.205, -0.015]} rotation={[Math.PI, 0, 0]} scale={[-2.191, -0.268, -2.191]} />
        <mesh name="AboutScreen002" geometry={nodes.AboutScreen002.geometry} material={materials.screen} position={[0.1, -1.205, 0.136]} rotation={[-Math.PI, 1.222, 0]} scale={[-2.191, -0.268, -2.191]} />
        <mesh name="AboutScreen003" geometry={nodes.AboutScreen003.geometry} material={materials['white.001']} position={[1.453, 0.096, -1.665]} rotation={[-Math.PI, 1.139, 0]} scale={[-2.191, -0.268, -2.191]} />
        <group name="MyWorks" position={[0.761, -0.223, -2.131]} rotation={[Math.PI / 2, 0, 0.308]} scale={0.156} 
                                    onPointerDown={() => aboutMenuClick('MyWorks')} 
                                    onPointerOver={aboutPointerOver}
                                    onPointerOut={aboutPointerOut}>
          <mesh name="Text014" geometry={nodes.Text014.geometry} material={materials['light.005']} />
          <mesh name="Text014_1" geometry={nodes.Text014_1.geometry} material={materials['screen.005']} />
        </group>
        <group name="ContactMe" position={[0.971, -0.395, -2.054]} rotation={[Math.PI / 2, 0, 0.468]} scale={0.156} 
                                    onPointerDown={() => aboutMenuClick('ContactMe')} 
                                    onPointerOver={aboutPointerOver}
                                    onPointerOut={aboutPointerOut}>
          <mesh name="Text015" geometry={nodes.Text015.geometry} material={materials['light.006']} />
          <mesh name="Text015_1" geometry={nodes.Text015_1.geometry} material={materials['screen.006']} />
        </group>
        <group name="Home" position={[0.73, -0.047, -2.145]} rotation={[Math.PI / 2, 0, 0.34]} scale={0.133} 
                                    onPointerDown={() => aboutMenuClick('Home')} 
                                    onPointerOver={aboutPointerOver}
                                    onPointerOut={aboutPointerOut}>
          <mesh name="Text016" geometry={nodes.Text016.geometry} material={materials['light.004']} />
          <mesh name="Text016_1" geometry={nodes.Text016_1.geometry} material={materials['screen.004']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/AboutMe2.glb')