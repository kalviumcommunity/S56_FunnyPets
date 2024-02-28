import React from 'react'
import './home.css'

function Home() {
  return (
    <div>
        <div className="navbar">
            <div id="logo"></div>
            <div id="searchbar"><input type="text" placeholder='Search for videos...'/></div>
        </div>
        <div className="aboutus">
          <h1>Funny Pets</h1>
          <p>The "Funny Pets" project is designed as a straightforward and enjoyable platform that aims to curate a delightful assortment of amusing pet videos. The primary goal of this project is to create a space where users can easily access and enjoy a collection of funny and heartwarming moments featuring various pets. The platform seeks to bring joy and laughter to its audience by showcasing the playful and endearing behavior of pets in different situations.</p>
        </div>
    </div>
  )
}

export default Home