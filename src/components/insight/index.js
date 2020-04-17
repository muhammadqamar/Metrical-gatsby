import React from "react"
import "../experience/assets/experience.scss"
import Header from "../experience/experience_header"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Experien() {
  return (
    <div className="Experience">
      <BackgroundSectionExp />
    </div>
  )
}

const BackgroundSectionExp = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          banner: file(relativePath: { eq: "experience_banner.jpg" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                  consumer_happy_description
                  consumer_happy_title
                  what_matters_description
                  what_matters_title
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        var content1 = data.allMarkdownRemark.edges.filter(
          (data) => data.node.frontmatter.path === "/insights"
        )
        var content = content1[0].node.frontmatter

        return (
          <>
            <div className="relativepath">
              <Img fluid={data.banner.childImageSharp.fluid} src="" />
              <Header />
            </div>
            <div className="box">
              <h1>{content.what_matters_title}</h1>
              <p>{content.what_matters_description}</p>
            </div>

            <div className="box">
              <h1>{content.consumer_happy_title}</h1>
              <p>{content.consumer_happy_description}</p>
            </div>
          </>
        )
      }}
    />
  )
}
