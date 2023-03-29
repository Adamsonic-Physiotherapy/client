import React from 'react'
import {  useState } from "react"
import "./style/login.css"
import { useLOgin } from "../hooks/useLogin";
import { IoCloseSharp } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';


export default function Login() {

    const [ email, setEmail ] = useState('')
    const [ Password, setPassword ] = useState('')
    const { login, isLoading, error } = useLOgin();
    const HandleSubmit = ((e)=>{
        e.preventDefault()
        const data = { email, Password }
        login(data)
    })

    const navigate = useNavigate()


    const HandleCancel = (()=>{
        navigate(-1)
    })

  return (
    <div className='Login'>
            <h3 className='cancel-icon' onClick={HandleCancel}> <IoCloseSharp /></h3>
        <div className="login-container">
            <form onSubmit={HandleSubmit}>
                <h2>Login</h2>
                <div className="email">
                    <input type="text" placeholder='Email' onChange={((e)=> setEmail(e.target.value))} value={email} />
                </div>
                { error && <p className='error-message'> {error} </p> }
                <div className="email">
                    <input type="password" placeholder='Password' onChange={((e)=> setPassword(e.target.value))} value={Password} />
                </div>
                {isLoading ? <button>Loading...</button> :
                         <button disabled={isLoading} type="submit">Submit</button> 
                    }
            </form>
        </div>
    </div>
  )
}
