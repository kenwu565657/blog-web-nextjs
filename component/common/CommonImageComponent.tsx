import Image, {ImageLoaderProps} from "next/image";
import {getBackendGatewayEndPoint} from "@/utils/EnvironmentVariableUtils";

interface CommonImageComponentProps {
    src?: string|null;
    className?: string;
    alt?: string;
    width?: number;
    height?: number;
    isLocal?: boolean;
    sizes?: string;
    isPriority?: boolean;
    isFill?: boolean;
}

const noPhotographyIconLocalPath: string = "/icon/no_photography_icon.svg";

export default function CommonImageComponent(props: CommonImageComponentProps) {

    let className: string = "";
    if (props.className) {
        className = props.className;
    }
    const imagePath: string = props.isLocal ? getLocalImagePath(props.src) : getImagePath(props.src);
    let alt: string = "Oops File Cannot Be Loaded";
    if (props.alt) {
        alt = props.alt;
    }
    let width: number|undefined = 100;
    if (props.width) {
        width = props.width;
    }
    if (props.sizes) {
        width = undefined;
    }
    let height: number|undefined = 100;
    if (props.height) {
        height = props.height;
    }
    if (props.sizes) {
        height = undefined;
    }
    let sizes: string|undefined = "100vw";
    if (props.sizes) {
        sizes = props.sizes;
    }
    if (width || height) {
        sizes = undefined;
    }
    return (
        <Image
            //loader={props.isLocal ? localImageLoader : onlineImageLoader}
            src={imagePath}
            className={className}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            priority={props.isPriority}
            fill={props.isFill}
        >
        </Image>
    )
}

function localImageLoader(imageLoaderProps:  ImageLoaderProps) {
    const originalSrc: string = imageLoaderProps.src;
    return getLocalImagePath(originalSrc);
}

function onlineImageLoader(imageLoaderProps:  ImageLoaderProps) {
    const originalSrc: string = imageLoaderProps.src;
    return getImagePath(originalSrc);
}

function getLocalImagePath(path: string|undefined|null): string {
    if (!path) {
        return noPhotographyIconLocalPath;
    }
    return path;
}

function getImagePath(path: string|undefined|null): string {
    const backendGatewayEndPoint: string = getBackendGatewayEndPoint();
    if (!path) {
        return noPhotographyIconLocalPath;
    }
    const fileName: string|undefined = path.split('\\').pop()?.split('/').pop();
    if (fileName) {
        return `${backendGatewayEndPoint}/multimedia/image/${fileName}`
    } else {
        return noPhotographyIconLocalPath;
    }
}
