import {FaFacebookMessenger} from 'react-icons/fa'
import {FaBell} from 'react-icons/fa'
import {FaChevronDown} from 'react-icons/fa'
import image from './images/abstract-user-flat-4.svg'
import './header.css'
import { useStateValue } from "../StateProvider"

const ButtonsHeader = () => {
    const [{user}, dispatch]=useStateValue()
  return (
    <div className='containerButtonsHeader'>
        <div className='messenger'>
            <FaFacebookMessenger role="button"/>
        </div>
        <div className='bell'>
            <FaBell role="button"/>
        </div>
        <div className='profile'>
                <img style={{width: '40px'}} src={user ? user.photoURL : image} alt="profile_image" referrerpolicy="no-referrer"/>
            <div className='profileArrow'>
                <FaChevronDown role="button"/>
            </div>
            
        </div>
    </div>
  )
}

export default ButtonsHeader