"use client"
import React, { useTransition, useState, useRef } from 'react'
import ProjectCards from './ProjectCards'
import ProjectTags from './ProjectTags'
import { motion, useInView } from 'framer-motion'

const projectData = [
    {
        id: 1,
        title: "Open Combat",
        description: "2D Fighting Game",
        image: "/images/open_combat.png",
        tag: ["All", "Web", "Game"],
        gitUrl: "https://github.com/nardyy01/Open_Combat",
        previewUrl: "https://opencombat.netlify.app/"
    },
    {
        id: 2,
        title: "Tervive",
        description: "Terminal Text-Based Rougelike Game Concept",
        image: "/images/Tervive.png",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/nardyy01/Tervive/tree/main",
        previewUrl: "#projects"
    },
    {
        id: 3,
        title: "YouNoob",
        description: "YouTube Clone w/ basic functionality",
        image: "/images/YouNoob.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/nardyy01/YT_Clone",
        previewUrl: "#projects"
    },
    {
        id: 4,
        title: "RDD",
        description: "Web Portfolio",
        image: "/images/Portfolio_pic.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/nardyy01/PortfolioProj",
        previewUrl: "#top"
    },
    {
        id: 5,
        title: "Google Page Mimic",
        description: "HTML/CSS Page Mimic",
        image: "/images/google_mimics.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/nardyy01/GooglePage",
        previewUrl: "https://googlepagemimic.netlify.app/"
    },

]

const ProjectSection = () => {
    const [tag, setTag] = useState('All')
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectData.filter((project) => project.tag.includes(tag))

    const cardVariants = {
        initial: { x: 100, opacity: 0 },
        animate: { x: 0, opacity: 1 }
    }

    return (
        <section name='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4 '>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTags onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTags onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTags onClick={handleTagChange} name="Game" isSelected={tag === "Game"} />
            </div>
            <ul ref={ref} className='grid md:grid-cols-3 gap-3 md:gap-12'>
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial='initial'
                        animate={isInView ? 'animate' : 'initial'}
                        transition={{ duration: 1, delay: index * 0.5 }}>
                        <ProjectCards
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectSection