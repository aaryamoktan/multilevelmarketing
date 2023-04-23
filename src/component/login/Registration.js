import React from 'react'
import "./registration.css"
import { Link } from 'react-router-dom'
const Registration = () => {
  return (
    <><div className='regist'>
      <div className='registcont'>
        <form>
        <p>Registration-Here</p>
          <div className='form'>
            <div className='username'>
              <lable>Username: </lable>
              <br/>
              <input type="text" required/>
            </div>
            <div className='email'>
            
              <lable>Email: </lable>
              <br/>
              <input type="text" required/>
            </div>
            <div className='password'>
              <lable>Password: </lable>
              <br/>
              <input type="password" required/>
            </div>
            <div className='password'>
              <lable>Re-Password: </lable>
              <br/>
              <input type="password" required/>
            </div>
            <br/>
            <div className='submit'>
             <Link to="/login"><button type="submit">Submit</button></Link>
            </div>
          </div>
        </form>
      </div>
    </div></>
  )
}

export default Registration