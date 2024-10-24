'use client'
import { usePathname } from 'next/navigation'
import React from 'react';
import { LayoutDashboard } from 'lucide-react';
import { SquarePlus } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';
import { FilePlus } from 'lucide-react';
import Link from 'next/link';





const Sidenav = () => {
    const MenuItem = [
        {
            id: 1,
            name: 'Dashboard',
            icon:LayoutDashboard,
            path:'/dashboard'
        },
        {
            id: 2,
            name: 'Upgrade',
            icon:SquarePlus,
            path:'/upgrade'
        },
        {
            id: 3,
            name: 'Create New',
            icon:FilePlus,
            path:'/create-new'

        },
        {
            id: 4,
            name: 'Account',
            icon:UserRoundPen,
            path:'/account'
        }
    ];
  
  const currentPath = usePathname()
  console.log(currentPath)

    return (
        <div className="w-40 h-screen bg-gray-200 shadow-lg p-4 flex-col item-start">
            {MenuItem.map((item) => (
                <div className="py-10  " key={item.id} >
                   <div
            className={`flex gap-3 p-2 rounded ${
              currentPath === item.path
                ? 'bg-purple-900 text-white' // Active state
                : 'hover:bg-purple-900 hover:text-white'
            }`}
          >
            
            <item.icon />
            <Link href={item.path}> {item.name}</Link>
           
          </div>
                    
                </div>
            ))}
        </div>
    );
};

export default Sidenav;
