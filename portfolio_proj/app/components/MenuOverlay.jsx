import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {links.map((page, index) => (
                <li key={index}>
                    <NavLink href={page.link} title={page.title} />
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay