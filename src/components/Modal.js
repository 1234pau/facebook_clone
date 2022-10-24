import './modals.css'
import  ReactDOM  from 'react-dom'

const Modal = ({handleClose}) => {

  return ReactDOM.createPortal(
    <div>
      <div className='Modal' onClick={handleClose}></div>
        
        <div className='containerModal'  >
          {/* <Recent /> */}
          {/* <OptionsModalMenu /> */}
          {/* <ListModalMenu /> */}

        </div>
      
    </div>
    ,
    document.getElementById('portal1')
  )
}

export default Modal
