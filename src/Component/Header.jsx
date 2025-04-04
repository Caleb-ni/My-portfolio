import React from 'react'

// COMPONENT
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='fixed w-full top-0 left-0 h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
      <div className="max-w-screen-2xl w-full m-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="">
            <img 
            src="/assets/logo.png" 
            className='bg-white rounded-full'
            width={40}  
            height={40}
            alt="logo"/>
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button 
          className='menu-btn md:hidden'
          onClick={null}
          >
            <span><img src="assets/icon/menu.png" alt=""/></span>
          </button>
          <Navbar/>
        </div>

        <div>
          <a href="#contact"
             className='btn btn-secondary max-md:hidden md:justify-self-end'
          >
            Contact me
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header