import React from 'react'
import {NavLink} from "react-router-dom"
import "./login.css"
const Login = () => {
    return (
        <>
            <div className='logincontainer'>
                <div className="form" method="PUSH">
                    <div className='content'>
                    <form>
                        <div className='email'>
                            <lable>Email: </lable>
                            <br/>
                            <input className='email' name="email"></input>
                        </div>
                        <div className='password'>
                            <label>Password: </label>
                            <br/>
                            <input type="password" name="password" />
                        </div>
                        
                        <div className='login'>
                            <button type = "submit">Submit</button>
                        </div></form>
                        <br/>
                        <div className='regist'>
                         <NavLink to="/registration"><button type="regist">Create New Account</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login