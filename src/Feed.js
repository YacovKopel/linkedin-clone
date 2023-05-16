import { Create } from '@mui/icons-material'
import React from 'react'
import './Feed.css'

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
        </div>
        
        </div>
  )
}

export default Feed