import React from 'react'
import globalFootprints from '../assets/images/globalFootprints.png'


const GlobalFootprints = () => {
  return (
    <div className='global-footprints'>
    <div className='global-footprints--container'>
    <h1 className='titleSemi'>Global Footprints</h1> 

<p className='paragraphNormal'>The company grew its know-hows in the oil and gas, mining and geothermal fields while accruing references worldwide (France, Europe, Africa, India).</p>


<img src={globalFootprints} />


</div>        
</div>
  )
}

export default GlobalFootprints