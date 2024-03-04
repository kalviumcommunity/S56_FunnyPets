import React from 'react'
import './card.css'

function Card(props) {
    console.log(props.props)

  return (
    
    <div>
        <div className="cards">
          <div className="card">
            <h1> <b>Title: {props.props.Title}</b></h1>
            <h4><b className='underlined'>Category:</b> {props.props.Category}</h4>
            <img src={props.props.Image}/>
            <p><b className='underlined'>Description:</b> {props.props.Description} </p>
            <p><b className='underlined'>Date Uploaded: </b>{props.props.DateUploaded}</p>
            <p><b className='underlined'>URL:</b> {props.props.URL}</p>
            <h6><i>(copy the URL and paste it on new tab)</i></h6>

          </div>
          </div>
    </div>
  )
}

export default Card