import { useEffect, useState } from "react"
import "./home.css"
import image from './images/abstract-user-flat-4.svg'

const MessageSection = () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/users';
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await fetch(`${API_URL}`);
          const data = await response.json();
          console.log(data)
          setItems(data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchItems();
    }, [API_URL])

  return (
    <div className="messageContainer">
      <h3>Contacts</h3>
      <div className="containerMessages">
        {items.map((item)=>(
            <ul key={item.id}>
                <div>
                    <img style={{width: '25px'}} src={image} alt="profile_image" />
                </div>
                <li >{item.name}</li>
            </ul>
        ))}
      </div>
    </div>
  )
}

export default MessageSection
