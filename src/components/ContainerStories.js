import Story from "./Story"

const ContainerStories = () => {
  return (
    <div className='containerStories'>
        <div className="containerTitle">
            <h4>Stories</h4>
        </div>
        <div className="stories">
            <Story />
            <Story />
            <Story />
            <Story />
        </div>
     
      
    </div>
  )
}

export default ContainerStories
