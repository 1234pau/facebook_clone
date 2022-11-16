import image from './images/abstract-user-flat-4.svg'
import { BsThreeDots } from "react-icons/bs";
import './home.css'
import { useStateValue } from "../StateProvider"
import { useState } from 'react';
import db from '../firebaseEnv';
import {deleteDoc, doc} from "firebase/firestore"
import { storage } from '../firebaseEnv';

const TopPost = ({id, timestamp, message}) => {
  const [{user}, dispatch]=useStateValue()
  const [showButton, setShowButton] = useState(true)

  const handleDelete = ()=>{
    //const uploadTask = storage.ref(`posts/${post.id}`)
    deleteDoc(doc(db, 'posts', id))
    console.log("delete post")
  }
  const handleShowButton =  (e) =>{
    e.stopPropagation()
    setShowButton(!showButton)
  }
  return (
    <div className='topPost'>
      <div className='containerTopPost'>
        <div className='topPostImage'>
            <div className='imageP'>
                <img className="imageProfile" style={{width: '45px'}} src={!user ? image : user.photoURL} alt="profile_image" referrerpolicy="no-referrer"/>
            </div>
            <div className='textP'>
                <h3>{user.displayName}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
            
        </div>
        <div className='treeDotsButton' onClick={handleShowButton}>
          <BsThreeDots role='button' className='buttonDots'/>
          {!showButton && <button onClick={handleDelete} className="buttonTreeDots">Delete Post</button>}
        </div>
        
      </div>
        
        <div className='messageCon'>{message}</div>
        
      
    </div>
  )
}

export default TopPost
