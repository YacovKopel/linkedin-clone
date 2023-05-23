import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'


function HeaderOption({Icon, title, avatar, onClick}) {
    const user= useSelector(selectUser)
  return (
    <div onClick={onClick}  className='headerOption'>
        {Icon && <Icon className='headerOption_icon' />}
        {avatar && <Avatar className="headerOption_icon" src={user?.photoUrl}>{user?.email[0].charAt(0).toUpperCase()}</Avatar>}
        <h3 className='headerOption_title'> {title}</h3>

        </div>
  )
}

export default HeaderOption