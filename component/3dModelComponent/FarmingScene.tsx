import {Suspense, useRef} from "react";
import {useThree, Canvas, useLoader, useFrame, extend} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {Text3D, useAnimations, Float} from "@react-three/drei";
import {Light, Mesh, AnimationAction} from "three";
import ModelLoadingPlaceHolder from "@/component/3dModelComponent/ModelLoadingPlaceHolder";
import FarmLand from "@/component/3dModelComponent/FarmLand";

extend({ OrbitControls })

function FarmingScene() {
    const { camera, gl } = useThree();
    const model = useLoader(GLTFLoader, '/model/farmer_v3.glb');
    const animations = useAnimations(model.animations, model.scene);
    const directionalLight = useRef<Light>(null!);
    const modelRef = useRef<Mesh>(null);

    useFrame((state) => {
        state.camera.lookAt(0, 0, 0);

        if (modelRef.current) {
            const action: AnimationAction|null = animations.actions[animations.names[1]];
            if (action) {
                action.play();
            }
        }
    });

    return (
            <scene>
                <FarmLand />
                <mesh position-z={-5} position-y={4} scale={10}>
                    <planeGeometry/>
                    <meshBasicMaterial color="red"/>
                </mesh>
                <mesh position-x={-5} position-y={4} rotation-x={-Math.PI * 0.5} rotation-y={Math.PI * 0.5} scale={10}>
                    <planeGeometry/>
                    <meshStandardMaterial color="blue"/>
                </mesh>
                <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                    <planeGeometry/>
                    <meshStandardMaterial color="greenyellow"/>
                </mesh>

                <directionalLight ref={directionalLight} position={[2, 2, 3]} intensity={3}/>
                <ambientLight intensity={1.5}/>
                <orbitControls args={[camera, gl.domElement]}/>
                <Float>
                    <Text3D font="./fonts/helvetiker_regular.typeface.json"
                            size={ 1.0 }
                            height={ 0.2 }
                            position={[-5, 5, 3]}
                            rotation={[0, Math.PI * 0.2, 0]}
                    >
                        Farm The Best Content
                        <meshStandardMaterial color="white"/>
                    </Text3D>
                </Float>

                <primitive object={model.scene}
                           ref={modelRef}
                           scale={0.25}
                           rotation-y={1}
                           position-x={-2}
                           position-z={-1}
                >
                </primitive>
            </scene>
    )
}

export default function FarmingSceneCanvas() {
    return (
            <Canvas className={"bg-sky-500 h-full"} camera={ { fov: 50, near: 1, far: 300, position: [ 0, 2, 9 ] } }>
                <Suspense fallback={<ModelLoadingPlaceHolder scale={5.0} rotation-x={0.5} rotation-y={0.5}/>}>
                    <FarmingScene/>
                </Suspense>
            </Canvas>
    );
}
