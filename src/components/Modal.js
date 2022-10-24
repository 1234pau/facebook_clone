import './profile.css'
import  ReactDOM  from 'react-dom'

const Modal = ({handleClose}) => {

  return ReactDOM.createPortal(
    <div>
      <div className='Modal' onClick={handleClose}></div>
        
        <div className='containerModal'  >
          <h3>This is a modal</h3>

        </div>
      
    </div>
    ,
    document.getElementById('portal1')
  )
}

export default Modal
