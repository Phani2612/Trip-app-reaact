import React from 'react'
import { myAuth,myProvider } from './FirestoreAUthentication'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'


function Login(props) {

    const navigate = useNavigate()
  
    function login()
    {
        // Logic to display the popup will all gmails id's
        signInWithPopup(myAuth, myProvider)
        .then(function()
        {
            // Logic to extract Username and Email ID
            let username = myAuth.currentUser.displayName
            let email = myAuth.currentUser.email

            console.log(username, email)
            props.setLoggedIn(true)

            // Navigate to Home Page(/home)
            
            // useNavigate("/home")

            props.pleaseroute(true)

            navigate('/home')
            
            
        })
        .catch(function(error)
        {
            console.log(error)
        })

    }
  return (
    <div>
    <button id='google' style={{ marginTop:'20px'}} onClick={login}>Continue with Google</button>
</div>
  )
}

export default Login