import React from 'react'
import Search from './components/Search'
import { useState } from 'react'

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')  

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper' >

        <header>
          <img src="./Movie Website Banner.jpg" alt="Hero Banner"  />
          <h1>Watch your favorite <span className='text-gradient' >Movies</span></h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      </div>
    </main>
  )
}

export default App 