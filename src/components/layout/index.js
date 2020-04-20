import React from "react"

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
      <div className={"flex-footer "+ location.split("/")[1]}>
      <div className="mian-content-inner">
      {children}
      </div>
     
      <Footer />
      </div>
    </>
  )
}
