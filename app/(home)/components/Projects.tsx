import React from 'react';
import { SiClerk, SiCloudinary, SiNextdotjs, SiPayloadcms, SiReact, SiShadcnui, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/DirectionAwareHover';

const Projects = () => {
    const projects = [
        {
            title: 'Visionize (AI SaaS App)',
            tech: [SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiClerk, SiCloudinary, SiShadcnui],
            link: 'https://github.com/ShayneDoan/Visionize',
            cover: '/visionize.png',
            background: 'bg-indigo-500',
        },
        {
            title: 'Figma Clone',
            tech: [SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiShadcnui],
            link: 'https://github.com/ShayneDoan/figma_clone',
            cover: '/figma-clone.png',
            background: 'bg-green-500',
        },
        {
            title: 'E-commerce Website',
            tech: [SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiClerk, SiPayloadcms],
            link: 'https://github.com/ShayneDoan/ecommerce',
            cover: '/ecommerce.png',
            background: 'bg-red-500',
        },
        {
            title: 'Personal Portfolio',
            tech: [SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiShadcnui],
            link: 'https://github.com/ShayneDoan/personal_portfolio',
            cover: '/portfolio.png',
            background: 'bg-yellow-600',
        },
    ];

    return (
        <div className="py-10 px-5 sm:px-0"> 
            <Title text="Projects 🎨" className="flex flex-col items-center justify-center rotate-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5"> 
                {projects.map((project, index) => {
                    const { link, title, tech, cover, background } = project;
                    return (
                        <Link href={link} key={index}>
                            <div className={cn('p-5 rounded-md min-h-full', background)}> 
                                <DirectionAwareHover imageUrl={cover} className="w-full h-full space-y-5 cursor-pointer"> 
                                    <div className="flex flex-col justify-between h-full"> 
                                        <h1 className="text-2xl font-bold">{title}</h1>
                                        <div className="flex gap-5">
                                            {tech.map((Icon, iconIndex) => (
                                                <Icon className="w-8 h-8" key={iconIndex} />
                                            ))}
                                        </div>
                                    </div>
                                </DirectionAwareHover>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
