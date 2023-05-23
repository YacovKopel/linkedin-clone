import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import {
    auth,
    updateProfile,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from './firebase';


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
        createUserWithEmailAndPassword(auth, email, password)
        .then((userAuth)=>{
            updateProfile(userAuth.user, {
                displayName:name,
                photoURL:profileURL,
                })
                .then(
                    dispatch(
                        login({
                        email:userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profileURL
                    })
                    )
                    )
                    .catch((err) => {
                        console.log('user not updated');
                      });
                  })
                  .catch((err) => {
                    alert(err);
                  });
              };

    const loginToApp= (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email,password)
        .then((userAuth) => {
            dispatch(
                login({
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileURL: userAuth.user.photoURL
        }))
    })
    .catch((err) =>{ alert(err)
        })
    }


    
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
        <p>Don't have an account?   <span onClick={signUp} className='login-register' >Register Now</span></p>
    </div>
  )
}

export default Login