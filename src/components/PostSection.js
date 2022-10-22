import TopPost from "./TopPost"
import ImagePost from "./ImagePost"
import ComentAndSharePost from "./ComentAndSharePost"
import './home.css'

const PostSection = () => {
  return (
    <div className='containerPost'>
      <TopPost />
      <ImagePost />
      <ComentAndSharePost />
    </div>
  )
}

export default PostSection
