import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Headeralt from '../headeralt/Headeralt'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <Headeralt/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout