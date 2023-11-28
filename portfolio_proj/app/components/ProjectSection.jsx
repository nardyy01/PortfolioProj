"use client"
import React, { useState } from 'react'
import ProjectCards from './ProjectCards'
import ProjectTags from './ProjectTags'

const projectData = [
    {
        id: 0,
        title: "Coming",
        description: "description",
        image: "",
        tag: ["All", "Code"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 1,
        title: "Soon",
        description: "description",
        image: "",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/"
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState('All')

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectData.filter((project) => project.tag.includes(tag))

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTags onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTags onClick={handleTagChange} name="Code" isSelected={tag === "Code"} />
            </div>
            <div className='grid md:grid-cols-3 gap-3 md:gap-12'>
                {filteredProjects.map((project) => (
                    <ProjectCards
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectSection