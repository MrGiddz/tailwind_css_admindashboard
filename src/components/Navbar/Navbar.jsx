import React, { useEffect, useState } from 'react';
import { NavLinks } from './navbar_list';
import { useRecoilState } from 'recoil';
import { ActiveTabState } from '../../atom/ActiveTabState';


const Navbar = () => {
  return (
    <div className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
        <div className="space-y-8 w-full">
            {
                NavLinks.slice(0, 4).map(link => (
                    <NavItem key={link.id} link={link}/>
                ))
            }
            <hr className='w-full border-t border-gray-200' />
            {
                NavLinks.slice(4, (NavLinks.length)).map(link => (
                    <NavItem key={link.id} link={link} />
                ))
            }
        </div>
        <div className="xl:flex hidden flex-col text-left items-center justify-start space-y-4 p-4">
            <h1 className='w-full font-medium text-sm'>
                Grow Your <br /> Saving Now!
            </h1>
            <p>Pick an investment strategy that reflects your goals</p>
            <button className='w-full py-2 px-3 bg-black text-white'>Become a Pro</button>
        </div>
    </div>
  )
}

function NavItem({link}) {
    const [activeNavItem, setActiveNavItem] = useRecoilState(ActiveTabState)
    useEffect(() => {
        console.log({activeNavItem});
    }, [activeNavItem])
    return (
        <div 
            key={link.id} 
            className={`w-full flex items-center justify-start 
            space-x-8 px-5 cursor-pointer group hover:border-gray-900 
            border-l-4 border-transparent ${activeNavItem === link.id && "border-gray-900"}`}
            onClick={() => setActiveNavItem(link.id)}
        >
            <span>{link.icon}</span>
            <h1 
                className={`text-gray-600 text-sm group-hover:text-black xl:flex hidden 
                ${activeNavItem === link.id && "text-black"}`}>{link.title}</h1>
        </div>
    )
}

export default Navbar