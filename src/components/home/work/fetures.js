import React from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"
import chevron from "../../../images/icons/chevronright.png"
export default function  Features({
    eng_img,
eng_tile,
eng_des,
eng_link,

}){

  
    return(

<div className="Features">
<Img fluid={eng_img} alt="" />
    <h4>{eng_tile}</h4>
    <div className="autocontent">
  <p>{eng_des}</p>
  <Link to="">{eng_link}
  <img src={chevron} className="arrow" />
  </Link>
  </div>

           
    </div>
    )
} 

