import {Canvas, extend, useLoader, useThree} from "@react-three/fiber";
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OrbitControls } from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {Suspense, useRef} from "react";
import {Light} from "three";
import ModelLoadingPlaceHolder from "@/component/3dModelComponent/ModelLoadingPlaceHolder";

//extend({ OrbitControls })

function FarmerSmileScene() {
    const {camera, gl} = useThree();
    const model = useLoader(GLTFLoader, '/model/farmer_smile.glb');
    const directionalLight = useRef<Light>(null!);

    return (
        <group>
            <scene>
                <mesh position-y={-2.7} rotation-x={-Math.PI * 0.5} scale={10}>
                    <planeGeometry/>
                    <meshStandardMaterial color="greenyellow"/>
                </mesh>
                <directionalLight ref={directionalLight} position={[2, 2, 3]} intensity={3}/>
                <ambientLight intensity={1.5}/>
                <OrbitControls></OrbitControls>
                {
                    /**
                     <orbitControls args={[camera, gl.domElement]}/>
                     */
                }
                <primitive object={model.scene}
                           scale={1.0}
                           rotation-y={-1.4}
                           position-x={0}
                           position-z={0}
                >
                </primitive>
            </scene>
        </group>
    )
}

export default function FarmerSmileSceneCanvas() {
    return (
        <Canvas className={"bg-sky-500 h-full"}>
            <Suspense fallback={<ModelLoadingPlaceHolder scale={3}
                                                         rotation-x={1}
                                                         rotation-y={-1}
            />}>
                <FarmerSmileScene/>
            </Suspense>
        </Canvas>
    );
}
