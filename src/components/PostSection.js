import TopPost from "./TopPost"
import ImagePost from "./ImagePost"
import ComentAndSharePost from "./ComentAndSharePost"
import './home.css'
import db from "../firebaseEnv"
import { useState } from "react"
import { useEffect } from "react"
// import { storage } from "../firebaseEnv";
// import { ref, listAll, getDownloadURL } from "firebase/storage";
// import {useCollection} from "react-firebase-hooks/firestore"

const PostSection = () => {
   const [posts, setPosts]=useState([])
   
   useEffect(()=>{
     db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 
    setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})))
     )
   
   },[])

  
  return (
    <>
     {posts.map((post)=>(
      <div className='containerPost' key={post.id}>
      <TopPost 
        timestamp={post.data.timestamp}
        message={post.data.message}
      />
      
      <ImagePost postImage={post.data.postImage}/>
      <ComentAndSharePost />
    </div>
    ))} 
    </>
      
  )
}

export default PostSection
