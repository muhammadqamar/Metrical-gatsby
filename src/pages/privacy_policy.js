import React from "react";
import Layout from "../components/layout";
import SEO from "../components/layout/seo";
import Privacies from "../components/privacy/.";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Privacy(props) {
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Home" />
      <Privacies />
    </Layout>
  );
}
