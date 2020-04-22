import React from "react";
import Layout from "../components/layout/.";
import SEO from "../components/layout/seo";
import Contacts from "../components/contacts/.";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Contact(props) {
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Home" />
      <Contacts />
    </Layout>
  );
}
