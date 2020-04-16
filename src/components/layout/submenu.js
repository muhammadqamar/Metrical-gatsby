import React from "react"
import {Link} from "gatsby"


export default function SubMenu({location=""}){
return(
 
  <div className="SubMenu">

<Link className={ location.includes("/conversions")?"active_item":null} to="./conversions">conversions</Link>
<Link className={ location.includes("/insights")?"active_item":null} to="./insights">insights</Link>
<Link className={ location.includes("/experience")?"active_item":null} to="./experience">experience</Link>



    </div>
  

)


} 
