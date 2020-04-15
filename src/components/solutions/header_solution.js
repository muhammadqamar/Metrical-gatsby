import React  from "react"
import {Link} from "gatsby"
export default function Header_solutions(){

    var header="THREE ways TO BUILD YOUR REVENUE."
    var buttontext="get a demo"
    return(

        <div className="Header_solutions">
            <div className="content">
            <h1>{header}
</h1>
    <Link>{buttontext}</Link>
            </div>
            </div>
    )
}

