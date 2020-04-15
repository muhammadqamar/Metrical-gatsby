import React from "react"
import Layout from "../components/layout/."
import SEO from "../components/layout/seo"
import Home from "../components/home/."
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Index(){
 return(
    <Layout>
    <SEO title="Home" />
    <Home/>
    </Layout>
 )
}


