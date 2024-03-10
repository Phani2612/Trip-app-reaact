import React from 'react'
import { Header } from './Header'
import {Link,Route,BrowserRouter,Routes} from "react-router-dom"
import {render} from "react-dom"
import Navbar from './Navbar'



function App() {
  return (
    <div>
     
    <Navbar/>

    </div>
  )
}

render(<App/>,document.querySelector("#root"))