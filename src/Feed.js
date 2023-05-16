import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material'
import React from 'react'
import './Feed.css'
import InputOption from './InputOption'

function Feed() {


  return (


    <div className='feed'>
        <div className='feed_inputContainer'>
            
            <div className='feed_input'>
                <Create/>
                <form>
                    <input type="text" placeholder="What's on your mind?"/>
                    <button type='submit'>Send</button>
                </form>

            </div>
            <div className='feed_inputOptions'>
                <InputOption Icon={Image}title = "Photo" color="#7085f9"/>
                <InputOption Icon={Subscriptions}title = "Video" color="#E7A33E"/>
                <InputOption Icon={EventNote}title = "Event" color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDay}title = "Write Article" color="#7FC15E"/>




            </div>
        </div>
        
        </div>
  )
}

export default Feed