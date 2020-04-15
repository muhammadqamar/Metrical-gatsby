import React from "react"
import "../assets/layout.scss"
import "../assets/font.scss"
import Navigation from "./navigation"
import Footer from "./footer"
import 'bootstrap/dist/css/bootstrap.min.css';
const Layout = ({ children }) => (
    
      <>
      <Navigation />
      {children}
      <Footer />
      </>
   

)

export default Layout
