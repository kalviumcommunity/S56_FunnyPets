import React from "react"
import Home from "./components/Home"
import Form from './components/form'
import Update from "./components/Update"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/update/:id'element={<Update/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
