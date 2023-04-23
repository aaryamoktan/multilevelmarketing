import React from 'react'
import NavScrollExample from './Nevbar/Nevbar'
import { Route,Routes } from 'react-router-dom'
import Registration from './login/Registration'
import Login from './login/Login'
const Home = () => {
  return (
    <>
        <Login/>
        <Routes>
        <Route path="/regist" element={<Registration/>}/>
        </Routes>
    </>
  )
}

export default Home