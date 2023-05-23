import { FiberManualRecord, Info } from '@mui/icons-material'
import React from 'react'
import './Widget.css'

function Widget() {
    const newsArticle= (heading, subtitle) =>(
    <div className='widgets_article'>
        <div className='widgets_articleLeft'>
            <FiberManualRecord/>
        </div>
    <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
    </div>
    </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>
                LinkedIn News
            </h2>
            <Info/>

        </div>
        {newsArticle("we out here", "we making apps happen")}
    </div>
  )
}

export default Widget