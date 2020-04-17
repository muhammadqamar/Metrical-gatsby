import React from "react"
import "../experience/assets/experience.scss"
import Header from "../experience/experience_header"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Companies() {
  return (
    <div className="Experience">
      <BackgroundSectionExp />
    </div>
  )
}

const BackgroundSectionExp = ({ className }) => {
  return (
    <StaticQuery
      var
      query={graphql`
        query {
          banner: file(relativePath: { eq: "experience_banner.jpg" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                  company_description
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        // Set ImageData.

        var content1 = data.allMarkdownRemark.edges.filter(
          (data) => data.node.frontmatter.path === "/company"
        )
        var content = content1[0].node.frontmatter

        return (
          <>
            <div className="relativepath">
              <Img fluid={data.banner.childImageSharp.fluid} src="" />
              <Header />
            </div>
            <div className="box">
              <p>{content.company_description}</p>
            </div>
          </>
        )
      }}
    />
  )
}
