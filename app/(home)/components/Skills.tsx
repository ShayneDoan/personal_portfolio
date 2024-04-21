"use client"
import React from 'react'
import Title from './Title'
import { CardHoverEffect } from '@/components/ui/CardHoverEffect'
import { SiJavascript, SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import { DiJava } from 'react-icons/di'

const Skills = () => {
    const skills = [
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "Javascript",
            Icon: SiJavascript,
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },
        {
            text: "Java",
            Icon: DiJava,
        },
    ]

    return (
        <div className="max-w-5xl mx-auto px-8">
            <Title text="Skills 🛠️" className="flex flex-col items-center justify-center -rotate-6" />
            <CardHoverEffect items={skills} />
        </div>
    )
}

export default Skills