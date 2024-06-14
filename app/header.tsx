'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header(){
    const pathname = usePathname();
    return (
        <div className="flex flex-col justify-center gap-4">
            <Link href="/">
                {pathname === '/' ? <Image src="/icons/home.png" alt="icon home" width={48} height={48}/> :
                <Image src="/icons/home-white.png" alt="icon home" width={48} height={48}/>
                }
            </Link>
            <Link href="/about">
                {pathname === '/about' ? <Image src="/icons/about.png" alt="icon about" width={48} height={48}/> :
                <Image src="/icons/about-white.png" alt="icon about" width={48} height={48}/>
                }
            </Link>
            <Link href="/portfolio">
                {pathname === '/portfolio' ? <Image src="/icons/portfolio.png" alt="icon portfolio" width={48} height={48}/> :
                <Image src="/icons/portfolio-white.png" alt="icon portfolio" width={48} height={48}/>
                }
            </Link>
            <Link href="/contact">
                {pathname === '/contact' ? <Image src="/icons/contact.png" alt="icon contact" width={48} height={48}/> :
                <Image src="/icons/contact-white.png" alt="icon contact" width={48} height={48}/>
                }
            </Link>
            <Link href="/blog">
                {pathname === '/blog' ? <Image src="/icons/blog.png" alt="icon blog" width={48} height={48}/> :
                <Image src="/icons/blog-white.png" alt="icon blog" width={48} height={48}/>
                }
            </Link>
        </div>
    );
}