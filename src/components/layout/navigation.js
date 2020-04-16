import React from "react"
import {Navbar, Nav} from "react-bootstrap"
import logo from "../../images/logo/logo.png"
import {Link} from "gatsby"
import Demo from "./demo"

export default function  Navigation({location}){

   
var links=[{
name:"solutions",
link:"solutions"

},
{
name:"why metrical",
link:"why_metrical"

},
{
name:"company",
link:"company"

},
{
name:"contact",
link:"contact"

} ,  
{
name:"Chat",
link:"chat"

} , 
{
name:"demo",
link:"demo"

} , 

]
return(

<div className="Navigation">
<div className="Content">
<Navbar expand="lg">
<Navbar.Brand href="#home"><Link to="./"><img src={logo}></img></Link></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
{links.map(data=>{

return(  
<>
{
data.link==="demo"?<Demo text={"DEMO"} /> :<Link to={"./"+data.link} 
id={ location.includes("/"+data.link)?"active":null}

className={data.link=="chat"?"chat-button":null

}>{data.name}</Link> 
} 
</>
)
})}

</Nav>

</Navbar.Collapse>
<Demo  text={"DEMO"}  />

</Navbar>
</div>
</div>
)

}