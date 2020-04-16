import React from "react"
import {Navbar, Nav} from "react-bootstrap"
import logo from "../../images/logo/logo-white.png"
import {Link} from "gatsby"
import Demo from "./demo"

export default function  Navigation_sub(){
return(

<div className="Navigation Navigation_sub">
<div className="Content">
<Navbar expand="lg">
<Navbar.Brand href="#home"><Link to="./"><img src={logo}></img></Link></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">

<Link to="./conversions">conversions</Link>
<Link to="./insights">insights</Link>
<Link to="./experience">experience</Link>
<Link class="chat-button" to="">Chat</Link>
<Demo  text={"DEMO"}  />

</Nav>

</Navbar.Collapse>

<Demo  text={"DEMO"}  />

</Navbar>
</div>
</div>
  )
  
}