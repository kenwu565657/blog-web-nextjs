import {BufferAttribute, Float32BufferAttribute, InstancedBufferAttribute, NormalBufferAttributes} from "three";
import WheatShaderMaterial from "@/component/3dModelComponent/WheatShaderMaterial";

export default function Wheat() {
    const numberOfWheat: number = 5000;
    const w: number = 1;
    const d: number = 1;
    const h: number = 0;
    const position: number[] = [];
    const angles: number[] = [];
    const po: number[] = [];
    const uv: number[] = [];
    const index: number[] = [];

    position.push( 0.1, 0, 0 );
    position.push( 0, 0, 0 );
    position.push( 0, 0.1, 0 );
    position.push( 0.1, 0.1, 0 );

    index.push(0);
    index.push(1);
    index.push(2);
    index.push(2);
    index.push(3);
    index.push(0);

    uv.push(1.0, 0.0);
    uv.push(0.0, 0.0);
    uv.push(0.0, 1.0);
    uv.push(1.0, 1.0);

    for( let i = 0 ; i < numberOfWheat ; i++ ){
    const posiX = Math.random() * w - w/2;
    const posiY = h;
    const posiZ = Math.random() * d - d/2;
    po.push( posiX, posiY, posiZ );
    const angle = Math.random()*360;
    angles.push( angle );
    }

    const positionAttribute = new Float32BufferAttribute( position, 3 );
    const uvAttribute = new Float32BufferAttribute( uv, 2 );
    const indexAttribute = new BufferAttribute( new Uint16Array( index ), 1);
    const poAttribute = new InstancedBufferAttribute(new Float32Array( po ), 3 );
    const angleAttribute = new InstancedBufferAttribute(new Float32Array( angles ), 1 );

    const attributes: NormalBufferAttributes =
        {
          "position": positionAttribute,
          "uv": uvAttribute,
            "po": poAttribute,
            "angle": angleAttribute,
        };



    return (
        <group>
            <mesh position-z={0.6} rotation-x={-Math.PI * 0.5}>
                <instancedBufferGeometry
                    instanceCount={numberOfWheat}
                    attributes={attributes}
                    index={indexAttribute}
                >
                </instancedBufferGeometry>
                <WheatShaderMaterial/>
            </mesh>
        </group>

    )
}
