import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Viewuser from './Dashboardinner/viewuser/Viewuser';
import Registration from '../login/Registration';
import Addnewuser from './Dashboardinner/addnewuser/Addnewuser';
const Routesn = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Addnewuser/>}/>
          <Route path="/viewuser" element={<Viewuser/>}/>
          
        </Routes>
    </>
  )
}

export default Routesn