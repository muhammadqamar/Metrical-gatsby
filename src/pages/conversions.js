import React from "react";
import Layout from "../components/layout";
import SEO from "../components/layout/seo";
import Conversion from "../components/conversion/index";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Conversions(props) {
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Conversions" />
      <Conversion />
    </Layout>
  );
}
