import React from 'react'
import './Header.css'
import { BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount } from '@mui/icons-material'
import HeaderOption from './HeaderOption'


function Header() {


  return (
    <div className='header'>


<div className='header_left'>
<img src='/linkedin.png' alt=''/>
<div className='header_search'>
    <Search />
    <input type='text' placeholder='Search'/>
</div>
</div>
<div className='header_right'>
    <HeaderOption Icon={Home} title="Home"/>
    <HeaderOption  Icon={SupervisorAccount} title= "My Network" />
    <HeaderOption Icon={BusinessCenter} title="Jobs"/>
    <HeaderOption Icon={Chat} title="Home"/>
    <HeaderOption Icon={Notifications} title="Notification"/>
    <HeaderOption avatar="https://media.licdn.com/dms/image/D5635AQE9ggjXQLkT9w/profile-framedphoto-shrink_400_400/0/1676571398237?e=1684872000&v=beta&t=4Zh7vQva1hbYHB9EPK8YklC30zU5UqpRm0VY_9rLWwA"/>



</div>
    </div>
  )
}

export default Header