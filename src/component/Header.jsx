import React from 'react'

const Header = () => {
  return (
    <header style={{backgroundColor:"pink"}}>
      <img src="./images/favicon.png" alt="" />
      <h1><a href="#">Jinhyuk</a></h1>

      <nav>
        <ul>
          <li><a href="">About me</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">My works</a></li>
          <li><a href="">Community</a></li>          
        </ul>
      </nav>
    </header>
  )
}

export default Header
