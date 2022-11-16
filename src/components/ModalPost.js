import { useStateValue } from "../StateProvider"
import { useRef, useState } from 'react';
import db from '../firebaseEnv';
import firebase from 'firebase/compat/app'
import image from './images/abstract-user-flat-4.svg'
import './modals.css'
import { BiX } from "react-icons/bi";
import { BsUpload } from "react-icons/bs";
import { storage } from "../firebaseEnv";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import{v4} from "uuid"

const ModalPost = ({handleClose}) => {
    const [{user}, dispatch]=useStateValue()
    const [input, setInput] = useState('')
    const [imageUpload, setImageUpload] = useState(null)
    //const filePickerRef = useRef(null)
    

  
    const STYLE_IMAGE = {
       marginBottom: "20px",
       overflowY: "auto",
       height: "200px"
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      db.collection("posts").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).then(doc =>{
        if(imageUpload){
          const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageUpload, 'data_url')


          uploadTask.on('state_change', null, error=> console.error(error), ()=>{
             storage.ref(`posts`).child(doc.id).getDownloadURL().then(url =>{
               db.collection('posts').doc(doc.id).set({
                 postImage: url
               }, {merge: true})
         
            })
          })
        }
      })
      setInput('')
      handleClose()
  }
    const addImageToPost = (e)=>{
      const reader = new FileReader()
      if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0])
      }
      reader.onload = (readerEvent)=>{
        setImageUpload(readerEvent.target.result)
      }
  }
  const removeImage = ()=>{
    setImageUpload(null)
  }
  return (
    <div className="containerModalPostBackground">
            <div className='containerPostModal'>
                <div className="titlePostModal">
                    <p>Create Post</p>
                    <div className="hoverSvg" onClick={handleClose}>
                        <BiX />
                    </div>
                    
                </div>
            <div className="containerImagePostModal">
                <img className="imageProfilePostModal" style={{width: '45px'}} src={user ? user.photoURL : image} alt="profile_image" referrerpolicy="no-referrer"/>
                <h4 className="name">{user.displayName}</h4>
            </div>
            
            <form onSubmit={handleSubmit } className="formPostModal">
              <label htmlFor="postFormModal" className="label1">What is on your mind ?</label>
              <textarea
                type="text"
                placeholder={`What is on your mind ${user.displayName}?`}
                id='postFormModal'
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              {imageUpload ? (
                <div onClick={removeImage} style={STYLE_IMAGE} >
                  <img src={imageUpload} className="removeEffect" alt="previo" style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "50%", cursor:"pointer"}}/>
                </div>
              ): (
                <label htmlFor="fileInputPost" className="label2" >
                Add images to you post <br />
                <BsUpload />
                <input  onChange={addImageToPost} type="file" name="file" id="fileInputPost" accept="image/png, image/jpg, image/gif, image/jpeg"/>
              </label>
              )}
              <input type="submit" value="Post" />
            </form>
          </div>
    </div>

  )
}

export default ModalPost
