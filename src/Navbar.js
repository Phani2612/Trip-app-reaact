// import React, { useState } from 'react'
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
// import Login from "./login"
// import { Header } from './Header'


// function Navbar() 
// {
//     const [ isLoggedIn, setIsLoggedIn ] = useState(false)

//     function pleaseLogout()
//     {
//         setIsLoggedIn(false)
//         window.location.pathname = ""
//     }

//   return (
//     <div style={{fontSize: "35px"}}>
//       <BrowserRouter>
//          { isLoggedIn ? <div><Link to="/home">Home</Link> <button style={{width: "15%"}}  onClick={pleaseLogout}>Logout</button> <Routes>
//          <Route path="/home" element={<Header/>}></Route></Routes>  </div> : <Link to="/login">Login</Link>}
         
//           <Routes>
//             <Route path="/login" element={<Login setLoggedIn={setIsLoggedIn}/>}></Route>
//           </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default Navbar


import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Login from "./login"
import { Header } from './Header'
import Home from './Home'


function Navbar() 
{
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    const [Dontroute , setDontroute] = useState(false)

    function pleaseLogout()
    {
        setIsLoggedIn(false)
        window.location.pathname = ""
    }

    

  return (
    <div style={{fontSize: "35px"}}>
      <BrowserRouter>

      { isLoggedIn ?<button id='homebutton' style={{ fontSize:30 , marginTop:'-70px', position:'absolute'}} type="button" class="btn btn-primary"><Link id='homelink' style={{color:'white' , textDecoration : 'none' }} to="/home">Home</Link> </button>  : <button id='login' style={{fontSize:'50px' , marginTop:'20px'}} type="button" class="btn btn-primary"><Link id='loginlink'  to="/login"  style={{color : 'white' , textDecoration:'none'}}>Login</Link></button>}

         <Routes>

         
         {Dontroute ? <Route path="/home" element={<Home log={setIsLoggedIn}/>}></Route> : null }
         
          
            <Route path="/login" element={<Login setLoggedIn={setIsLoggedIn} pleaseroute = {setDontroute}/>}></Route>


         </Routes>
          
      </BrowserRouter>
    </div>
  )
}

export default Navbar
