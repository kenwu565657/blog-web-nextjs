import {Metadata} from "next";
import "./blogpost.css";
import Header from "@/component/Header";

export const metadata: Metadata = {
}

export default function BlogPostContentPageLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Header></Header>
        {children}
        </body>
        </html>
    );
}
