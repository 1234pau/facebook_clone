import './modals.css'
import { BsPencilSquare, BsBookFill , BsStarFill, BsMegaphoneFill, BsFillFlagFill, BsPeopleFill,BsHeartFill, BsHandbagFill, BsFillCalendarPlusFill} from "react-icons/bs";
//import { useState } from 'react';

const ListModalMenu = () => {
const items = ([
  {
    id:1,
    icon:<BsPencilSquare/>,
    content:"Post"
  },
  {
    id:2,
    icon:<BsBookFill />,
    content:"Story"
  },
  {
    id:3,
    icon:<BsStarFill/>,
    content:"Life event"
  },
  {
    id:4,
    icon:<BsFillFlagFill/>,
    content:"Page"
  },
  {
    id:5,
    icon:<BsMegaphoneFill />,
    content:"Ad"
  },
  {
    id:6,
    icon:<BsPeopleFill/>,
    content:"Group"
  },
  {
    id:7,
    icon:<BsFillCalendarPlusFill/>,
    content:"Event"
  },
  {
    id:8,
    icon:<BsHandbagFill />,
    content:"Marketplace listing"
  },
  {
    id:9,
    icon:<BsHeartFill/>,
    content:"Fundraiser"
  }
])

  return (
    <div className='containerListModalMenu'>
      <h3>Create</h3>
      {items.map((item) =>(
        <div className='itemList' key={item.id}>
          <div>
            {item.icon}
          </div>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  )
}

export default ListModalMenu
