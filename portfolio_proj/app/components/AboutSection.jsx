"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>C++</li>
                <li>JavaScript</li>
                <li>Perl</li>
                <li>Node.js</li>
                <li>C#</li>
                <li>DB2</li>
                <li>Python</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>Clayton State University - Bachelor's Degree</li>
            </ul>
        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <ul className='list-disc pl-2'>
                <li>JavaScript Algorithms and Data Structures</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                {/* Image and short description of what I do */}
                <div className='flex justify-center align-middle relative'>
                    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600 to-transparent rounded-full h-80 w-80 blur-xl'></div>
                    <Image
                        src="/images/3d_emoticon_meditate.png"
                        alt='Mood Image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={400}
                        height={400} />
                </div>


                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p>
                        Things about me...
                    </p>
                    {/* Tab buttons for select information */}
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>Certifications</TabButton>
                    </div>
                    <div className='mt-8 ml-3'>
                        {TAB_DATA.find((tabCurr) => tabCurr.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection