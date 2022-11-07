import image from './images/abstract-user-flat-4.svg'
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import './home.css'

const TopPost = ({name, timestamp, message}) => {
  return (
    <div className='topPost'>
      <div className='containerTopPost'>
        <div className='topPostImage'>
            <div className='imageP'>
                <img className="imageProfile" style={{width: '45px'}} src={image} alt="profile_image" />
            </div>
            <div className='textP'>
                <h3>{name}</h3>
                <p>{timestamp}</p>
            </div>
            
        </div>
        <HiOutlineEllipsisHorizontal role='button'/>
      </div>
        
        <div className='messageCon'>{message}</div>
      
    </div>
  )
}

export default TopPost
