import React from 'react'

const ProjectTags = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected ?
        "text-white bg-orange-600" :
        "text-[#ADB7BE] text-slate-600 hover:border-white"

    return (
        <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`} onClick={() => onClick(name)}>
            {name}
        </button>
    )
}

export default ProjectTags