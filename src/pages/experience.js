import React from "react";
import Layout from "../components/layout/.";
import SEO from "../components/layout/seo";
import Experienced from "../components/experience/.";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Experience(props) {

  return (
    <Layout location={props.location.pathname}>
      <SEO title="Home" />
      <Experienced />
    </Layout>
  );
}
