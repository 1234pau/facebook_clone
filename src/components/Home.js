import "./home.css"
import ContainerStories from './ContainerStories'
import FormSection from './FormSection'
import PostSection from './PostSection'


const LeftsideNavBar = ({active}) => {
  return (
    <div className='Home'>
     
      <ContainerStories />
      <FormSection />
      <PostSection />
      
    </div>
  )
}

export default LeftsideNavBar