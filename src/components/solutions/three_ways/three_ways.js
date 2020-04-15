import React from "react"

import chevron from "../../../images/icons/chevronright.png"
import {Link} from "gatsby"
import Img from "gatsby-image"
export default function  each_ways({
    title,
    des,
    linktext,
    img
}){

  
    return(

<div className="each_ways">
    <div className="cont">
<h2>{title}</h2>
<p>{des}</p>
            <Link>
            {linktext}
            <img src={chevron} className="arrow" />
            </Link>
        </div>
        <div className="pic">
        <Img fluid={img} />
            </div>

 
   
           
    </div>
    )
} 

