import React from "react";
import Layout from "../components/layout";
import SEO from "../components/layout/seo";
import Insight from "../components/insight/index";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Insights(props) {
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Home" />
      <Insight />
    </Layout>
  );
}
