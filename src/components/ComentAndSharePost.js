import { SlLike } from "react-icons/sl";
import { SlSpeech } from "react-icons/sl";
import { SlActionRedo } from "react-icons/sl";
import './home.css'

const ComentAndSharePost = () => {
  return (
    <div className='containerComentAndShare'>
      <div className='containerComent'>
        <div className="likes">
            <SlLike /><h4>33</h4>
        </div>
      
        <div className="coments">
            <p>33 comments</p>
            <p>23 shares</p>
        </div>
      </div>
      <hr />
      <div className='containerIconsComent'>
        <div>
            <SlLike /><h4>Like</h4>
        </div>
        <div>
            <SlSpeech /><h4>Comment</h4>
        </div>
        <div>
            <SlActionRedo /><h4>Share</h4>
        </div>
        
      </div>
    </div>
  )
}

export default ComentAndSharePost
