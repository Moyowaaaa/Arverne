import React, { useEffect } from 'react'
import logo from '../assets/images/Logo.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import blackLogo from '../assets/images/footerLogo.svg'




const ColoredNavbar = () => {
  const navigate = useNavigate()
  const [scrolled,setIsScrolled] = useState(false)
  const {pathname} = useLocation()
  const [openMenu,setOpenMenu] = useState(false)

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
    navigate('/')
    setTimeout(() => {
      document.querySelector("#home")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  }

  const goToAboutUs = () => {
    navigate('/')
    setTimeout(() => {
      document.querySelector("#aboutPage")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  };

  const goToOurRig = () => {
    setOpenMenu(false)
    navigate('/')
    setTimeout(() => {
      document.querySelector("#ourRig")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  }

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
        <p className={`link ${pathname === '' ? 'activeLink' : ''}`} onClick={() => goHome()}>Home</p>
              <p className={`link`} onClick={() => goToAboutUs()}>About us</p>
              <p className={`link`} onClick={() => goToServices()}>Our Services</p>
              <p className={`link`} onClick={() => goToOurRig()}>Our rig</p>
              <p className={`link ${pathname === '/qhse' ? 'activelink' : ''}`} onClick={() => goToQhse()}>QHSE</p>
            </div>


        <div
        onClick={() => goToContactUs()}
        className='colored-navbar--container__button-container btn-effect'>
          Contact Us
        </div>

  

</div>

    </div>
    <div
              className="hamburger-container w-[2rem]  z-[200] lg:hidden"
              onClick={() => setOpenMenu(true)}
            >
              <svg
                viewBox="0 0 12 10"
                className={ "hamburger"}
              >
                <path d="M10,2 L2,2" className="bar-1"></path>
                <path d="M2,5 L10,5" className="bar-2"></path>
                <path d="M10,8 L2,8" className="bar-3"></path>
              </svg>
            </div>


            <div
        className={`  fixed z-[5000]  left-0 bottom-0 w-full bg-[white] p-8 h-screen flex flex-col gap-10 text-4xl ease-in-out duration-700 ${
          openMenu ? " translate-x-0" : " translate-x-[-150%]"
        }`}
      >
        <div className="flex justify-between text-black">
          <img
            src={blackLogo}
            id="logo"
            alt="logo"
            onClick={() => goHome()}
          />

          <div onClick={() => setOpenMenu(false)}>X</div>
        </div>

        <div className="h-full flex w-full  flex-col gap-6 text-2xl text-[black]">

        <div className={`link ${pathname === '/' ? 'activelink' : ''}`}  onClick={() => goHome()}>
                Home
              </div>



          <div onClick={() => goToAboutUs()}   className={`link`}>
            About us
          </div>

          <div onClick={() => goToServices()}  className={`link`}>
            Our services
          </div>


          <div
            className={`link`}
            onClick={() => goToOurRig()}
          >
            Our rig
          </div>

          <div
                    className={`link ${pathname === '/qhse' ? 'activelink' : ''}`}
                    onClick={() => goToQhse()}
                  >
                    QHSE
                  </div>


                  <div className=''
                      onClick={() => goToContactUs()}
                  >Contact Us</div>
        </div>
      </div>

    </div>
   
  )
}

export default ColoredNavbar