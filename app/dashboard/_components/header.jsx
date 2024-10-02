import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { UserButton } from '@clerk/nextjs'


const Header = () => {
  // Inline styles for the header and logo
  

  return (
    <header className='p-3 px-5'>
        <div className='flex gap-3 item-center'>
        <Image 
        src={'/login.jpg'} 
        alt="Logo" 
        width={50} // Set width for Next.js Image component
        height={30} // Set height for Next.js Image component
       
      />
      <h1 className='font-bold text-xl'>VIDEO GENERATOR</h1>
        </div>
        <div>
        <Button variant="outline">Dashboard</Button>
        <UserButton></UserButton>

        </div>
     
    </header>
  )
}

export default Header;
