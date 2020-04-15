import React from "react"

import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Addon from "./add_on"

const Header = () => {

  return (
    <BackgroundSection  />
     
 
  )
}

export default Header



const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "HERO.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
        
          fluid={imageData}
          backgroundColor={`#fff`}
        >
             <div className="contentinner">
              <h1>Artificial Intelligence.</h1>
              <h1>Real revenue</h1><br />
              <h2>Smart targeting and real-time customer</h2>
              <h2>engagement give you edge you need.</h2>
              <Addon />
              </div>
           
        </BackgroundImage>
      )
    }}
  />
)

