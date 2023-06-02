import React from 'react'
import footerLogo from '../assets/images/footerLogo.svg'


const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <>

    <div className='ContactSection'>

    <div className='ContactSection--container'>

        <h1 className='titleHeavy'>Let’s collaborate; connect with us Today!</h1>

        <div className='ContactSection--container__inputform-container'>
            <div>
                <input type="text" placeholder='Full name' />
            </div>
            <div>
                <input type="text" placeholder='Email' />
            </div>

            </div>

            <textarea className='ContactSection--container__textArea' placeholder='Your Message'></textarea>

            <button className='paragraphNormal'>Contact us</button>
</div>
    </div>

    <div className='footerSection'>
    <div className='footerSection--container'>

    <div className='footerSection--container__subContainer'>

    <div className='footerSection--container__subContainer--top'>

        <div>
            <img src={footerLogo} />
        </div>

        <div className='contactLinks'>
           <h1 className='paragraphExtra'>Contacts</h1>
           <p className='paragraphNormal'>info@arvernedrilling.energy</p>
           <p className='paragraphNormal'>080-090-0990</p>
        </div>

        <div className='quickLinks'>
        <h1 className='paragraphExtra'>Quick Links</h1>
           <p className='paragraphNormal'>About Us</p>
           <p className='paragraphNormal'>Our services</p>
           <p className='paragraphNormal'>Our rigs</p>

        </div>

</div>

<div className='foot paragraphNormal'>
Copyright © {currentYear} by Arverne Drilling. All rights reserved.
</div>
</div>
</div>
    </div>
    
    </>
  )
}

export default Footer