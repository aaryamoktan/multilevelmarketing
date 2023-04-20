import React from 'react'
import "./addnewuser.css"
const Addnewuser = () => {
  return (
    <>
        <div className='addnewuser'>
            <div className='adduser'>
                <div className='name'>
                    <lable >Name:</lable>
                    <br/>
                    <input type="text" required/>
                </div>
                <div className='email'>
                    <lable>Email:</lable>
                    <br/>
                    <input type="text" required/>
                </div>
                <div className='Password'>
                    <lable>Password:</lable>
                    <br/>
                    <input type="password" required/>
                </div>
                <div className='Provision'>
                    <lable>Provision</lable>
                    <br/>
                    <input type="text" required/>
                </div>
                <div className='Munsipality'>
                    <lable>Munsipality</lable>
                    <br/>
                    <input type="text" required/>
                </div>

            </div>
        </div>
    </>
  )
}

export default Addnewuser