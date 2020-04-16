import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Addon from "./add_on"

const Header = ({
  heading1,
  heading2,
  sub_heading1,
  sub_heading2,
  data_demo_title,
  data_demo_description,
  data_video_title,
  data_video_description,
  data_case_study_title,
  data_case_study_description

}) => {

  return (<BackgroundSection
    heading1={heading1}
    heading2={heading2}
    sub_heading1={sub_heading1}
    sub_heading2={sub_heading2}
    data_demo_title={data_demo_title}
    data_demo_description ={ data_demo_description}
    data_video_title={data_video_title}
    data_video_description={data_video_description}
    data_case_study_title={data_case_study_title}
    data_case_study_description={data_case_study_description}
   
    />)
}
export default Header

const BackgroundSection = ({
  heading1,
  heading2,
  sub_heading1,
  sub_heading2,
  data_demo_title,
  data_demo_description,
  data_video_title,
  data_video_description,
  data_case_study_title,
  data_case_study_description
 }) => (
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

        <h1>{heading1}</h1>
        <h1>{heading2}</h1>
      
        <h2>{sub_heading1}</h2>
        <h2>{sub_heading2}</h2>
    
        <Addon 
         data_demo_title={data_demo_title}
         data_demo_description ={data_demo_description}
         data_video_title={data_video_title}
         data_video_description={data_video_description}
         data_case_study_title={data_case_study_title}
         data_case_study_description={data_case_study_description}
        
        />
        </div>
           
        </BackgroundImage>
      )
    }}
  />
)

