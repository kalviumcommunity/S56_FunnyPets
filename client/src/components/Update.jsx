import React, { useState } from 'react';
import axios from 'axios';
import './form.css';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const navigate = useNavigate();
  
  const [petData, setPetData] = useState({
    Title: "",
    VideoSource: "",
    Category: "",
    Description: "",
    URL: "",
    Image: "",
    DateUploaded: "",
    CreatedBy: localStorage.getItem("users")
  });
  
  const { id } = useParams();
  console.log(id);
  const handleUpdate = (e) => {

    try {
      axios.put(`https://s56-funnypets-asap.onrender.com/update/${id}`, petData)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
        navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="navbar">
        <div id="logo"></div>
        <div id="searchbar"><input type="text" placeholder='Search for videos...' /></div>
        <Link to='/login'><div className="loginout"id='login'><button>Login</button></div></Link>
        <div className="loginout"id='logout'><button>Logout</button></div>
      </div>
      <form >
        <h1>Update your video!</h1>

        <label htmlFor="URL">URL:</label>
        <input type="URL" id="URL" name="URL" value={petData.URL} onChange={handleChange} required />

        <label htmlFor="Category">Category:</label>
        <input type="text" id="Category" name="Category" value={petData.Category} onChange={handleChange} required />

        <label htmlFor="Title">Video Name:</label>
        <input type="text" id="Title" name="Title" value={petData.Title} onChange={handleChange} required />

        <label htmlFor="Description">Description:</label>
        <textarea id="Description" name="Description" value={petData.Description} onChange={handleChange} required></textarea>

        <label htmlFor="Image">Image Address Link:</label>
        <input type="URL" id="Image" name="Image" value={petData.Image} onChange={handleChange} required />

        <label htmlFor="DateUploaded">Date of Uploadation:</label>
        <input type="date" id="DateUploaded" name="DateUploaded" value={petData.DateUploaded} onChange={handleChange} required />

        <label htmlFor="VideoSource">Source of Video:</label>
        <input type="text" id="VideoSource" name="VideoSource" value={petData.VideoSource} onChange={handleChange} required />

        <button type="submit" onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
}

export default Update;
