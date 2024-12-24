import React from 'react'
import Navber from '../components/shared/Navber'
import Footer from '../components/shared/Footer'

const MainLayout = ({children}) => {
  return (
    <div>
        <Navber />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout