import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";


const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
     <div>
     <FaMagnifyingGlass className='text-white' />
      <input 
      type="text" 
      name="search" 
      id="search-input" 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
      placeholder='Search movie...'
      />
     </div>
    </div>
  )
}

export default Search