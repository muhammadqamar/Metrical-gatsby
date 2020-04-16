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
        <a  href="Anatomie-Metrical-Case-Study-20190710.pdf" download>{button_text}</a>
        <p>
            {description}
        </p>
    </div>
</div>
    )
} 

