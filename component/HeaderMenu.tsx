import NavigationLink from "@/component/NavigationLink";
import SearchComponent from "@/component/SearchComponent";

export default function HeaderMenu() {
    const headerStyle = "flex items-center flex-col md:flex-row md:space-x-8";

    return (
        <div className={headerStyle}>
            <SearchComponent></SearchComponent>
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
