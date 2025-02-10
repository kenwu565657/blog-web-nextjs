import {Suspense, useRef} from "react";
import {useThree, Canvas, useLoader, useFrame, extend} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {Center, Environment, Sky, Text3D, useAnimations, Float} from "@react-three/drei";
import {useControls} from "leva";
import {Light, Mesh, CineonToneMapping, ACESFilmicToneMapping, AnimationAction} from "three";
import ModelLoadingPlaceHolder from "@/component/3dModelComponent/ModelLoadingPlaceHolder";

extend({ OrbitControls })

function FarmingScene() {
    const { camera, gl, clock } = useThree();
    const model = useLoader(GLTFLoader, '/model/farmer_v3.glb');
    const animations = useAnimations(model.animations, model.scene);
    const directionalLight = useRef<Light>(null!);
    const modelRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        //const angle = state.clock.elapsedTime;
        //state.camera.position.x = Math.sin(angle);
        //state.camera.position.z = Math.cos(angle);
        //state.camera.lookAt(0, 0, 0);


        if (modelRef.current) {
            const action: AnimationAction|null = animations.actions[animations.names[1]];
            if (action) {
                action.play();
            }
        }
    });

    return (
        <group>
            <scene>
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
                <Text3D font="./fonts/helvetiker_regular.typeface.json"
                        size={ 0.75 }
                        height={ 0.2 }
                        position={[-4, 5, 3]}
                        rotation={[0,Math.PI * 0.2,0]}
                >
                    Farm The Best Content
                    <meshNormalMaterial />
                </Text3D>
                <primitive object={model.scene}
                           ref={modelRef}
                           scale={0.2}
                           rotation-y={1}
                           position-x={-2}
                           position-z={-1}
                >
                </primitive>
            </scene>
        </group>
    )
}

export default function FarmingSceneCanvas() {

    const {position, sunPosition} = useControls(
        {
            position: -2,
            sunPosition: {value: [0, 0, 0]}
        },
    );

    return (
            <Canvas className={"bg-sky-500"}>
                <Suspense fallback={<ModelLoadingPlaceHolder scale={0.1}
                                                             rotation-x={0.5}
                                                             rotation-y={1}
                                                             position-x={-2}
                                                             position-y={0.1}/>}>
                    <FarmingScene/>
                </Suspense>
            </Canvas>
    );
}
