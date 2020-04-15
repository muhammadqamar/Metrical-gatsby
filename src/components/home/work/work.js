import React from "react"

import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Featured from "./fetures"
import {Row, Col} from "react-bootstrap"



const Work = () => {

  return (
      <>
    <HowitWorks  />
  
    </>
     
 
  )
}

export default Work



const HowitWorks = ({ className }) =>
{
    var content={
        title:"HOW IT WORKS",
        description:"Our AI model helps predict before consumers leave your sites and automatically engages them in real time to convert them into buyers."
      }

   
      var eng_tile ="EFFECTIVE ENGAGEMENT"
      var  eng_des = "Metrical’s solutions serve targeted messaging that has the highest probability of converting and maximizing your margins."
      var  eng_link =  "VIEW SOLUTIONS "
      var ins_tile = "DEEPER INSIGHTS"
      var ins_des ="Metrical uses intelligent customer experience surveys to better understand your website visitors."
      var ins_link = "EXPLORE INSIGHTS "
      var exp_tile="OPTIMIZED EXPERIENCE"
      var  exp_des="Consumer’s behavior and interactions are measured to help you make decisions on how to improve your consumers’ experiences."
      var exp_link = "STREAMLINE YOUR SITE "

return (

  
  <StaticQuery
    query={graphql`
      query {
        laptop: file(relativePath: { eq: "work.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        laptopbg: file(relativePath: { eq: "laptoplayer.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        engajment: file(relativePath: { eq: "engajment.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        insights: file(relativePath: { eq: "insight.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        experience: file(relativePath: { eq: "experience.png" }) {
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
      const imageData  = data.laptop.childImageSharp.fluid
      return (
      
         <div class="Work">
           <div class="content">
             <Row >
         <Col xs={12}>
      <h3>{content.title}</h3>
             <p>{content.description}</p>
             <Img className="laptop" fluid={imageData} alt="" />
             </Col>
             </Row>
         <div className="featured">
           <Row>
         <Col sm={12} md={4}>
         <Featured eng_img={data.engajment.childImageSharp.fluid}
         eng_tile={eng_tile}
         eng_des={ eng_des}
         eng_link={ eng_link}
         
         />
           </Col>
           <Col sm={12} md={4}>
           <Featured eng_img={data.insights.childImageSharp.fluid} 
                 eng_tile={ins_tile}
                 eng_des={ ins_des}
                 eng_link={ins_link}
                 />
           </Col>
           <Col sm={12} md={4}>
           <Featured eng_img={data.experience.childImageSharp.fluid}
           
           eng_tile={exp_tile}
           eng_des={ exp_des}
           eng_link={exp_link}/>
           </Col>
       
           

          
             </Row>
             </div>
             
            </div>
             </div>
    
           
      
      )
    }}
  />
)

}