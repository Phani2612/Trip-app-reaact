import React from 'react'
import {BrowserRouter , Link , Routes , Route} from "react-router-dom"
import { Header } from './Header'


function Home(props) {

    function pleaseLogout()
    {
        props.log(false)
        window.location.pathname = ""
    }
  return (
    <div>
      
      <div className='logout'>
      <button  style={{ marginLeft:'1420px' , marginTop:'-70px' , borderRadius : '5%' , position:'absolute' , fontSize:30 }} class="btn btn-danger" onClick={pleaseLogout}><Link style={{color:'white'}} to='/login' id='logoutlink'>Logout</Link></button>
      </div>


      <Header/>

    </div>
  )
}

export default Home