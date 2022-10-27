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
import { useState } from "react";
import Modal from "./Modal";


const LeftsideNav = () => {

  const [active, setActive] = useState(true)

  const handleNav =()=>{
    setActive( !active)
    console.log(active)
  }
  const handleClose =()=>{
    setActive(!active)
    console.log('Modal close')
    
  }

  return (
    
      
      <div className="containerLinks" style={active ? {width: "280px"}: { width: "65px" ? '&::-webkit-scrollbar': { visibility: 'hidden' }} } >
        
      <ul>
        <li onClick={()=> setActive(true)}>
          <Link to="/">
            <TiHome/>
            {active && <h4>Home</h4>}
          </Link>
        </li>
        <li className="marginBottom" onClick={()=> setActive(true)}>
          <Link to="profile">
            <img className="imageProfile" style={{width: '25px'}} src={image} alt="profile_image" />
            {active && <h4>UserName</h4>}
          </Link>
        </li>

        <div className="containerButton" onClick={handleNav}>
          <HiBars4 role='button' className="button"/>
        </div>
        {!active && <Modal handleClose={handleClose}  />}
        <li onClick={()=> setActive(true)}>
          <Link to="/friends">
            <HiUsers/>
            {active && <h4>Friends</h4>}
          </Link>
        </li>
        <li onClick={()=> setActive(true)}>
          <Link to="/watch">
            <HiFilm/>
            {active && <h4>Watch</h4>}
          </Link>
        </li>
        <li onClick={()=> setActive(true)}>
          <Link to="/marketplace">
            <HiBuildingStorefront/>
            {active && <h4>Marketplace</h4>}
          </Link>
        </li>
        <li className="marginBottom" onClick={()=> setActive(true)}>
          <Link to="/gaming">
            <FaGamepad/>
            {active && <h4>Gaming</h4>}
          </Link>
        </li>

        <div className="containerButton" >
          <FaUsers role='button' className="button"/>
          
        </div>
        
        <li onClick={()=> setActive(true)}>
          <Link to="/gaming">
          <img className="imageProfile" style={{width: '25px', height: '25px'}} src={image2} alt="profile_image" />
          {active && <h4>Gaming</h4>}
          </Link>
        </li>
        <li onClick={()=> setActive(true)}>
          <Link to="/gaming">
          <img className="imageProfile" style={{width: '25px', height: '25px'}} src={image2} alt="profile_image" />
          {active && <h4>Gaming</h4>}
          </Link>
        </li>
        <li className="marginBottom" onClick={()=> setActive(true)}>
          <Link to="/gaming">
          <img className="imageProfile" style={{width: '25px', height: '25px'}} src={image2} alt="profile_image" />
          {active && <h4>Gaming</h4>}
          </Link>
        </li>

        <div className="containerButton" >
          <FaLink role='button'className="button"/>
          
        </div>

        <li onClick={()=> setActive(true)}>
          <Link to="/gaming">
          <img className="imageProfile" style={{width: '25px', height: '25px'}} src={image2} alt="profile_image" />
          {active && <h4>Gaming</h4>}
          </Link>
        </li>
        <li onClick={()=> setActive(true)}>
          <Link to="/gaming">
          <img className="imageProfile" style={{width: '25px', height: '25px'}} src={image2} alt="profile_image" />
          {active && <h4>Gaming</h4>}
          </Link>
        </li>
        <li onClick={()=> setActive(true)}>
          <Link to="/gaming">
          <img className="imageProfile" style={{width: '25px', height: '25px'}} src={image2} alt="profile_image" />
          {active && <h4>Gaming</h4>}
          </Link>
        </li>
      </ul>
    </div>
   
     
    
  )
}

export default LeftsideNav