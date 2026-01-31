import Link from "next/link";
import { cn } from "@/lib/utils";

const items = [
    { name: "Photography", href: "/photography" },
    { name: "Private", href: "/private" },
    { name: "Work", href: "/work" },
];

export function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-paper/80 backdrop-blur-sm transition-all duration-300">
            <Link href="/" className="font-serif italic text-2xl text-ink hover:opacity-70 transition-opacity">
                SB
            </Link>
            <div className="flex gap-8">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-xs uppercase tracking-widest text-ink/70 hover:text-ink transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
