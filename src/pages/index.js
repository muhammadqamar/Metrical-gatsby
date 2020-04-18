import React,{useEffect, useState} from "react"
import Layout from "../components/layout/."
import SEO from "../components/layout/seo"
import Home from "../components/home/."
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/PulseLoader'

export default function Index(props){
  const [loadnig, isloading]= useState(true)
  useEffect(()=>{
    isloading(false)
  },[])
 return(
   <LoadingOverlay
   active={loadnig}
   spinner={<BounceLoader color={"#fff"} />}
 
   >

    
    <Layout location={props.location.pathname}>
    <SEO title="Home" />
    <Home/>
    </Layout>
    </LoadingOverlay>
 )
}


