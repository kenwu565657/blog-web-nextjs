import Image from "next/image";
import {getBackendGatewayEndPoint} from "@/utils/EnvironmentVariableUtils";

interface CommonImageComponentProps {
    src?: string|null;
    className?: string;
    alt?: string;
    width?: number;
    height?: number;
    isLocal?: boolean;
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
    let width: number = 600;
    if (props.width) {
        width = props.width;
    }
    let height: number = 600;
    if (props.height) {
        height = props.height;
    }
    return (
        <Image
            src={imagePath}
            className={className}
            alt={alt}
            width={width}
            height={height}
        >
        </Image>
    )
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
