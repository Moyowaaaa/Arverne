import React, { useEffect, useState } from 'react'
import logo from '../assets/images/Logo.svg'
import blackLogo from '../assets/images/footerLogo.svg'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()
  const [scrolled,setIsScrolled] = useState(false)
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goHome = () => {
    document.querySelector("#home")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  const goToAboutUs = () => {

    setTimeout(() => {
      document.querySelector("#aboutPage")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  };

  const goToServices = () => {
    setTimeout(() => {
      document.querySelector("#services")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  }

  const goToQhse = () => {
    navigate('/qhse')
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



  // const scrollToContactUs = () => {
  //   setOpenMenu(false);
  //   document.querySelector("#contactUs")?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div className={`navbar ${scrolled ? 'isScrolled': ''}`}>
        {/* <h1>Hola</h1> */}

    <div className='navbar--container paragraphNormal'>
    <div className='navbar--logo_container'>
              <img src={scrolled ? blackLogo : logo} id="logo" />
            </div>

            <div className='navbar--container__links-container'>
              <p onClick={() => goHome()}>Home</p>
              <p onClick={() => goToAboutUs()}>About us</p>
              <p onClick={() => goToServices()}>Our Services</p>
              <p >Our rig</p>
              <p onClick={() => goToQhse()}>QHSE</p>
            </div>


            <div 
            onClick={() => goToContactUs()}
            className='navbar--container__button-container'>
              Contact Us
            </div>

      

</div>

        </div>
  )
}

export default Navbar