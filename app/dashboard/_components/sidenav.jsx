import React from 'react';
import { LayoutDashboard } from 'lucide-react';
import { SquarePlus } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';
import { FilePlus } from 'lucide-react';

const Sidenav = () => {
    const MenuItem = [
        {
            id: 1,
            name: 'Dashboard',
            icon:LayoutDashboard
        },
        {
            id: 2,
            name: 'Upgrade',
            icon:SquarePlus,
        },
        {
            id: 3,
            name: 'Create New',
            icon:FilePlus

        },
        {
            id: 4,
            name: 'Account',
            icon:UserRoundPen
        }
    ];

    return (
        <div className="w-40 h-screen bg-gray-200 shadow-lg p-4 flex-col item-start">
            {MenuItem.map((item) => (
                <div className="py-10  " key={item.id} >
                    <div className='flex gap-3 hover:bg-purple-900 hover:text-white '>
                        <item.icon/>
                        {item.name}
                    </div>
                    
                </div>
            ))}
        </div>
    );
};

export default Sidenav;
