import React from 'react'
import './header.css'
import Logo from '../../assets/Logo.svg'
const Header = () => {
  return (
    <header>
       <nav>
        <figure>
       <img src={Logo} alt="" />
        </figure>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav> 
    </header>
  )
}

export default Header