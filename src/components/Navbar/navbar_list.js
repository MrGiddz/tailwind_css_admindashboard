import { 
    ChatBubbleLeftEllipsisIcon, 
    CogIcon, 
    ArrowRightOnRectangleIcon, 
    ShoppingCartIcon, 
    UserIcon,
    ChartBarIcon } from '@heroicons/react/24/outline';

export const NavLinks = [
    {
        id: 0,
        title: 'Dashboard',
        icon: <ChartBarIcon className='nav-icon'/>
    },
    {
        id: 1,
        title: 'Market',
        icon: <ShoppingCartIcon className='nav-icon'/>
    },
    {
        id: 2,
        title: 'Portfolio',
        icon: <UserIcon className='nav-icon'/>
    },
    {
        id: 3,
        title: 'News',
        icon: <ChatBubbleLeftEllipsisIcon className='nav-icon'/>
    },
    {
        id: 4,
        title: 'Settings',
        icon: <CogIcon className='nav-icon'/>
    },
    {
        id: 5,
        title: 'Logout',
        icon: <ArrowRightOnRectangleIcon className='nav-icon'/>
    }
]