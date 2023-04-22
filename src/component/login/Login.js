import React from 'react'
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
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login