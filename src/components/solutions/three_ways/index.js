import React from "react"

import Way from "./three_ways"
import { graphql, StaticQuery } from "gatsby"
export default function  Three_ways({
  conv_title, 
  conv_des, 
  conv_link, 
  
  ins_title ,
  ins_des ,
  ins_link ,
  
  exp_title , 
  exp_des ,
  exp_link ,

}){
 
return(
<div className="Three_ways">
<div className="content">
   <Graphways
   conv_title ={conv_title}
   conv_des ={conv_des}
   conv_link ={conv_link}
   
   ins_title ={ins_title}
   ins_des ={ ins_des}
   ins_link ={ ins_link}
   
   exp_title ={exp_title} 
   exp_des ={exp_des}
   exp_link ={exp_link}
   
   />
  </div>
</div>
    )
} 



const Graphways = ({ 
  conv_title, 
  conv_des, 
  conv_link, 
  
  ins_title ,
  ins_des ,
  ins_link ,
  
  exp_title , 
  exp_des ,
  exp_link ,


 }) =>
{
 


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
