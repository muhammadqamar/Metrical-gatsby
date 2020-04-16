import React from "react"
import "../experience/assets/experience.scss"
import Header from "../experience/experience_header"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function  Metrical(){

return(

<div className="Experience Metrical">


    <BackgroundSectionExp />
          
    </div>
    )
} 


const BackgroundSectionExp = ({ className }) =>{

 return(

    
    <StaticQuery
      query={graphql`
        query {
          banner: file(relativePath: { eq: "experience_banner.png" }) {
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

        return (
<>
<div className="relativepath">
<Img fluid={ data.banner.childImageSharp.fluid} src="" />
<Header />
</div>
<div className="box">
<h1>CUSTOMER STORIES
    </h1>
    <ul>
        <li><a href="Anatomie-Metrical-Case-Study-20190710.pdf" download="">Anatomie case study</a></li>
        <li><a href="Anatomie-Metrical-Case-Study-20190710.pdf" download="">S9 case study</a> </li>
        <li><a href="Anatomie-Metrical-Case-Study-20190710.pdf" download="">BOPIS case study</a></li>
        <li><a href="/Anatomie-Metrical-Case-Study-20190710.pdf" download="">JCP (if Approved)</a></li>
    </ul>
        
   
    </div>
   
 

    <div className="box">

    <h1>SIMPLE INTEGRATION</h1>
    <p>With built-in APIs and integration support for all of the leading e-commerce platforms, you can get up and running in hours, not weeks. Metrical runs Shopify, Magento, Salesforce CommerceCloud, Oracle, BigCommerce, and more. (include logos at the bottom)</p>

    </div>
    </>

        
          
        )
      }}
    />
  )
    }

