import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Featured from "./fetures"

import { Row, Col } from "react-bootstrap"

const Work = ({
  title,
  description,
  eng_tile,
  eng_des,
  eng_link,
  ins_tile,
  ins_des,
  ins_link,
  exp_tile,
  exp_des,
  exp_link,
}) => {
  return (
    <HowitWorks
      title={title}
      description={description}
      eng_tile={eng_tile}
      eng_des={eng_des}
      eng_link={eng_link}
      ins_tile={ins_tile}
      ins_des={ins_des}
      ins_link={ins_link}
      exp_tile={exp_tile}
      exp_des={exp_des}
      exp_link={exp_link}
    />
  )
}
export default Work

const HowitWorks = ({
  title,
  description,
  eng_tile,
  eng_des,
  eng_link,
  ins_tile,
  ins_des,
  ins_link,
  exp_tile,
  exp_des,
  exp_link,
}) => {
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
      render={(data) => {
        // Set ImageData.
        const imageData = data.laptop.childImageSharp.fluid
        return (
          <div class="Work">
            <div class="content">
              <Row>
                <Col xs={12}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Img className="laptop" fluid={imageData} alt="" />
                </Col>
              </Row>
              <div className="featured">
                <Row>
                  <Col sm={12} md={12} lg={4}>
                    <Featured
                      eng_img={data.engajment.childImageSharp.fluid}
                      eng_tile={eng_tile}
                      eng_des={eng_des}
                      eng_link={eng_link}
                      link="conversions"
                    />
                  </Col>
                  <Col sm={12} md={12} lg={4}>
                    <Featured
                      eng_img={data.insights.childImageSharp.fluid}
                      eng_tile={ins_tile}
                      eng_des={ins_des}
                      eng_link={ins_link}
                      link="insights"
                    />
                  </Col>
                  <Col sm={12} md={12} lg={4}>
                    <Featured
                      eng_img={data.experience.childImageSharp.fluid}
                      eng_tile={exp_tile}
                      eng_des={exp_des}
                      eng_link={exp_link}
                      link="experience"
                    />
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
