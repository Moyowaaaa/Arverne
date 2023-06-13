import React from 'react'
import rigSk7 from '../assets/images/rig7.png'
import rigSk11 from '../assets/images/rig11.png'
import { Link } from 'react-router-dom'



const Services = () => {
  return (
   <>
   <section className='ourServices' id="services">

    <div className='ourServices--container'>
    <h1 className='titleSemi'>Our Services</h1>


<p className='paragraphNormal'>Our services include but are not limited to the provision of Workover rigs. Workover rigs, also known as service rigs or pulling units, are mobile pieces of equipment designed to perform maintenance, repair, and intervention operations on oil and gas wells. </p>
<p className='paragraphNormal'>Workover rigs are typically used to extend the life of a producing well, restore production levels, or decommission a well that has reached the end of its productive life. They can also be used for “invasive” services like wireline or snubbing (borehole assembly) once the wells have been killed.</p>
    
    <div className='rigs-container' id="ourRig">
    <div className='rigs-container--imageContainer'>
    <Link to={'/sk7'}>
    <img src={rigSk7} />
    <div className='rigs-container--textContainer paragraphMedium'>
    RIG SK 7
    </div>

    <div className="overlay">
                    <div className="w-full  h-[3rem] flex justify-center items-center text-sm">
                      <h1 className="paragraphMedium">RIG SK7</h1>
                    </div>

                    <div className="text-[#8c8c8c] p-2 text-center paragraph">
                      Hola
                    </div>
                  </div>
                  </Link>

    </div>

    
    <div className='rigs-container--imageContainer'>
    <Link to={'/sk11'}>

    <img src={rigSk11} />

    <div className='rigs-container--textContainer paragraphMedium'>
    RIG SK 11
</div>
</Link>
  
    </div>
        
   
       
    </div>
    </div>




   </section>
   
   </>
  )
}

export default Services