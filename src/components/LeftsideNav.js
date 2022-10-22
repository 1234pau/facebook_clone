import { Link } from "react-router-dom"
import {TiHome} from 'react-icons/ti'
import { HiBars4 } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import image from './images/abstract-user-flat-4.svg'
import image2 from './images/mathilde-paret-7shTDDZ_Bug-unsplash.jpg'
import { HiUsers } from "react-icons/hi2";
import { HiFilm } from "react-icons/hi2";
import { HiBuildingStorefront } from "react-icons/hi2";
import './linksNav.css'

const LeftsideNav = () => {
  return (
    <div className="containerLinks">
      <ul>
        <li>
          <Link to="/">
            <TiHome/>
            <h4>Home</h4>
          </Link>
        </li>
        <li className="marginBottom">
          <Link to="profile">
            <img className="imageProfile" style={{width: '25px'}} src={image} alt="profile_image" />
            <h4>User Name</h4> 
          </Link>
        </li>

        <div className="containerButton">
          <HiBars4 role='button' className="button"/>
          
        </div>
        
        <li>
          <Link to="/friends">
            <HiUsers/>
            <h4>Friends</h4>
          </Link>
        </li>
        <li>
          <Link to="/watch">
            <HiFilm/>
            <h4>Watch</h4>
          </Link>
        </li>
        <li>
          <Link to="/marketplace">
            <HiBuildingStorefront/>
            <h4>Marketplace</h4>
          </Link>
        </li>
        <li className="marginBottom">
          <Link to="/gaming">
            <FaGamepad/>
            <h4>Gaming</h4>
          </Link>
        </li>

        <div className="containerButton">
          <FaUsers role='button' className="button"/>
          
        </div>
        
        <li>
          <Link to="/gaming">
          <img className="imageProfile" style={{width: '25px', height: '25px'}} src={image2} alt="profile_image" />
            <h4>Gaming</h4>
          </Link>
        </li>
        <li>
          <Link to="/gaming">
          <img className="imageProfile" style={{width: '25px', height: '25px'}} src={image2} alt="profile_image" />
            <h4>Gaming</h4>
          </Link>
        </li>
        <li className="marginBottom">
          <Link to="/gaming">
          <img className="imageProfile" style={{width: '25px', height: '25px'}} src={image2} alt="profile_image" />
            <h4>Gaming</h4>
          </Link>
        </li>

        <div className="containerButton">
          <FaLink role='button'className="button"/>
          
        </div>

        <li>
          <Link to="/gaming">
          <img className="imageProfile" style={{width: '25px', height: '25px'}} src={image2} alt="profile_image" />
            <h4>Gaming</h4>
          </Link>
        </li>
        <li>
          <Link to="/gaming">
          <img className="imageProfile" style={{width: '25px', height: '25px'}} src={image2} alt="profile_image" />
            <h4>Gaming</h4>
          </Link>
        </li>
        <li>
          <Link to="/gaming">
          <img className="imageProfile" style={{width: '25px', height: '25px'}} src={image2} alt="profile_image" />
            <h4>Gaming</h4>
          </Link>
        </li>
      </ul>
    </div>
    
  )
}

export default LeftsideNav