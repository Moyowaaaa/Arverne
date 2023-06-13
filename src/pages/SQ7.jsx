import React, { useEffect } from 'react'
import PageContentLayout from '../layouts/pageContent'
import sk7details from '../assets/images/sk7details.svg'

const SQ7 = () => {

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
        <div className='sk7page' id="skPage">
        <img src={sk7details} alt="rig sk11"/>

        </div>
    </PageContentLayout>
    </>
  )
}

export default SQ7