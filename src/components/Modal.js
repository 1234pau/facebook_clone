import './modals.css'
import  ReactDOM  from 'react-dom'
import OptionsModalMenu from "./OptionsModalMenu"
import ListModalMenu from "./ListModalMenu"

const Modal = ({handleClose}) => {

  return ReactDOM.createPortal(
    <div>
      <div className='Modal' onClick={handleClose}></div>
        
        <div className='containerModal'  >
          <h2>Menu</h2>
        <div className='containerModalComp'>
          <OptionsModalMenu />
          <ListModalMenu />
        </div>
          

        </div>
      
    </div>
    ,
    document.getElementById('portal1')
  )
}

export default Modal
