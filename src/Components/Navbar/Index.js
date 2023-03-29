import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style/index.css"
import logo from './Image/Logo.png'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";


export default function Navbar() {

    const [ menu, setMenu ] = useState(false)

    const HandleMenu = (()=>{
        if(menu){
            setMenu(false)
        }else{
            setMenu(true)
        }
    })

    const HandleCancel = (()=>{
        setMenu(false)
    })


return (
    <div className='Navebar'>
        <div className="navbar-container">
            <div className="logo">
               <img src={logo} alt="" />
               <h4>Admasonic Physiotherapy</h4>
            </div>
                <div className="navbar-details">
                    <div className="contents">
                    <div className="home">
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className="home">
                        <NavLink to='product'>Products</NavLink>
                    </div>
                    <div className="home">
                        <NavLink to='about'>About</NavLink>
                    </div>
                    <div className="home">
                        <NavLink to='contact'>Contact</NavLink>
                    </div>
                </div>
             
                <div className="Logins">
                    <div className="loginEl">
                        <NavLink to='login'>Login</NavLink>
                    </div>
                    <div className="signup">
                        <NavLink to='signup'>Create account</NavLink>
                    </div>
                    <div className="menu">
                        <h3 onClick={HandleMenu}> <FiMenu /></h3>
                    </div>
                </div> 
            </div>
        </div>
        { menu && 
        <div className="menubar">
            <div className="menubar-container">
            <div className="Logins">
                     <h3 className='cancel-icon' onClick={HandleCancel}> <IoCloseSharp /></h3>
                    <div className="loginEl">
                        <NavLink onClick={HandleCancel} to='login'>Login</NavLink>
                    </div>
                    <div className="signup">
                        <NavLink onClick={HandleCancel} to='signup'>Create account</NavLink>
                    </div>
                </div>
                <div className="contents">
                    <div className="home">
                        <NavLink onClick={HandleCancel} to='/'>Home</NavLink>
                    </div>
                    <div className="home">
                        <NavLink onClick={HandleCancel} to='product'>Products</NavLink>
                    </div>
                    <div className="home">
                        <NavLink onClick={HandleCancel} to='about'>About</NavLink>
                    </div>
                    <div className="home">
                        <NavLink onClick={HandleCancel} to='contact'>Contact</NavLink>
                    </div>
                </div>
            </div>
        </div> }
    </div>
  )
}
