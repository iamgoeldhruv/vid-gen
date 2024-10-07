import React from 'react'
import Header from './_components/header'
import Sidenav from './_components/sidenav'

const DashboardLayout = ({children}) => {
  return (
    <div>
        <Header></Header>
        <Sidenav></Sidenav>
        {children}
      
    </div>
  )
}

export default DashboardLayout
