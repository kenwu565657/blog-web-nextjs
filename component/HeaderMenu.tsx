import NavigationLink from "@/component/NavigationLink";
import SearchInput from "@/component/SearchInput";

export default function HeaderMenu() {
    const headerStyle = "flex flex-row space-x-8";

    return (
        <div className={headerStyle}>
            <SearchInput></SearchInput>
            <NavigationLink href={"/home"}>
                <span className={headerStyle}>Home Page</span>
            </NavigationLink>
            <NavigationLink href={"/blogpost"}>
                <span className={headerStyle}>Blog Posts</span>
            </NavigationLink>
            <NavigationLink href={"/about"}>
                <span className={headerStyle}>About Me</span>
            </NavigationLink>
        </div>
    );
}
