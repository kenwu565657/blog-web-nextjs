export default function ModelLoadingPlaceHolder(props: any) {
    return(
            <mesh {...props} >
                <boxGeometry args={[1, 1, 1, 2, 2, 2]}/>
                <meshBasicMaterial wireframe={true} color="red"/>
            </mesh>
);
}
