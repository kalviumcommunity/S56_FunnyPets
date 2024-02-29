import React from 'react'
import Dogs from '../dogs.jpg'
import './home.css'
import photo from "../background.jpg"

function Home() {
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
        <div className="cards">
          <div className="card">
            <img src={Dogs}/>
            <h1>Title: Funny Dog Compilation</h1>
            <h4>Category: Dogs</h4>
            <p>Description: Hilarious moments of dogs </p>
          </div>
          <div className="card">
            <img src={Dogs}/>
            <h1>Title: Funny Dog Compilation</h1>
            <h4>Category: Dogs</h4>
            <p>Description: Hilarious moments of dogs </p>
          </div>
          <div className="card">
            <img src={Dogs}/>
            <h1>Title: Funny Dog Compilation</h1>
            <h4>Category: Dogs</h4>
            <p>Description: Hilarious moments of dogs </p>
          </div>
          <div className="card">
            <img src={Dogs}/>
            <h1>Title: Funny Dog Compilation</h1>
            <h4>Category: Dogs</h4>
            <p>Description: Hilarious moments of dogs </p>
          </div>
          <div className="card">
            <img src={Dogs}/>
            <h1>Title: Funny Dog Compilation</h1>
            <h4>Category: Dogs</h4>
            <p>Description: Hilarious moments of dogs </p>
          </div>
          <div className="card">
            <img src={Dogs}/>
            <h1>Title: Funny Dog Compilation</h1>
            <h4>Category: Dogs</h4>
            <p>Description: Hilarious moments of dogs </p>
          </div>
          <div className="card">
            <img src={Dogs}/>
            <h1>Title: Funny Dog Compilation</h1>
            <h4>Category: Dogs</h4>
            <p>Description: Hilarious moments of dogs </p>
          </div>
          <div className="card">
            <img src={Dogs}/>
            <h1>Title: Funny Dog Compilation</h1>
            <h4>Category: Dogs</h4>
            <p>Description: Hilarious moments of dogs </p>
          </div>
          <div className="card">
            <img src={Dogs}/>
            <h1>Title: Funny Dog Compilation</h1>
            <h4>Category: Dogs</h4>
            <p>Description: Hilarious moments of dogs </p>
          </div>
          <div className="card">
            <img src={Dogs}/>
            <h1>Title: Funny Dog Compilation</h1>
            <h4>Category: Dogs</h4>
            <p>Description: Hilarious moments of dogs </p>
          </div>
         </div>
    </div>
  )
}

export default Home