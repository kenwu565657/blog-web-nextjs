interface SearchResultHeaderProps {
    searchResultCount: number;
    searchExecutionTimeInMs: number;
    maxSearchScore: number;
}

export default function SearchResultHeader(props: SearchResultHeaderProps) {
    return (
        <div className="flex flex-row gap-x-4 justify-between">
            <NumberCard number={props.searchResultCount} label={"Search Result Count"}/>
            <NumberCard number={props.maxSearchScore} label={"Max Search Score"}/>
            <NumberCard number={props.searchExecutionTimeInMs} label={"Search Execution Time (ms)"}/>
        </div>
    )
}

interface NumberCardProps {
    number: number;
    label: string;
}

function NumberCard(props: NumberCardProps) {
    return (
        <div>
            <span>{props.label}: </span>
            <span>{props.number}</span>
        </div>
    )
}
