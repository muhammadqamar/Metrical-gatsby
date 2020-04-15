import React from "react"

import CaseStudy from "./case_study"
import Header from "./header"

import Works from "./work/work"
import "./assets/home.scss"
export default function  Home(){

  
    return(

<div className="Home">

    <div className="HEADER">
    <Header />
    </div>

  
    <Works />
    <CaseStudy/>
   
           
    </div>
    )
} 

