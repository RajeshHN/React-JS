import React from 'react'
import {useDispatch} from 'react-redux'
import service from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispathch=useDispatch()
    const logoutHandler=()=>{
        service.logout().then(()=>{
dispathch(logout())
        })
    }
  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >LogOut</button>
  )
}

export default LogoutBtn