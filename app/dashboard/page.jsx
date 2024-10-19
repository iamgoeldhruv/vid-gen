'use client'
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import EmptyVideoList from './_components/emptyVideoList';
import Link from 'next/link';

const Dashboard = () => {
  const [videoList, setVideoList] = useState([]);

  return (
    <>
      <div className='flex justify-between p-4'>
        <h1 className='text-[30px] text-purple-600'>Dashboard</h1>
        <Link href="/dashboard/create-new">
            <Button className="">+Create New</Button>
      </Link>
      </div>
      {videoList.length === 0 && (
        <div className="flex items-center mt-40 ml-[30vw]">
          <div className="border-2 border-purple-600 rounded-lg p-20">
            <EmptyVideoList />
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
