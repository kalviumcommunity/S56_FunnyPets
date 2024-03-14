import React, { useEffect, useState } from "react";
import "./home.css";
import photo from "../background.jpg";
import axios from "axios";
import Card from "./cards.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [currusers, setCurrUsers] = useState("Creators");
  useEffect(() => {
    fetchData();
    axios.get("https://s56-funnypets-asap.onrender.com/user")
     .then((res)=>{
     setUsers(res.data)
      console.log(res.data)
     })
     .catch((err)=>console.log(err));
  }, [currusers]);
  const fetchData = () => {
    axios
      .get("https://s56-funnypets-asap.onrender.com/getusers")
      .then((result) => {
        let filteredData = currusers == 'Creators' ? result.data : result.data.filter((el)=>{
          return el.CreatedBy === currusers
        })
        setData(filteredData);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="navbar">
        <div id="logo"></div>
        <div id="searchbar">
          <input type="text" placeholder="Search for videos..." />
        </div>
        <Link to="/login">
          <div className="loginout" id="login">
            <button>Login</button>
          </div>
        </Link>
        <div className="loginout" id="logout">
          <button>Logout</button>
        </div>
      </div>
      <img src={photo} width={"100%"} />
      <div className="aboutus">
        <h1>Funny Pets</h1>
        <p>
          The "Funny Pets" project is designed as a straightforward and
          enjoyable platform that aims to curate a delightful assortment of
          amusing pet videos. The primary goal of this project is to create a
          space where users can easily access and enjoy a collection of funny
          and heartwarming moments featuring various pets. The platform seeks to
          bring joy and laughter to its audience by showcasing the playful and
          endearing behavior of pets in different situations.
        </p>
      </div>
      <div className="form">
        <p>
          <i>
            (This button leads you to a form to insert,delete or update any
            videos if required.)
          </i>
        </p>

        <Link to="/form">
          <button>Insert</button>
        </Link>
      </div>
      <div>
        <div className="dropdown">
          <p>Search By Creators:</p>
          <select name="dropit" onChange={(e)=>{setCurrUsers(e.target.value)}}>
          <option value="Creators">Creators</option>
          {users.map((ele) => {
          return <option value={ele.CreatedBy}>{ele.CreatedBy}</option>
        })}
          </select>
        </div>
        <div className="cards">
        {data.map((ele, i) => {
          return <Card key={i} {...ele} fetchData={fetchData} />;
        })}
        </div>
      </div>
    </>
  );
}

export default Home;
