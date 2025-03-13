import Wheat from "./Wheat";

export default function FarmLand() {

    return (
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <Wheat />
        </mesh>
    );
}
