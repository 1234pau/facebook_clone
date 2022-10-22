import image from './images/abstract-user-flat-4.svg'
import image2 from './images/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg'
import './home.css'
const Story = () => {
  return (
    <div style={{backgroundImage:`url(${image2})`}} className="containerStory">
      <img className="imageProfile" style={{width: '30px'}} src={image} alt="profile_image" />
      <h4>Person Name</h4>
    </div>
  )
}

export default Story
