import React from "react"
import "./assets/contact.scss"

import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import {Row,Col,Form,Button} from "react-bootstrap"

export default function  Contactus(){

    return(

<div className="Contactus">

<div className="content">
    <Contactuspage />
    </div>
  

   



   

           
    </div>
    )
} 


const Contactuspage = ({ className }) =>{
       var title= "contact us" 
 return(

    
    <StaticQuery
      query={graphql`
        query {
        

          map: file(relativePath: { eq: "map.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.map.childImageSharp.fluid
       
    

     return(
         <>
      <h1>{title}</h1>
      <Row>
          
          <Col xs={12} sm={12} md={6}>

          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Company</Form.Label>
    <Form.Control type="text" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email"  />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="8"  />
  </Form.Group>

  
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

              </Col>

              <Col xs={12} sm={12} md={6}>
              <Img fluid={imageData} />
              </Col>
        
         </Row>
         </>
     )
          
        
      }}
    />
  )
    }

