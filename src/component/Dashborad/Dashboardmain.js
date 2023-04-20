import React from 'react'
import Dashboard from './Dashboard'
import Routesn from './routesn'
import "./Dashmain.css"
const Dashboardmain = () => {
  return (
    <>
        <div className='dash1'>
            <div className='dash2'>
            <Dashboard/>
            </div>
            <div className='dash3'>
            <Routesn/>
            </div>
        </div>
    </>
  )
}

export default Dashboardmain