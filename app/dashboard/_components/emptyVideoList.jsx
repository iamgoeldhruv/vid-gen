import React from 'react';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

const EmptyVideoList = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        You don't have any videos created yet.
      </h1>
      <Link href="/dashboard/create-new">
            <Button className="mt-2">Create A New Video</Button>
      </Link>
      
    </div>
  );
};

export default EmptyVideoList;
