import React from 'react'
import HeaderCss from './header.module.css'
import Logo from '../../assets/Logo.svg'





const Header = () => {

const {header,nav,headerLogo,navList} = HeaderCss



  return (
    <header className={header}>
       <nav className={nav}>
        <figure className={headerLogo}>
       <img src={Logo} alt="Restaurant Logo" />
        </figure>
          <ul className={navList}>
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