import React from "react"
import "../experience/assets/experience.scss"
import Header from "../experience/experience_header"
import { graphql, StaticQuery } from "gatsby"
import pdf1 from "../assets/Anatomie-Metrical-Case-Study-20190710.pdf"
import pdf2 from "../assets/HERO - Metrical Case Study - Sector9_2 20200221.pdf"
import pdf3 from "../assets/Big Retailer Anonymous - Metrical Case Study.pdf"
import pdf4 from "../assets/Metrical Case Study - Sector9.pdf"

import Img from "gatsby-image"

export default function Metrical() {
  return (
    <div className="Experience Metrical">
      <BackgroundSectionExp />
    </div>
  )
}

const BackgroundSectionExp = ({ className }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          banner: file(relativePath: { eq: "experience_banner.jpg" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                  customer_stories_four
                  customer_stories_one
                  customer_stories_three
                  customer_stories_title
                  customer_stories_two
                  simple_integeration_description
                  simple_integeration_title
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        var content1 = data.allMarkdownRemark.edges.filter(
          (data) => data.node.frontmatter.path === "/why_metrical"
        )
        var content = content1[0].node.frontmatter

        return (
          <>
            <div className="relativepath">
              <Img fluid={data.banner.childImageSharp.fluid} src="" />
              <Header />
            </div>
            <div className="box">
              <h1>{content.customer_stories_title}</h1>
              <ul>
                <li>
                  <a
                    href={pdf1}
                    download
                  >
                    {content.customer_stories_one}
                  </a>
                </li>
                <li>
                  <a
                         href={pdf2}
                         download
                  >
                    {content.customer_stories_two}
                  </a>{" "}
                </li>
                <li>
                  <a
                          href={pdf3}
                          download
                  >
                    {content.customer_stories_three}
                  </a>
                </li>
                <li>
                  <a
                           href={pdf4}
                           download
                  >
                    {content.customer_stories_four}
                  </a>
                </li>
              </ul>
            </div>

            <div className="box">
              <h1>{content.simple_integeration_title}</h1>
              <p>{content.simple_integeration_description}</p>
            </div>
          </>
        )
      }}
    />
  )
}
