import {Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {Text3D, Float} from "@react-three/drei";
import ModelLoadingPlaceHolder from "@/component/3dModelComponent/ModelLoadingPlaceHolder";
import {Suspense} from "react";

function NotFoundScene() {
    return (
        <scene>
            <mesh position-y={0} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry/>
                <meshStandardMaterial color="greenyellow"/>
            </mesh>

            <directionalLight position={[2, 2, 3]} intensity={3}/>
            <ambientLight intensity={1.5}/>
            <OrbitControls></OrbitControls>
            <Float>
                <Text3D font="./fonts/helvetiker_regular.typeface.json"
                        size={ 1.0 }
                        height={ 0.1 }
                        position={[-5, 0, 0]}
                        rotation={[0, 0, 0]}
                >
                    404 NOT FOUND !!!
                    <meshStandardMaterial color="white"/>
                </Text3D>
            </Float>
        </scene>
    )
}

export default function NotFoundSceneCanvas() {
    return (
        <Canvas className={"bg-sky-500 h-full"} camera={ { fov: 50, near: 1, far: 300, position: [ 0, 2, 9 ] } }>
            <Suspense fallback={<ModelLoadingPlaceHolder scale={5.0} rotation-x={0.5} rotation-y={0.5}/>}>
                <NotFoundScene/>
            </Suspense>
        </Canvas>
    );
}
