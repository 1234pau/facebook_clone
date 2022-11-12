import { MdSentimentVerySatisfied } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import './home.css'
import { useStateValue } from "../StateProvider"
import image from './images/abstract-user-flat-4.svg'
import { useState } from "react";
import ModalPost from "./ModalPost";

const FormSection = () => {
  const [{user}, dispatch]=useStateValue()
  const [active, setActive] = useState(true)

const handleModalPost = ()=>{
  setActive(false)
}
const handleClose =()=>{
  setActive(!active)
  console.log('Modal close')
  
}
  
  return (
    <div className='containerForm'>
      <div className='buttonPost'>
          <img className="imageProfile" style={{width: '45px'}} src={user ? user.photoURL : image} alt="profile_image" referrerpolicy="no-referrer"/>
        <p onClick={handleModalPost}>
          What is on your mind {user.displayName}?
        </p>
        {!active && <ModalPost handleClose={handleClose}/>}
      </div>
      <hr />
      <div className='containerState'>
        <div>
          <HiOutlineVideoCamera style={{color: '#F3425F'}}/>
        <h4>Live Video</h4>
        </div>
        <div>
          <MdOutlinePhotoLibrary style={{color: '#45BD62'}}/>
        <h4>Foto/Video</h4>
        </div>
        <div>
          <MdSentimentVerySatisfied style={{color: '#F7B928'}}/>
        <h4>Feeling/Activity</h4>
        </div>
        
      </div>
      
    </div>
  )
}

export default FormSection
