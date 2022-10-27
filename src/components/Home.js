import "./home.css"
import ContainerStories from './ContainerStories'
import FormSection from './FormSection'
import PostSection from './PostSection'
import MessageSection from './MessageSection'


const LeftsideNavBar = () => {
  return (
    <div className='Home'>
      <div className="home">
        <ContainerStories />
      <FormSection />
      <PostSection />
      </div>
      
      <MessageSection />
      
    </div>
  )
}

export default LeftsideNavBar