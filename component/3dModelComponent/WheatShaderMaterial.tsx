import {ShaderMaterial, TextureLoader} from "three";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

interface WheatShaderMaterialProps {
    po: number[],
    angle: number[]
}

// learn from https://github.com/JERROMY/JERROMY.github.io
// learn from https://www.youtube.com/watch?v=RYtJH2Lrrhw&t=1004s
export default function WheatShaderMaterial() {
    const ref = useRef<ShaderMaterial|null>(null);

    useFrame(() => {
        if (ref.current) {
            ref.current.uniforms.time.value = Date.now();
        }
    });

    const wheatTexture = new TextureLoader().load("/texture/wheat.jpeg");
    const wheatShapeTexture = new TextureLoader().load("/texture/wheatShape.png");

    const uniforms = {
        "wheatTexture": { value: wheatTexture},
        "wheatShapeTexture": {value: wheatShapeTexture},
        "time": {value: Date.now()}
    };

    return (
      <shaderMaterial
          ref={ ref }
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          wireframe={false}
      >
      </shaderMaterial>
    );
}

//todo: move shader to other file
const vertexShader = `

attribute vec3 po;
attribute float angle;

uniform float time;

varying vec2 vUv;
varying vec3 vPosition;
varying float vAngle;

vec4 quat_from_axis_angle(vec3 axis, float angle){ 
    vec4 qr;
    float half_angle = (angle * 0.5) * 3.14159 / 180.0;
    qr.x = axis.x * sin(half_angle);
    qr.y = axis.y * sin(half_angle);
    qr.z = axis.z * sin(half_angle);
    qr.w = cos(half_angle);
    return qr;
}

vec3 rotate_vertex_position(vec3 position, vec3 axis, float angle){

    vec4 q = quat_from_axis_angle(axis, angle);
    vec3 v = position.xyz;
    return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);

}

void main()
{
    
    vUv = uv;
    vAngle = angle;

    vec3 upDir = vec3(0.0, 1.0, 0.0);

    vec3 finalPosi = position;
    finalPosi.x *= 0.1;
    finalPosi.y *= 1.0;
    finalPosi.y += 0.5;

    finalPosi = rotate_vertex_position(finalPosi, upDir, vAngle);

    if( finalPosi.y > 0.5 ){
        finalPosi.x = ( finalPosi.x + sin( time / 1000.0 * ( vAngle * 0.01 )  ) * 0.05 );
        finalPosi.z = ( finalPosi.z + cos( time / 1000.0 * ( vAngle * 0.01 )  ) * 0.05 );
    }

    finalPosi = po + finalPosi;
    
    vec4 posi = vec4( finalPosi, 1.0 );
    vec4 mPosi = modelViewMatrix * posi;
    
    gl_Position = projectionMatrix * mPosi;


}
`;

//todo: move shader to other file
const fragmentShader = `
precision mediump float;

varying vec2 vUv;
uniform sampler2D wheatTexture;
uniform sampler2D wheatShapeTexture;

void main()
{
    vec3 wheatMaskColor = texture2D( wheatShapeTexture, vUv ).rgb;
    vec3 grassColor = texture2D( wheatTexture, vUv ).rgb;
    gl_FragColor = vec4( grassColor, 1.0);
        if( wheatMaskColor.r > 0.1 ){
        discard;
    }
}
`;
