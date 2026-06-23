import {ShaderMaterial, TextureLoader} from "three";
import {useMemo, useRef} from "react";
import {useFrame} from "@react-three/fiber";

// learn from https://github.com/JERROMY/JERROMY.github.io
// learn from https://www.youtube.com/watch?v=RYtJH2Lrrhw&t=1004s
export default function WheatShaderMaterial() {
    const ref = useRef<ShaderMaterial|null>(null);

    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.uniforms.time.value = clock.elapsedTime;
        }
    });

    const uniforms = useMemo(() => {
        const wheatTexture = new TextureLoader().load("/texture/wheat.jpeg");
        const wheatShapeTexture = new TextureLoader().load("/texture/wheatShape.png");

        return {
            "wheatTexture": { value: wheatTexture},
            "wheatShapeTexture": {value: wheatShapeTexture},
            "time": {value: 0.0}
        };
    }, []);

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

void main()
{
    
    vUv = uv;
    vAngle = angle;

    vec3 finalPosi = position;
    finalPosi.x *= 0.05;
    finalPosi.y *= 1.0;
    finalPosi.y += 0.5;

    float bladeSeed = vAngle * 0.731 + po.x * 17.23 + po.z * 31.77;
    float randomSpeed = 0.6 + fract(sin(bladeSeed + 9.91) * 12678.3344) * 0.35;
    float randomPhase = fract(sin(bladeSeed + 15.73) * 43215.9988);
    float initAngle = (fract(sin(bladeSeed + 27.13) * 28657.2141) - 0.5) * 0.34906585;
    float directionSign = step(0.5, fract(sin(bladeSeed + 41.81) * 19643.1173)) * 2.0 - 1.0;
    float randomAngleScale = 0.75 + fract(sin(bladeSeed + 53.27) * 29874.7711) * 0.5;
    float headWeight = clamp(1.0 - uv.y, 0.0, 1.0);
    float maxAngle = 1.2217305;
    float bendAngle = initAngle + directionSign * sin(time * randomSpeed * 6.2831853 + randomPhase * 6.2831853) * (maxAngle * randomAngleScale) * headWeight;

    vec2 rel = vec2(finalPosi.x, finalPosi.z);
    float s = sin(bendAngle);
    float c = cos(bendAngle);
    vec2 bentRel = vec2(rel.x * c - rel.y * s, rel.x * s + rel.y * c);
    finalPosi.x = bentRel.x;
    finalPosi.z = bentRel.y;

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
