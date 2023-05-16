import { Avatar } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
        <img src='' alt=''/>
        <Avatar className='sidebar_avatar'/>
        <h2>Yacov Kopel</h2>
        <h4>yacovkopel@gmail.com</h4>
        </div>

        <div className='sidebar_stats'>

        <div className='sidebar_stat'>
            <p>Who viewed you</p>
            <p className='sidebar_statNumber'>1,393</p>

        </div>
        <div className='sidebar_stat'>
            <p>Views on post</p>
            <p className='sidebar_statNumber'>1,393</p>

        </div>
        </div>

        <div className='sidebar_bottom'>
            <p>Recent Post</p>
            </div>

        </div>
  )
}

export default Sidebar