import React from 'react'
import logo from '../assets/images/Logo.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        {/* <h1>Hola</h1> */}

    <div className='navbar--container paragraphNormal'>
    <div className='navbar--logo_container'>
              <img src={logo} id="logo" />
            </div>

            <div className='navbar--container__links-container'>
              <p>Home</p>
              <p>About us</p>
              <p>Our Services</p>
              <p>Our rig</p>
              <p>QHSE</p>
            </div>


            <div className='navbar--container__button-container'>
              Contact Us
            </div>

      

</div>

        </div>
  )
}

export default Navbar