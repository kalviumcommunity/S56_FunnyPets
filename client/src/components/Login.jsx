import React, { useEffect, useState } from 'react';
import './login.css'
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState('');

  const handlelogout = () => {
    document.cookie = `username=;expires= + new Date(2000, 0, 1).toUTCString()`;
    document.cookie = `accessToken=;expires= + new Date(2000, 0, 1).toUTCString()`;
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username.trim()==="" && password.trim()==""){
      alert("Username required")
    }
    console.log('Login submitted:', { username, password });
    document.cookie =
      `username=${username};expires=` + new Date(2030, 0, 1).toUTCString();

      let filteredData = users.filter((el)=>{
        return el.CreatedBy === username
      })
      if (filteredData.length > 0){
          localStorage.setItem("users", username)
      }
      else{
        axios.post("https://s56-funnypets-asap.onrender.com/auth",{username})
          .then((response)=>{
              console.log(response.data.accessToken)
              document.cookie = `accessToken = ${response.data.accessToken};expires=` + new Date(2030, 0, 1). toUTCString(); 
          })
          .catch((err) => console.log(err));   
          localStorage.setItem("users", username) 
      }

    };
    useEffect(()=>{
     axios.get("https://s56-funnypets-asap.onrender.com/user")
      .then((res)=>{
        console.log(res.data)
        setUsers(res.data)
      })
      .catch((err)=>console.log(err));
    },[])

  return (
    <>
    <div>
    <div className="navbar">
        <div id="logo"></div>
        <div id="searchbar">
          <input type="text" placeholder="Search for videos..." />
        </div>
          <div className="loginout" id="login">
            <button>Login</button>
          </div>
        <div className="loginout" id="logout">
          <button onClick={handlelogout}>Logout</button>
        </div>
      </div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
    </>
  );
}
export default Login;
