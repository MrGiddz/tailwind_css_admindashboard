import React from 'react';
import { BellAlertIcon, BellIcon, CpuChipIcon, InboxIcon, MagnifyingGlassIcon as SearchIcon, UserCircleIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <div className='bg-[#F0F5F5] w-full py-4 items-center justify-between flex px-10'>
        {/* Search */}
        <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2'>
            {/* Icon */}
            <SearchIcon className='w-4 h-4'/>
            <input type="text" name="" id="" placeholder='Search Anything' className='bg-transparent outline-none '/>
        </div> 

        {/* Logo */}
        <div className='item-center w-full justify-center flex space-x-4'>
            <CpuChipIcon className='w-6 h-6'/>
            <h1 className="text-xl text-gray-900 font-medium">DevDashboard</h1>
        </div>

        {/* Icons */}
        <div className="item-center justify-end space-x-6 flex w-full header-icon">
            <BellIcon />
            <InboxIcon />
            <UserCircleIcon />
        </div>
    </div>
  ) 
} 
 
export default Header 