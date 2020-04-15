import React, { Component } from "react"
import {Navbar, Nav} from "react-bootstrap"
import logo from "../../images/logo/logo.png"
import {Link} from "gatsby"


export default function  Navigation(){


  var links=[{
    name:"soltions",
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
  <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    {links.map(data=>{

      return(   

      <Link to={data.link} className={data.link=="chat"?"chat-button":null}
      id={data.link=="demo"?"demo-button":null}
      >{data.name}</Link> 
         
         )
    })}
  
   

    </Nav>
  
  </Navbar.Collapse>
  {links.map(data=>{

return(   
  <>
{data.link=='demo'?
<Link to={data.link} 
id={"demo-button"}
>{data.name}</Link> 
:null}
</>

   
   )
})}
</Navbar>
        </div>
      </div>
  )
  
}