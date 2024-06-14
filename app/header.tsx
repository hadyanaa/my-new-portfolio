'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header(){
    const pathname = usePathname();
    return (
        <div className="flex flex-col justify-center gap-4">
            <Link href="/">
                <div className={`rounded-full w-14 h-14 ${pathname === '/' ?  'bg-secondary' : 'bg-accent'}`}>Home</div>
            </Link>
            <Link href="/about">
                <div className={`rounded-full w-14 h-14 ${pathname === '/about' ?  'bg-secondary' : 'bg-accent'}`}>About Me</div>
            </Link>
            <Link href="/portfolio">
                <div className={`rounded-full w-14 h-14 ${pathname === '/portfolio' ?  'bg-secondary' : 'bg-accent'}`}>My Portfolio</div>
            </Link>
            <Link href="/contact">
                <div className={`rounded-full w-14 h-14 ${pathname === '/contact' ?  'bg-secondary' : 'bg-accent'}`}>Contact</div>
            </Link>
            <Link href="/blog">
                <div className={`rounded-full w-14 h-14 ${pathname === '/blog' ?  'bg-secondary' : 'bg-accent'}`}>My Blog</div>
            </Link>
        </div>
    );
}