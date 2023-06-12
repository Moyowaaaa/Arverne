import React, { useEffect, useState } from 'react'
import logo from '../assets/images/Logo.svg'
import blackLogo from '../assets/images/footerLogo.svg'
import { useLocation, useNavigate } from 'react-router-dom'


const Navbar = () => {
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
    setOpenMenu(false)
    document.querySelector("#home")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  const goToAboutUs = () => {
    setOpenMenu(false)

    setTimeout(() => {
      document.querySelector("#aboutPage")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  };

  const goToServices = () => {
    setOpenMenu(false)

    setTimeout(() => {
      document.querySelector("#services")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  }

  const goToQhse = () => {
    setOpenMenu(false)

    navigate('/qhse')
    setTimeout(() => {
      document.querySelector("#qhse")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  }

  const goToContactUs = () => {
    setOpenMenu(false)

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

<div
              className="hamburger-container w-[2rem]  z-[200] lg:hidden"
              onClick={() => setOpenMenu(true)}
            >
              <svg
                viewBox="0 0 12 10"
                className={scrolled ? "scrolled" : "hamburger"}
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
          
          >
            Our rig
          </div>

          <div
                    className={`link ${pathname === 'qhse' ? 'activelink' : ''}`}
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

export default Navbar