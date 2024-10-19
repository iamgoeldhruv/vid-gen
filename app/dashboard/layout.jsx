import React from 'react';
import Header from './_components/header';
import Sidenav from './_components/sidenav';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidenav className="w-64" /> {/* Adjust width as needed */}
        <div className="flex-1 p-4"> {/* Padding for the content area */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
