import React, { useEffect } from 'react'
import './card.css'
import axios from "axios"
import {Link} from 'react-router-dom';


function Card(props) {
    const handleDel = ()=>{
        axios.delete(`http://localhost:3000/deleteuser/${props._id}`)
        .then((res)=>{
          console.log(res)
          props.fetchData()
        })
        .catch((err)=>{
          console.log(err)
        })}

      
  return (
    
    <div>
        <div className="cards">
          <div className="card">
            <h1> <b>Title: {props.Title}</b></h1>
            <h4><b className='underlined'>Category:</b> {props.Category}</h4>
            <img src={props.Image}/>
            <p><b className='underlined'>Description:</b> {props.Description} </p>
            <p><b className='underlined'>Date Uploaded: </b>{props.DateUploaded}</p>
            <p><b className='underlined'>URL:</b> {props.URL}</p>
            <h6><i>(copy the URL and paste it on new tab)</i></h6>
            <div className="buttons">
             <Link to = {`/update/${props._id}`}><button>Update</button></Link> 
              <button onClick={handleDel}>Delete</button>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Card