import React from "react"
import "../experience/assets/experience.scss"
import Header from "../experience/experience_header"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import DEMO from "../layout/demo"

export default function  Conversion(){

    return(

<div className="Experience">


    <BackgroundSectionExp />
  

   



   

           
    </div>
    )
} 


const BackgroundSectionExp = ({ className }) =>{
    var consumer ="LEARN ABOUT YOUR CONSUMERS."
    var cons_happy ="KNOW HOW TO KEEP CONSUMERS HAPPY."
    var cons_happy_info ="Just as important as preventing a consumer from leaving is making sure they come back again and again. The experience data and analytics that Metrical provides enables you to make both near and long-term decisions to build loyal, repeat customers."
    
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
<h1>

LEARN ABOUT YOUR CONSUMERS.
    </h1>
<p>
Metrical AI analyzes your consumers’ behavior patterns on your online sites. This data is used to construct a behavioral model that continuously learns and improves itself.

</p>
   
</div>

<div className="box">
<h1>
IDENTIFY THE RIGHT TARGETS.
    </h1>
<p>
The behavioral model scores and determines which of your consumers are most likely to abandon and signals the conversion engine to engage.

</p>
   
</div>


<div className="box">
<h1>
ENGAGE WITH ABANDONING CONSUMERS.
    </h1>
<p>Once the conversion engine receives a signal of a pending abandonment, it selects targeted messaging that has the highest likelihood of converting the consumer. The conversion engine calculates not only which messages are most effective, but also which will maximize your margins.</p>
   
</div>

<div className="box">
<h1>
CONVERSION, RIGHT ON THE SPOT.
    </h1>
<p>Before consumers can depart they will see compelling messaging that incentivizes them to stay, buy and come back for more.</p>
   
</div>

<div className="box">
<h1>
INCREASE YOUR CONVERSION, INSTANTLY.
    </h1>
  <DEMO text="GET A DEMO" />

   
</div>
   
 

   
    </>

        
          
        )
      }}
    />
  )
    }

