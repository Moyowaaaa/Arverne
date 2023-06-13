import React, { useEffect } from 'react'
import PageContentLayout from '../layouts/pageContent'
import sk11details from '../assets/images/sk11details.svg'


const SQ11 = () => {

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#skPage")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  },[])



  return (
    <>
    <PageContentLayout>
        <div className='sk11page' id="skPage">
        <img src={sk11details} alt="rig sk7"/>

        </div>
    </PageContentLayout>
    </>
  )
}

export default SQ11