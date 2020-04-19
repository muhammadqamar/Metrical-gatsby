import React from "react"
import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import Term from "../components/terms/."
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Terms(props){
 return(
   <Layout location={props.location.pathname}>
    <SEO title="Home" />
    <Term />
    </Layout>
 )
}


