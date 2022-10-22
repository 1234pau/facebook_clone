import React from 'react'
import './header.css'
const SearchHeader = () => {
  return (
    <form className='formSearch'>
        <label htmlFor="search">Search here...</label>
        <input 
            type="text"
            placeholder='Search here...'
            id='search'
        />
    </form>
  )
}

export default SearchHeader