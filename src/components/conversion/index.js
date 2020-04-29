import React from "react";
import "../experience/assets/experience.scss";
import Header from "../experience/experience_header";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import DEMO from "../layout/demo";

export default function Conversion() {
  return (
    <div className="Experience Conversion">
      <BackgroundSectionExp />
    </div>
  );
}

const BackgroundSectionExp = ({ className }) => {
  return (
    <StaticQuery
      const
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
                  your_consumer_description
                  your_consumer_title
                  path
                  right_onThe_spot_description
                  right_onThe_spot_title
                  right_target_description
                  right_target_title
                  abandoning_consumer_description
                  abandoning_consumer_tite
                  increase_your_conversion_title
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        var content1 = data.allMarkdownRemark.edges.filter(
          (data) => data.node.frontmatter.path === "/conversions"
        );
        var content = content1[0].node.frontmatter;
        return (
          <>
            <div className="relativepath">
              <Img fluid={data.banner.childImageSharp.fluid} src="" />
              <Header />
            </div>
            <div className="box">
              <h1>{content.your_consumer_title}</h1>
              <p>{content.your_consumer_description}</p>
            </div>

            <div className="box">
              <h1>{content.right_onThe_spot_title}</h1>
              <p>{content.right_onThe_spot_description}</p>
            </div>

            <div className="box">
              <h1>{content.right_target_title}</h1>
              <p>{content.right_target_description}</p>
            </div>

            <div className="box">
              <h1>{content.abandoning_consumer_tite}</h1>
              <p>{content.abandoning_consumer_description}</p>
            </div>

            <div className="box">
              <h1>{content.increase_your_conversion_title}</h1>

              <DEMO text="GET A DEMO" />
            </div>
          </>
        );
      }}
    />
  );
};
