import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'



function Login() {
    const[name, setName]=useState('')
    const[email, setEmail]=useState('')
const[password, setPassword]=useState('')
const[profileURL, setProfileURL]=useState('')

const dispatch=useDispatch()

    const signUp=() => {
        if(!name){
            return alert("Please enter full name")
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profileURL,
                })
                .then(()=>{
                    dispatch(login({
                        email:userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profileURL
                    })
                    )
                        
                    })
                })

        .catch((error)=> alert(error))
    }


    const loginToApp= (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth => {
            dispatch(login({
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileURL: userAuth.user.photoURL
        }))
    }).catch(error => alert(error))}


    
  return (
    <div className='login'>
        <img src='/linkedin.png' alt='linkedin logo'/>
        <form>
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Full Name  (required if Registering)"/>
            <input  value={profileURL} onChange={(e)=> setProfileURL(e.target.value)}type="text" placeholder="Profile pic URL (optional)"/>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Email"/>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password"/>
            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>
        <p>Don't have an account?   <a onClick={signUp} className='login-register' href='/register'>Register Now</a></p>
    </div>
  )
}

export default Login