import React from 'react'
import logo from '../assets/images/Logo.svg'




const ColoredNavbar = () => {
  return (
    <div className='main-colored-container'>
 <div className='colored-navbar'>
    {/* <h1>Hola</h1> */}

<div className='colored-navbar--container paragraphNormal'>
<div className='colored-navbar--logo_container'>
          <img src={logo} id="logo" />
        </div>

        <div className='colored-navbar--container__links-container'>
          <p>Home</p>
          <p>About us</p>
          <p>Our Services</p>
          <p>Our rig</p>
          <p>QHSE</p>
        </div>


        <div className='colored-navbar--container__button-container'>
          Contact Us
        </div>

  

</div>

    </div>

    </div>
   
  )
}

export default ColoredNavbar