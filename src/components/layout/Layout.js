import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import classes from './Layout.module.css'


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout