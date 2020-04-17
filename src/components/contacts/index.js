import React, { useState } from "react"
import "./assets/contact.scss"
import GoogleMapReact from "google-map-react"

import { Row, Col, Form, Button } from "react-bootstrap"

const AnyReactComponent = ({ text }) => <div>{text}</div>
export default function Contactus() {
  const [name, setname] = useState("")
  const [company, setcompany] = useState("")
  const [email, setemail] = useState("")
  const [message, setmesage] = useState("")

  const senddata = () => {}
  var defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }
  return (
    <div className="Contactus">
      <div className="content">
        <h1>Contact US</h1>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value)
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  value={company}
                  onChange={(e) => {
                    setcompany(e.target.value)
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value)
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="8"
                  value={message}
                  onChange={(e) => {
                    setmesage(e.target.value)
                  }}
                />
              </Form.Group>

              <Button variant="primary" onclick={senddata}>
                Submit
              </Button>
            </Form>
          </Col>

          <Col xs={12} sm={12} md={6}>
            <div className="mapsize">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
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
