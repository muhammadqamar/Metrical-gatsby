import React from "react"
import {Link} from "gatsby"

export default function  Case_study({
    title,
    button_text,
    description,

}){

return(
        
<div className="Case_study">
    <div className="content">
        <h3>{title}</h3>
        <Link to="">{button_text}</Link>
        <p>
            {description}
        </p>
    </div>
</div>
    )
} 

