import {FaFacebookMessenger} from 'react-icons/fa'
import {FaBell} from 'react-icons/fa'
import {FaChevronDown} from 'react-icons/fa'
import image from './images/abstract-user-flat-4.svg'
import './header.css'

const ButtonsHeader = () => {
  return (
    <div className='containerButtonsHeader'>
        <div className='messenger'>
            <FaFacebookMessenger role="button"/>
        </div>
        <div className='bell'>
            <FaBell role="button"/>
        </div>
        <div className='profile'>
                <img style={{width: '40px'}} src={image} alt="profile_image" />
            <div className='profileArrow'>
                <FaChevronDown role="button"/>
            </div>
            
        </div>
    </div>
  )
}

export default ButtonsHeader