import React, { useState } from 'react';
import './form.css';
import axios from 'axios';


function Form() {
  const [URL, setURL] = useState('');
  const [Category, setCategory] = useState('');
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Image, setImage] = useState('');
  const [DateUploaded, setDateUploaded] = useState('');
  const [VideoSource, setVideoSource] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://s56-funnypets-asap.onrender.com/addform",{ Title:Title,
    VideoSource: VideoSource,
    Category:Category,
    Description: Description,
    URL:URL,
    Image:Image,
    DateUploaded:DateUploaded
  })
    .then(result => {
      console.log(result)
    })
    .catch((err) => console.log(err))
  };

  return (
    <div>
      <div className="navbar">
            <div id="logo"></div>
            <div id="searchbar"><input type="text" placeholder='Search for videos...'/></div>
        </div>
      <form onSubmit={handleSubmit}>
        <h1>Add your video!</h1>

        <label htmlFor="URL">URL:</label>
        <input type="URL" id="URL" name="URL" value={URL} onChange={(e) => setURL(e.target.value)} required />

        <label htmlFor="Category">Category:</label>
        <input type="text" id="Category" name="Category" value={Category} onChange={(e) => setCategory(e.target.value)} required />

        <label htmlFor="Title">Video Name:</label>
        <input type="text" id="Title" name="Title" value={Title} onChange={(e) => setTitle(e.target.value)} required />

        <label htmlFor="Description">Description:</label>
        <textarea id="Description" name="Description" value={Description} onChange={(e) => setDescription(e.target.value)} required></textarea>

        <label htmlFor="Image">Image Address Link:</label>
        <input type="URL" id="Image" name="Image" value={Image} onChange={(e) => setImage(e.target.value)} required />

        <label htmlFor="DateUploaded">Date of Uploadation:</label>
        <input type="date" id="DateUploaded" name="DateUploaded" value={DateUploaded} onChange={(e) => setDateUploaded(e.target.value)} required />

        <label htmlFor="VideoSource">Source of Video:</label>
        <input type="text" id="VideoSource" name="VideoSource" value={VideoSource} onChange={(e) => setVideoSource(e.target.value)} required />

        <button type="submit">Insert</button>
      </form>
    </div>
  );
}

export default Form;
