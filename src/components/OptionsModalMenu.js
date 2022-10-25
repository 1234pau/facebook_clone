import './modals.css'
import IconsModalRecent from './IconsModalRecent'
import SearchModal from './SearchModal'
import OptionMenu from './OptionMenu'

const OptionsModalMenu = () => {
  return (
    <div className='containerOptionsModalMenu'>
       <IconsModalRecent />
       <SearchModal name='Search menu'/>
       <OptionMenu />
    </div>
  )
}

export default OptionsModalMenu
