interface ProgressLoaderProps {
    className?: string;
}

export default function ProgressLoader(props: ProgressLoaderProps) {
    let className: string = "loader";
    if (props.className) {
        className = `${className} ${props.className}`;
    }

    return (
            <div className={className}>
            </div>
    )
}
