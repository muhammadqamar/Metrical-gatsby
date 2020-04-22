import React from "react";
import "../experience/assets/experience.scss";

import { graphql, StaticQuery } from "gatsby";

import renderHTML from "react-render-html";
export default function Private() {
  return (
    <div className="Experience">
      <BackgroundSectionExp />
    </div>
  );
}

const BackgroundSectionExp = ({ className }) => {
  return (
    <StaticQuery
      var
      query={graphql`
        query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                }
                html
              }
            }
          }
        }
      `}
      render={(data) => {
        // Set ImageData.

        var content1 = data.allMarkdownRemark.edges.filter(
          (data) => data.node.frontmatter.path === "/privacy"
        );

        var content = content1[0].node.html;

        return (
          <div className=" privacy">
            <div className="box ">{renderHTML(content)}</div>
          </div>
        );
      }}
    />
  );
};
