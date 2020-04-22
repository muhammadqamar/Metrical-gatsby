import React from "react";
import Layout from "../components/layout";
import SEO from "../components/layout/seo";
import WhyMaterial from "../components/metrical/index";
import "bootstrap/dist/css/bootstrap.min.css";
export default function WhyMetrical(props) {
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Conversions" />
      <WhyMaterial />
    </Layout>
  );
}
