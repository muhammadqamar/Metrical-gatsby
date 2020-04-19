import React,{useEffect, useState} from "react"
import Layout from "../components/layout/."
import SEO from "../components/layout/seo"
import Home from "../components/home/."
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/PulseLoader'
import "../components/assets/layout.scss"
import "../components/assets/font.scss"

export default function Index(props){
  const [loading, isloading]= useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      isloading(false)
    },1000)
  
  },[])
 return(
   <>
   <LoadingOverlay
 
   active={loading}
   text="METRICAL"
   spinner={<BounceLoader color={"#fff"} />}
 
   >

    
   
    </LoadingOverlay>

     {!loading&& <Layout location={props.location.pathname}>
    <SEO title="Home" />
    <Home/>
    </Layout>}  
     </>
)
}


