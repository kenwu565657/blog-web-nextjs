import NavigationLink from "@/component/NavigationLink";
import SearchComponent from "@/component/SearchComponent";

export default function HeaderMenu() {
    const headerStyle = "flex items-center flex-col divide-x-1 md:flex-row md:space-x-8 md:divide-y-1";
    const linkStyle = "hover:font-semibold";

    return (
        <div className={headerStyle}>
            <SearchComponent></SearchComponent>
            <NavigationLink href={"/home"}>
                <span className={linkStyle}>Home Page</span>
            </NavigationLink>
            <NavigationLink href={"/blogpost"}>
                <span className={linkStyle}>Blog Posts</span>
            </NavigationLink>
            <NavigationLink href={"/about"}>
                <span className={linkStyle}>About Me</span>
            </NavigationLink>
            <NavigationLink href={"/how-to"}>
                <span className={linkStyle}>How To</span>
            </NavigationLink>
        </div>
    );
}
