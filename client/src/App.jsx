import React from "react"
import Home from "./components/Home"
import Form from './components/form'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/form ' element={<Form/>}/>
            {/* <Route path='/cards' element=''> */}
        </Routes>
        {/* <Home/> */}
        <Form/>
        </BrowserRouter>
    </>
  )
}

export default App
