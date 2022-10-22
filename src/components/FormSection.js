import image from './images/abstract-user-flat-4.svg'
import { MdSentimentVerySatisfied } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import './home.css'
const FormSection = () => {
  return (
    <div className='containerForm'>
      <div className='containerInput'>
        <img className="imageProfile" style={{width: '45px'}} src={image} alt="profile_image" />
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="postForm">What is on your mind ?</label>
          <input type="text" placeholder='What is on your mind ?' id='postForm'/>
        </form>
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
