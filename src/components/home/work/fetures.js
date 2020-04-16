import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import chevron from "../../../images/icons/chevronright.png"
export default function Features({
  eng_img,
  eng_tile,
  eng_des,
  eng_link,
  link,
}) {
  return (
    <div className="Features">
      <Link to={link}>
        {" "}
        <Img fluid={eng_img} alt="" />
      </Link>
      <Link to={link}>
        <h4>{eng_tile}</h4>
      </Link>
      <div className="autocontent">
        <p>{eng_des}</p>
        <Link to={link}>
          {eng_link}
          <img src={chevron} className="arrow" />
        </Link>
      </div>
    </div>
  )
}
