import React from 'react'
import NavScrollExample from './Nevbar/Nevbar'
import { Route,Routes } from 'react-router-dom'
import Registration from './login/Registration'
import Home2 from './Home2'
import Login from './login/Login'
const Home = () => {
  return (
    <>
        <Login/>
        
        <Routes>
        <Route path="/regist" element={<Registration/>}/>
        <Route path="/home" element={<Home2/>}/>
        </Routes>
    </>
  )
}

export default Home