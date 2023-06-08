import React from 'react'
import logo from '../assets/images/Logo.svg'
import { useNavigate } from 'react-router-dom'




const ColoredNavbar = () => {
  const navigate = useNavigate()


  const goHome = () => {
    navigate('/')
    document.querySelector("#home")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  const goToAboutUs = () => {
    navigate('/')
    setTimeout(() => {
      document.querySelector("#aboutPage")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  };

  const goToServices = () => {
    navigate('/')
    setTimeout(() => {
      document.querySelector("#services")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  }

  const goToQhse = () => {
    setTimeout(() => {
      document.querySelector("#qhse")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  }

  const goToContactUs = () => {
    setTimeout(() => {
      document.querySelector("#footer")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  }

  return (
    <div className='main-colored-container'>
 <div className='colored-navbar'>
    {/* <h1>Hola</h1> */}

<div className='colored-navbar--container paragraphNormal'>
<div className='colored-navbar--logo_container'>
          <img src={logo} id="logo" />
        </div>

        <div className='colored-navbar--container__links-container'>
          <p onClick={() =>goHome()}>Home</p>
          <p onClick={() => goToAboutUs()}>About us</p>
          <p onClick={() => goToAboutUs()}>Our Services</p>
          <p>Our rig</p>
          <p onClick={() => goToQhse()}>QHSE</p>
        </div>


        <div
        onClick={() => goToContactUs()}
        className='colored-navbar--container__button-container'>
          Contact Us
        </div>

  

</div>

    </div>

    </div>
   
  )
}

export default ColoredNavbar