import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';

function Feed() {

    const[posts, setPosts]=useState([])
    const[input, setInput] = useState('')

      useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
          setPosts(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })));
        });
    
        return () => unsubscribe();
      }, []);
    
      const sendPost = (e) => {
        e.preventDefault();
    
        addDoc(collection(db, 'posts'), {
          name: 'Yacov',
          description: 'This is a test',
          message: input,
          photoUrl: '',
          timestamp: serverTimestamp(),
        });
    
        setInput('');
      };
    // useEffect(() => {
    //     db.collection("posts").onSnapshot((snapshot)=>
    //      setPosts(snapshot.docs.map((doc) => (
    //         {id:doc.id,
    //             data:doc.data(),}
    //             ))))}
    //             ,[])
    
    // const sendPost=e=>{
    //     e.preventDefault()
    //     db.collection("posts").addDoc({
    //         name:"Yacov",
    //         description: "this is a test",
    //         message:input,
    //         photoUrl:'',
    //         timestamp:firebase.firestore.FieldValue.serverTimestamp()
    //     })
    // }

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form>
            <input value={input} onChange={e=> setInput(e.target.value)} type="text" placeholder="What's on your mind?" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={Image} title="Photo" color="#7085f9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map(({id, data:{name, description, message, photoUrl}}) =>
       (<Post
      key={id}
      name={name}
      description={description}
      message={message}
      photoUrl={photoUrl}
      
      />))}

    </div>
  );
}

export default Feed;
