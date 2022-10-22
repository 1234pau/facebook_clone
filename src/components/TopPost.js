import image from './images/abstract-user-flat-4.svg'
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import './home.css'

const TopPost = () => {
  return (
    <div className='topPost'>
        <div className='topPostImage'>
            <div className='imageP'>
                <img className="imageProfile" style={{width: '45px'}} src={image} alt="profile_image" />
            </div>
            <div className='textP'>
                <h3>Person Name</h3>
                <p>Specification</p>
            </div>
            
        </div>
        <HiOutlineEllipsisHorizontal role='button'/>
      
    </div>
  )
}

export default TopPost
