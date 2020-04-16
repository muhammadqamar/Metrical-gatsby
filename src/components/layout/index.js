import React from "react"
import "../assets/layout.scss"
import "../assets/font.scss"
import Navigation from "./navigation"
import Navigation_sub from "./navigation_sub"
import Footer from "./footer"
import "bootstrap/dist/css/bootstrap.min.css"
export default function Layout({ children, location = "" }) {
  return (
    <>
      {location.includes("/experience") ? (
        <Navigation_sub location={location} />
      ) : location.includes("/conversions") ? (
        <Navigation_sub location={location} />
      ) : location.includes("/insights") ? (
        <Navigation_sub location={location} />
      ) : (
        <Navigation location={location} />
      )}

      {children}
      <Footer />
    </>
  )
}
