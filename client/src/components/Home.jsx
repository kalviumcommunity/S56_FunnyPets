import React, { useEffect , useState} from 'react'
import './home.css'
import photo from "../background.jpg"
import axios from "axios"
import Card from './cards.jsx'


function Home() {

  const [data , setData] = useState([])

  useEffect(()=>{
    axios.get("https://s56-funnypets-asap.onrender.com/getusers")
      .then((res)=>{
        setData(res.data)
      })
  } , [])


  // console.log(data)
  return (
    <div>
      
        <div className="navbar">
            <div id="logo"></div>
            <div id="searchbar"><input type="text" placeholder='Search for videos...'/></div>
        </div>
        <img src={photo} width={"100%"}/>
        <div className="aboutus">
          <h1>Funny Pets</h1>
          <p>The "Funny Pets" project is designed as a straightforward and enjoyable platform that aims to curate a delightful assortment of amusing pet videos. The primary goal of this project is to create a space where users can easily access and enjoy a collection of funny and heartwarming moments featuring various pets. The platform seeks to bring joy and laughter to its audience by showcasing the playful and endearing behavior of pets in different situations.</p>
        </div>
        <div>
          {data.map((ele , i)=>{
            return <Card key={i} props={ele}/>
          })}
        </div>
    </div>
  )
}

export default Home