import React from 'react'
import Dashboard from './Dashborad/Dashboard'
import Addnewuser from './Dashborad/Dashboardinner/addnewuser/Addnewuser'
import Nevbar from './Nevbar/Nevbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Viewuser from './Dashborad/Dashboardinner/viewuser/Viewuser'

const Home = () => {
  return (
    <>
        <Dashboard />
        <Nevbar />
        <Routes>
          <Route path="addnewuser" element={<Addnewuser/>}/>
          <Route path="viewuser" element={<Viewuser/>}/>
        </Routes>
    </>
  )
}

export default Home