interface SearchInputProps {
    openSearchPopUpFunction: () => void;
}

export default function SearchInputButton(props: SearchInputProps) {
    return (
        <input className='border-r-3 border-cyan-800 pl-1 text-clip'
               placeholder="Search In ContentFarm..."
               onClick={() => props.openSearchPopUpFunction()}
        />
    )
}
