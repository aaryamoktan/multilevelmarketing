import React, { useState } from 'react'
import "./registration.css"
import { Link } from 'react-router-dom'
const Registration = () => {
  const [user, setuser] = useState(
    {
      username: '', email: '', password: '', repassword: ''
    }
  )
  let name, value;
  const onhandle = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value })
    console.log(e)
  }
  const submit = async(e)=>
  {
    e.preventDefault();
    const {username,email,password} = user
    try{
      await fetch("/registration",{
        method: "POST",
        headers:
        {
          "Content-Type":"application/json"
        },
        body:JSON.stringify(
          {
            username,email,password
          }
        )

      })
    }
    catch(err)
    {
      console.log(err)
    }
  }

  return (
      <><div className='regist'>
        <div className='registcont'>
          <form>
            <p>Registration-Here</p>
            <div className='form'>
              <div className='username'>
                <lable>Username: </lable>
                <br />
                <input type="text" name="username" onChange={onhandle} value={user.username} required />
              </div>
              <div className='email' >

                <lable>Email: </lable>
                <br />
                <input type="text" name="email" onChange={onhandle} value={user.email} required />
              </div>
              <div className='password'>
                <lable>Password: </lable>
                <br />
                <input type="password" name="password" onChange={onhandle} value={user.password} required />
              </div>
              <div className='password'>
                <lable>Re-Password: </lable>
                <br />
                <input type="password" name="repassword" onChange={onhandle} value={user.repassword} required />
              </div>
              <br />
              <div className='submit'>
               <Link to="/login"><button type="submit" onClick={submit} >Submit</button></Link> 
              </div>
            </div>
          </form>
        </div>
      </div></>
    )
  }

  export default Registration