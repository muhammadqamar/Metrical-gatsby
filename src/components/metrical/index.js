import React from "react";
import "../experience/assets/experience.scss";
import Header from "../experience/experience_header";
import { graphql, StaticQuery } from "gatsby";

import { Row, Col } from "react-bootstrap";
import CaseStudy from "../home/case_study.js";
import Img from "gatsby-image";
import Slider from "../home/slider.js";

export default function Metrical() {
  return (
    <div className="Experience Metrical">
      <BackgroundSectionExp />
    </div>
  );
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
          big: file(relativePath: { eq: "big.jpg" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          mag: file(relativePath: { eq: "magento.jpg" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          oracle: file(relativePath: { eq: "oracle.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          sales: file(relativePath: { eq: "sales.png" }) {
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
                  boosting_revenu_description_bold_text
                  boosting_revenu_description
                  boosting_revenu_title
                  boosting_revenu_link_text
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        var content1 = data.allMarkdownRemark.edges.filter(
          (data) => data.node.frontmatter.path === "/why_metrical"
        );
        var content2 = data.allMarkdownRemark.edges.filter(
          (data) => data.node.frontmatter.path === "/homepage"
        );
        var content = content1[0].node.frontmatter;
        var contentCase = content2[0].node.frontmatter;

        return (
          <>
            <div className="relativepath">
              <Img fluid={data.banner.childImageSharp.fluid} src="" />
              <Header />
            </div>
            <div className="box">
              <h1>{content.simple_integeration_title}</h1>
              <p>{content.simple_integeration_description}</p>
            </div>

            <div className="logos metrical">
              <Row>
                <Col xs={6} md={3}>
                  <Img fluid={data.big.childImageSharp.fluid} />
                </Col>
                <Col xs={6} md={3} className="check even">
                  <Img fluid={data.mag.childImageSharp.fluid} />
                </Col>
                <Col xs={6} md={3}>
                  <Img fluid={data.oracle.childImageSharp.fluid} />
                </Col>
                <Col xs={6} md={3}>
                  <Img fluid={data.sales.childImageSharp.fluid} />
                </Col>
              </Row>
            </div>
            <div className="box check">
              <h1>CASE STUDIES</h1>
            </div>
            <div className="Home">
              <Slider />
            </div>
          </>
        );
      }}
    />
  );
};
