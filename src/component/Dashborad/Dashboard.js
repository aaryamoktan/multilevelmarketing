import React from 'react'
import "./Dashboard.css";
import {BsPersonFillLock,BsListUl} from "react-icons/bs";
import { AiFillEye,AiOutlineUser,AiFillGold,AiOutlineLogout } from "react-icons/ai";
import { Link ,NavLink} from 'react-router-dom';
const Dashboard = () => {
  return (
    <>
        <div className='maindiv'>
            <div className='secmaindiv'>
                <div className='logo'>MLM</div>               
                <div className='dashboard'><BsListUl/> Dashboard</div>
                <div className='user'>
                    <p>User</p>
                    <ul>
                        <li><NavLink  style={{textDecoration:"none", color:'black'}} to="/"><AiOutlineUser/> Add New User</NavLink></li>
                        <li><NavLink style={{textDecoration:"none", color:'black'}} to="/viewuser"><AiFillEye/> View User</NavLink></li>
                        <li><NavLink style={{textDecoration:"none", color:'black'}} to="/viewfreeuser" ><AiFillEye/> View Free User</NavLink></li>
                        <li><NavLink style={{textDecoration:"none", color:'black'}}  to="/viewbinarytree"><AiFillGold/> View Binary Tree</NavLink></li>
                        <li className='last'><NavLink style={{textDecoration:"none", color:'black'}} >Generate New User</NavLink></li>
                    </ul>
                </div>
                <div className='managepeople'>
                    managepeople
                    <ul>
                        <li><BsPersonFillLock/> Change Password</li>
                        <li className='logout'><AiOutlineLogout/> logout</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
export default Dashboard