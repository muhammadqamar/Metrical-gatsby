import React from "react";
import Layout from "../components/layout/.";
import SEO from "../components/layout/seo";
import Solutionss from "../components/solutions/index";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Solution(props) {
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Home" />
      <Solutionss location={props.location.pathname} />
    </Layout>
  );
}
