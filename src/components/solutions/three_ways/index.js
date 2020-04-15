import React from "react"

import Way from "./three_ways"
import { graphql, StaticQuery } from "gatsby"
export default function  Three_ways(){

 


    return(

<div className="Three_ways">

 <div className="content">
   <Graphways />
   </div>
   
           
    </div>
    )
} 



const Graphways = ({ className }) =>
{
    var conv_title = "RAISING CONVERSIOn"
  var conv_des = "Metrical’s proprietary, predictive AI model can help you follow customer behavior, but also raise sales. You’ll be able to predict which of your consumers are most likely to abandon your sites and present them with offers in real time. These instantly targeted messages can help connect with customers who need just a little extra incentive. Plus, our AI can also adjust offers on the spot to help maximize your margins."
  var conv_link = "GET BETTER CONVERSIONs"

  var ins_title = "DEEPER INSIGHTS"
  var ins_des = "Metrical can help in the short term, but it’s in the long term where our data and analysis canbe the most helpful. We will provide you with insightst that allow you to make both near and long term decisions on how best to improve your consumers experience which will result in an increase in revenue."
  var ins_link = "GET BETTER INSIGHTS "

  var exp_title = "BETTER EXPERIENCE"
  var exp_des = "There’s more to a site than just sales, it’s the entire experience. Metrical’s intelligent CX surveys, can help you better understand what your customers want or why your consumers are leaving. Whether products are too hard to find or something is out of stock, Metrical AI incorporates this data into the behavioral modeling and factors in the consumer’s experience. This results in messaging that speaks directly to the consumer at that moment they need it most. "
  var exp_link = "TAILOR YOUR EXPERIENCE  "


return (

  
  <StaticQuery
    query={graphql`
      query {
        conversion: file(relativePath: { eq: "solution_conversion.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }


        insights: file(relativePath: { eq: "solution_insight.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        experience: file(relativePath: { eq: "solution_exp.png" }) {
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
          <Way 
          
          title={conv_title}
    des={conv_des}
    linktext={conv_link}

    img={data.conversion.childImageSharp.fluid}
    />
    <Way 
            
            title={ins_title}
        des={ins_des}
        linktext={ins_link}

        img={data.insights.childImageSharp.fluid}
        />


        <Way 
            
        title={exp_title}
        des={exp_des}
        linktext={exp_link}

        img={data.experience.childImageSharp.fluid}
        />
        </>
           
      
      )
    }}
  />
)

}
