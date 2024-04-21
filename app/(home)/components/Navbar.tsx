import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const Navbar = ({ className }: { className?: string }) => {
    const socials = [
        {
            Link: "https://www.linkedin.com/in/shayaansufi",
            Label: "LinkedIn",
            Icon: SiLinkedin,
        },
        
        {
            Link: "https://github.com/ShayneDoan",
            Label: "Github",
            Icon: SiGithub,
        },

        {
            Link: "https://www.instagram.com/shaynedemain/",
            Label: "Instagram",
            Icon: SiInstagram,
        }
    ];


    return (
        <nav className={cn("py-10 flex justify-between items-center animate-move-down", className)}>
            <h1 className="text-2x1 font-bold underline underline-offset-8 decoration-red-900 -rotate-2">Shayaan Sufi 📱</h1>
            <div className="flex items-center gap-5">
                {socials.map((socials, index) => {
                    const Icon = socials.Icon;

                   return (
                    <Link href={socials.Link} key={index} aria-label={socials.Label}>
                        <Icon className="size-5 hover:scale-125 transition-all"/>
                    </Link>
                   )
                })}
            </div>
        </nav>
    )
}

export default Navbar