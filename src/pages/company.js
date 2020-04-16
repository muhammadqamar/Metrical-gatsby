import React from "react"
import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import Companies from "../components/companies/index"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Company(props){
 return(
   <Layout location={props.location.pathname}>
    <SEO title="Conversions" />
    <Companies/>
    </Layout>
 )
}


