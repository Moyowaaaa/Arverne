import React, { useEffect, useState } from 'react'
import logo from '../assets/images/Logo.svg'
import blackLogo from '../assets/images/footerLogo.svg'
import { useLocation, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()
  const [scrolled,setIsScrolled] = useState(false)
  const {pathname} = useLocation()


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
              <p className={`link ${pathname === '/' ? 'activelink' : ''}`} onClick={() => goHome()}>Home</p>
              <p className={`link`} onClick={() => goToAboutUs()}>About us</p>
              <p className={`link`} onClick={() => goToServices()}>Our Services</p>
              <p className={`link`} >Our rig</p>
              <p className={`link ${pathname === 'qhse' ? 'activelink' : ''}`} onClick={() => goToQhse()}>QHSE</p>
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