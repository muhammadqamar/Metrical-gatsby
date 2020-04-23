import React from "react";
import "../experience/assets/experience.scss";
import Header from "../experience/experience_header";
import { graphql, StaticQuery } from "gatsby";
import pdf1 from "../assets/Anatomie_Metrical_Case_Study_20190710.pdf";
import pdf2 from "../assets/HERO_Metrical_Case_Study_Sector9_2_20200221.pdf";
import pdf3 from "../assets/Big_Retailer_Anonymous_Metrical_Case_Study.pdf";
import pdf4 from "../assets/Metrical_Case_Study_Sector9.pdf";
import {Row,Col} from "react-bootstrap"

import Img from "gatsby-image";

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
        var content = content1[0].node.frontmatter;

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
                  <a href={pdf1} download>
                    {content.customer_stories_one}
                  </a>
                </li>
                <li>
                  <a href={pdf2} download>
                    {content.customer_stories_two}
                  </a>{" "}
                </li>
                <li>
                  <a href={pdf3} download>
                    {content.customer_stories_three}
                  </a>
                </li>
                <li>
                  <a href={pdf4} download>
                    {content.customer_stories_four}
                  </a>
                </li>
              </ul>
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
              <Col xs={6} md={3}>
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
          </>
        );
      }}
    />
  );
};
