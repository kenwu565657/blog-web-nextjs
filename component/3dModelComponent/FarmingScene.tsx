import {Suspense, useRef} from "react";
import {Canvas, useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {Sky} from "@react-three/drei";
import {useControls} from "leva";
import {Light} from "three";

function FarmingScene() {
    const model = useLoader(GLTFLoader, '/model/farmer_v2.glb');

    return (
        <group>
            <scene>
                <primitive object={model.scene} scale={0.1}></primitive>
            </scene>
        </group>
    )
}

export default function FarmingSceneCanvas() {
    const directionalLight = useRef<Light>(null!);
    const { position, sunPosition } = useControls(
        {
            position: -2,
            sunPosition: { value: [ 0, 0, 0 ] }
        },
    );

    return (
        <Suspense>
            <Canvas>
                <Sky sunPosition={sunPosition}></Sky>
                <directionalLight ref={directionalLight} position={[1, 2, 3]} intensity={4.5}/>
                <FarmingScene/>
            </Canvas>
        </Suspense>
    );
}
