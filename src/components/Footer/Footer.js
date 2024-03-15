import React from 'react';
import footerCss from './footer.module.css'
// import footerImg from '../../assets/restaurant3.jpg'
import footerImg from '../../assets/foo.jpg'
const Footer = () => {
 const {footer,footerCenter,footerLogo,navList,contactSection,DoormatNavigation,mediaLinks} = footerCss


  return (
    <footer className={footer}>
         <section className={footerCenter}>
            
            <figure className={footerLogo}>
            <img src={footerImg} alt="footerImg" />
            </figure>
               <nav className={navList}>
                <section className={DoormatNavigation}>

              <h1>Doormat Navigation</h1>
              
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
              </ul>
                </section>
              <section className={contactSection}>
               <h1>Contact</h1>
               <ul>
               <li><a href="#">Address</a></li>
                <li><a href="#">Phone Number</a></li>
                <li><a href="#">Email</a></li>
               </ul>
              </section>
             <section className={mediaLinks}>
              <h1>Social Media Links</h1>
              <ul>
               <li><a href="#">Address</a></li>
                <li><a href="#">Phone Number</a></li>
                <li><a href="#">Email</a></li>
               </ul>
             </section>
               </nav>





         </section>
    




    </footer>
  )
}

export default Footer