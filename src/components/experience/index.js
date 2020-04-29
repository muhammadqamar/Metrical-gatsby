import React from "react";
import "./assets/experience.scss";
import Header from "./experience_header";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function Experien() {
  return (
    <div className="Experience">
      <BackgroundSectionExp />
    </div>
  );
}

const BackgroundSectionExp = ({ className }) => {

  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  consumer_happy_title
            consumer_happy_description
            consumer_leaving_description
            consumer_leaving_tite
            path
                }
              }
            }
          }
          desktop: file(relativePath: { eq: "experience_bg.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }

          banner: file(relativePath: { eq: "experience_banner.jpg" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={(data) => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid;
        var content1 = data.allMarkdownRemark.edges.filter(
          (data) => data.node.frontmatter.path === "/experience"
        );
        var content = content1[0].node.frontmatter;
        return (
          <>
            <div className="relativepath">
              <Img fluid={data.banner.childImageSharp.fluid} src="" />
              <Header />
            </div>
            <div className="box">
              <h1>{content.consumer_leaving_title}</h1>
              <p>{content.consumer_leaving_description}</p>
            </div>

            <Img fluid={imageData} src="" />

            <div className="box">
              <h1>{content.consumer_happy_title}</h1>
              <p>{content.consumer_happy_description}</p>
            </div>
          </>
        );
      }}
    />
  );
};
