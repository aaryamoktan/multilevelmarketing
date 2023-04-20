import React from 'react'
import "./Dashboard.css";
import {BsPersonFillLock,BsListUl} from "react-icons/bs";
import { AiFillEye,AiOutlineUser,AiFillGold,AiOutlineLogout } from "react-icons/ai";
import { Link } from 'react-router-dom';
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
                        <li><Link to="/addnewuser"><AiOutlineUser/> Add New User</Link></li>
                        <li><Link to="/viewuser"><AiFillEye/> View User</Link></li>
                        <li><Link><AiFillEye/> View Free User</Link></li>
                        <li><Link><AiFillGold/> View Binary Tree</Link></li>
                        <li className='last'><Link>Generate New User</Link></li>
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