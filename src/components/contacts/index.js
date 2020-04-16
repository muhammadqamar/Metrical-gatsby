import React from "react"
import "./assets/contact.scss"
import GoogleMapReact from 'google-map-react';

import {Row,Col,Form,Button} from "react-bootstrap"
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function  Contactus(){
  var  defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
    return(

<div className="Contactus">

<div className="content">

      <h1>Contact US</h1>
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
              <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ""}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
              </Col>
        
         </Row>
        
    </div>
  

   



   

           
    </div>
    )
} 


