import React from "react"
import {Link} from "gatsby"

export default function  Case_study(){

   var data={
        title:"BOOSTING REVENUE ON THE FLY",
        button_text:"DOWNLOAD CASE STUDY",
        description:"“We’ve seen a huge jump in our conversion rate and revenue since we implemented Metrical’s solution. I never expected our revenue to increase by over 30%!”"
    }

    return(
        

<div className="Case_study">
            <div className="content">
                <h3>{data.title}</h3>
                <Link to="">{data.button_text}</Link>
                <p>
                    {data.description}
                </p>
                </div>
    </div>
    )
} 

