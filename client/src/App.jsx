import React from "react"
import Home from "./components/Home"
import Form from './components/form'
import Update from "./components/Update"
import Login from "./components/Login"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/update/:id'element={<Update/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
