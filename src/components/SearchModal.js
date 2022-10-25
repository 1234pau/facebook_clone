import './modals.css'

const SearchModal = (props) => {
  return (
    <form className='formSearchModal'>
        <label htmlFor="searchModal">{props.name}</label>
        <input 
            type="text"
            placeholder={props.name}
            id='searchModal'
        />
    </form>
  )
}

export default SearchModal
