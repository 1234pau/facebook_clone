import { SlLike } from "react-icons/sl";
import { SlSpeech } from "react-icons/sl";
import { SlActionRedo } from "react-icons/sl";
import './home.css'
import { useState } from "react";
import { useEffect } from "react";
import db from "../firebaseEnv";


const ComentAndSharePost = () => {
  const [likes, setLikes]=useState(0)

  const handleLikes = ()=>{
    setLikes(likes+1)
    
  }
  useEffect(()=>{
       const getMyLikes = async ()=>{
         const snapshot = await db.collection(`posts`).get()
         snapshot.docs.map((doc) => (
           db.collection(`posts`).doc(doc.id).update({likes:likes})
         ));
       }
       getMyLikes()
  },[likes])
  return (
    <div className='containerComentAndShare'>
      <div className='containerComent'>
        <div className="likes">
            <SlLike /><h4>{likes}</h4>
        </div>
      
        <div className="coments">
            <p>33 comments</p>
            <p>23 shares</p>
        </div>
      </div>
      <hr />
      <div className='containerIconsComent'>
        <div onClick={handleLikes}>
            <SlLike /><h4>Like</h4>
        </div>
        <div>
            <SlSpeech /><h4>Comment</h4>
        </div>
        <div>
            <SlActionRedo /><h4>Share</h4>
        </div>
        
      </div>
    </div>
  )
}

export default ComentAndSharePost
