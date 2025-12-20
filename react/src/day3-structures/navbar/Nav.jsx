import React from 'react'

const Nav = () => {
  return (
      <div className='navbar'>
          <div class="navLeft">
              <h2>Horizon Courts</h2>
          </div>
          <div className='navCenter'>
              <a href="#" className='navTitle'>About Us </a>
              <a href="#" className='navTitle'>Services </a>
              <a href="#" className='navTitle'>Coaches </a>
              <a href="#" className='navTitle'>Events </a>
              <a href="#" className='navTitle'>Contacts </a>
          </div>
          <div class="navRight">
              <button>Book now</button>
          </div>
      </div>
  )
}

export default Nav
