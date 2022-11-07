import TopPost from "./TopPost"
import ImagePost from "./ImagePost"
import ComentAndSharePost from "./ComentAndSharePost"
import './home.css'

const PostSection = () => {
  return (
    <div className='containerPost'>
      <TopPost
        name = 'Paul'
        timestamp='something'
        message='This is a message'
      />
      <ImagePost />
      <ComentAndSharePost />
    </div>
  )
}

export default PostSection
