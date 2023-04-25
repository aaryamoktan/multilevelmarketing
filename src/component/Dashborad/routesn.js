import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Viewuser from './Dashboardinner/viewuser/Viewuser'
import Viewb from './Dashboardinner/viewbinarytree/Viewb';
import Registration from '../login/Registration';
import Viewn from './Dashboardinner/viewfreeuser/Viewn';
import Addnewuser from './Dashboardinner/addnewuser/Addnewuser';
import About from '../Nevbar/Newbbarinner/about/About';
import Contact from '../Nevbar/Newbbarinner/contact/Contact';
import Progress from '../Nevbar/Newbbarinner/progress/Progress';
const Routesn = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Addnewuser/>}/>
          <Route path="/viewuser" element={<Viewuser/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/viewfreeuser" element={<Viewn/>}/>
          <Route path="/viewbinarytree" element={<Viewb/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/progress" element={<Progress/>}/>  
        </Routes>
    </>
  )
}

export default Routesn