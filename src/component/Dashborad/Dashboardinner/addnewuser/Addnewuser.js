import React from 'react'
import "./addnewuser.css"
const Addnewuser = () => {
    return (
        <>
            <div className='addnewuser'>
            <br/>
                <p>fill the form</p>
                
                <br />
                <form>
                <hr />
                <p>Basic Details</p>
                <div className='Personaldetails'>



                    <div className='name'>

                        <lable >Name:</lable>
                        <br />
                        <input type="text" required />
                    </div>
                    <div className='email'>
                        <lable>Email:</lable>
                        <br />
                        <input type="text" required />
                    </div>
                    <div className='Password'>
                        <lable>Password:</lable>
                        <br />
                        <input type="password" required />
                    </div>
                    <div className='Gender'>
                        <lable>Gender: </lable>
                        <br />
                        <select>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <br/>
                <hr />
                <br />
                <p>Addressh</p>
                <div className='Addresh'>
                    <div className='Provision'>
                        <lable>Provision</lable>
                        <br />
                        <input type="text" required />
                    </div>
                    <div className='Munsipality'>
                        <lable>Munsipality</lable>
                        <br />
                        <input type="text" required />
                    </div>
                    <div className='City'>
                        <lable>City</lable>
                        <br />
                        <input type="text" required />
                    </div>
                    <div className='Wada'>
                        <lable>Wada_No: </lable>
                        <br />
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                </div>
                <br/>
                <hr />
                <br/>
                <p>Proof</p>
                <div className='adhar'>
                    <div className='Document_type'>
                        <lable>Document_Type: </lable>
                        <br />
                        <select>
                            <option value="Citizenship">Citizenship</option>
                            <option value="Passport">Passport</option>

                        </select>
                    </div>
                    <div className='Document_number'>
                        <label>Document Number:</label>
                        <br/>
                        <input type="text"/>
                    </div>
                    <div className='Issue_district'>
                        <label>Issue District:</label>
                        <br/>
                        <select>
                        <option value="sarlahi">Sarlahi</option>
                        <option value="Jhapa">Jhapa</option>
                        <option value="Chitwan">Chitwan</option>
                        <option value="Surkeht">Surkeht</option>
                        <option value="Dhading">Dhading</option>
                        <option value="nawalparasi">Nawalparasi</option>
                        <option value="Saptari">Saptari</option>
                        </select>
                    </div>
                    <div className='date'>
                        <label>Issue_date</label>
                        <br/>
                        <input type="date"/>
                    </div>
                    
                </div>
                <br/>
                <hr/>
                <br/>
                <div className='submit'>
                    <button type="submit">Submit</button>
                </div>
                </form>
            </div>



        </>
    )
}

export default Addnewuser