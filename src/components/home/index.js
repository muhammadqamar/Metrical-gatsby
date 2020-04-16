import React from "react"
import CaseStudy from "./case_study"
import Header from "./header"
import { graphql,useStaticQuery } from "gatsby"
import Works from "./work/work"
import Slider from "./slider"
import "./assets/home.scss"


export default function  Home(){

// markdown data 
 const query =useStaticQuery(graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            homePage_Banner_heading_one
            homePage_Banner_heading_two
            get_demo_title
            get_demo_description
            watch_video_title
            watch_video_description
            view_Case_title
            view_Case_description
            how_it_work_title
            how_it_work_description
            effective_engajment_title
            effective_engajment_description
            deeper_insights_title
            deeper_insights_description
            homePage_Banner_subheading_one
            homePage_Banner_subheading_two
            effective_engajment_link_text
            deeper_insights_link_text
            optimzed_experience_title
            boosting_revenu_link_text
            optimzed_experience_description
            optimzed_experience_link_text
            boosting_revenu_title
            boosting_revenu_description
          }
        }
      }
    }
  }
`)
var content1= query.allMarkdownRemark.edges.filter(data=>data.node.frontmatter.path=="/homepage")
var content= content1[0].node.frontmatter


return(
<div className="Home">
    <div className="HEADER">
    <Header 
      heading1={content.homePage_Banner_heading_one}
      heading2={content.homePage_Banner_heading_two}
      sub_heading1={content.homePage_Banner_subheading_one}
      sub_heading2={content.homePage_Banner_subheading_two}
      data_demo_title={content.get_demo_title}
      data_demo_description ={content.get_demo_description}
      data_video_title={content.watch_video_title}
      data_video_description={content.watch_video_description}
      data_case_study_title={content.view_Case_title}
      data_case_study_description={content.view_Case_description}
      
      />
    </div>
    <Works
    title={content.how_it_work_title}
    description={content.how_it_work_description}
    eng_tile={content.effective_engajment_title}
    eng_des={content.effective_engajment_description}
    eng_link={content.effective_engajment_link_text}
    ins_tile={content.deeper_insights_title}
    ins_des={content.deeper_insights_description}
    ins_link={content.deeper_insights_link_text}
    exp_tile={content.optimzed_experience_title}
    exp_des={content.optimzed_experience_description}
    exp_link={content.optimzed_experience_link_text}
    />
    <Slider />
    <CaseStudy
        title={content.boosting_revenu_title}
        description ={content.boosting_revenu_description}
        button_text={content.boosting_revenu_link_text}
    
    />
</div>
    )
} 

