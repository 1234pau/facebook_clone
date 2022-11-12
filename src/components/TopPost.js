import image from './images/abstract-user-flat-4.svg'
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import './home.css'
import { useStateValue } from "../StateProvider"

const TopPost = ({name, timestamp, message}) => {
  const [{user}, dispatch]=useStateValue()
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
        <HiOutlineEllipsisHorizontal role='button'/>
      </div>
        
        <div className='messageCon'>{message}</div>
        
      
    </div>
  )
}

export default TopPost
