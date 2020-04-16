import React from "react"
import "./assets/solutions.scss"
import Header from "./header_solution"
import Three from "./three_ways"
import SubMenu from "../layout/submenu"
import { graphql,useStaticQuery } from "gatsby"

export default function  Solutions(){
// markdown data 
const query =useStaticQuery(graphql`
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          soution_header_button_text
          soution_header_title
          rasing_conversion_description
          rasing_conversion_link_text
          rasing_conversion_title
          deeper_insight_link_text
          deeper_insight_description
          deeper_insight_title
          better_experience_link_text
          better_experience_description
          better_experience_title
        }
      }
    }
  }
}
`)


var content1= query.allMarkdownRemark.edges.filter(data=>data.node.frontmatter.path=="/solutions")
var content= content1[0].node.frontmatter


return(

<div className="Solutions">
  <SubMenu />
  <Header title={content.soution_header_title} btn={content.soution_header_button_text} />
  <Three
  
  conv_title ={content.rasing_conversion_title}
  conv_des ={content.rasing_conversion_description}
  conv_link ={content.rasing_conversion_link_text}
  
  ins_title ={content.deeper_insight_title}
  ins_des ={ content.deeper_insight_description}
  ins_link ={ content.deeper_insight_link_text}
  
  exp_title ={content.better_experience_title} 
  exp_des ={content.better_experience_description}
  exp_link ={content.better_experience_link_text}
  
  />
   
           
    </div>
    )
} 

