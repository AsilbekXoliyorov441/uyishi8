import React from 'react'
import Header from '../header'
import Sidebar from '../sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <main className="ml-[300px] mt-[20px]">
        <Outlet/>
      </main>
    </div>
  )
}

export default AdminLayout