
import { NavLink } from 'react-router-dom'
import "./style/home.css"
import logo from './Image/Logo.png'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import { useLogOut } from '../hooks/useLogOut';

export default function HomeNavbar({user}) {
    const { logout } = useLogOut()

    const HandleLogOut = (()=>{
        logout()
    })  

    const [ menu, setMenu ] = useState(false)

    const HandleMenu = (()=>{
        if(menu){
            setMenu(false)
        }else{
            setMenu(true)
        }
    })

return (
    <div className='HomeNavebar'>
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
                <div className="profile">
                    <div className="profile-container">
                        <div className="name">
                            <h3> {user.email} </h3>
                        </div>
                        <div className="cart-container">
                            <p className='cart'> <AiOutlineShoppingCart  size={34} /> </p>
                        </div>
                        <div className="menu">
                            <h3 onClick={HandleMenu}> <FiMenu /></h3>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        { menu &&
        <div className="menubar">
            <div className="menubar-container">
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
                    <div className="logout-btn">
                        <button onClick={HandleLogOut}>Logout</button>
                    </div>
                </div>
            </div>
        </div> }
    </div>
  )
}
