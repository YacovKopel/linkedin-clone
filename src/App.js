import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import Widget from "./Widget";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { auth, onAuthStateChanged } from "./firebase";


function App() {
  const user = useSelector(selectUser);
  const dispatch= useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (userAuth) =>{
      if(userAuth){
        dispatch(
          login({
          email:userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL}))
        console.log("user logged in");
      }else{
        dispatch(logout())
        console.log("user not logged in");
      }
    })
  },[])

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widget/>
        </div>
      )}
    </div>
  );
}

export default App;
