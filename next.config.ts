import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    output: "standalone",
    experimental: {
        turbo: {
            rules: {
                '*.glsl': {
                    loaders: ['raw-loader']
                },
                '*.jpeg': {
                    loaders: ['raw-loader']
                },
                '*.txt': {
                    loaders: ['raw-loader']
                },
                resolveExtensions: [
                    '.mdx',
                    '.tsx',
                    '.ts',
                    '.jsx',
                    '.js',
                    '.mjs',
                    '.json',
                    '.glsl',
                    '.txt',
                    '.jpeg',
                    '.png'
                ]
            }
        }
    },
    webpack (config) {
        config.module.rules.push({
            test: /.*\.(glb|gltf|jpeg)$/,
            use: {
                loader: 'file-loader',
            }
        },
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: ['raw-loader', 'glslify-loader'],
            })
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                pathname: '/api/multimedia/image/**',
                search: '',
            },
            {
                protocol: 'http',
                hostname: 'ec2-43-206-162-75.ap-northeast-1.compute.amazonaws.com',
                pathname: '/api/multimedia/image/**',
                search: '',
            }
        ],
    }

};

export default nextConfig;
