import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [Username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)

const handlSubmit=(e)=>{
    //Prevent from page from refreshing
e.preventDefault()
setUser({Username,password})
}

  return (
 <div>
    <h2>Login</h2>
    <input 
    type="text"
    value={Username}
    onChange={(e)=>setUsername(e.target.value)}
    placeholder='UserName'
    />
    {""}
    <input 
    type="password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    placeholder='Password'
    />
    <button
    onClick={handlSubmit}
    >Submit</button>
 </div>
  )
}

export default Login