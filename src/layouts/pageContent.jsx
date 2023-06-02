import React from 'react'
import Footer from '../components/Footer'
import ColoredNavbar from '../components/ColoredNavbar'

const PageContentLayout = ({children}) => {
  return (
 
        <>
        <ColoredNavbar/>
        {children}
        <Footer />  
        </>
      
        
      
  )
}

export default PageContentLayout