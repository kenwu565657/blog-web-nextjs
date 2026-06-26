import Link from "next/link";

const footerLinks = [
    { href: "/about", label: "About" },
    { href: "/project", label: "Project" },
    { href: "/how-to", label: "How To" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-8 border-t border-gray-200 bg-white px-4 py-6 text-sm text-gray-600">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <p>© {year} ContentFarm. All rights reserved.</p>
                <div className="flex gap-4">
                    {footerLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-gray-900">
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
