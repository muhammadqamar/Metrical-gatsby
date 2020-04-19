import React from "react"
import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import Cookie from "../components/cookies/."
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Cookies(props){
 return(
   <Layout location={props.location.pathname}>
    <SEO title="Home" />
   <Cookie />
    </Layout>
 )
}


