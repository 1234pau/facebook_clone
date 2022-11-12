//import image2 from './images/mathilde-paret-7shTDDZ_Bug-unsplash.jpg'
import './home.css'


const ImagePost = ({postImage}) => {
  

  return (
    <main className='containerImagePost'>
      
      {postImage && <img className="postImage" src={postImage} alt="profile_image" />}
      
    </main>
  )
}

export default ImagePost
