import React, { useState } from "react"
import "./assets/contact.scss"
import GoogleMapReact from "google-map-react"
import axios from "axios"
import { Row, Col, Form, Button } from "react-bootstrap"
import Swal from "sweetalert2/dist/sweetalert2.js"
import "sweetalert2/src/sweetalert2.scss"

const AnyReactComponent = ({ text }) => <div>{text}</div>
export default function Contactus() {
  const [name, setname] = useState("")
  const [company, setcompany] = useState("")
  const [email, setemail] = useState("")
  const [message, setmesage] = useState("")

  const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i

    return expression.test(String(email).toLowerCase())
  }
  const senddata = () => {
    if (name === "" || company === "" || email === "" || message === "") {
      Swal.fire({
        text: "KINDLY FILL ALL FIELDS",
        className: "swetalert",
        icon: "warning",
      })
    } else if (!validate(email)) {
      Swal.fire({
        text: "INVALID EMAIL",
        className: "swetalert",
        icon: "warning",
      })
    } else {
      axios

        .post("//localhost:3000/contact/", {
          name: name,
          company: company,
          email: email,
          message: message,
        })
        .then(function (response) {
          console.log(response)
          Swal.fire({
            text: "EMAIL SENT",
            className: "swetalert",
            icon: "success",
          })
        })
        .catch(function (error) {
          console.log(error)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          })
        })
    }
  }

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
                  name="name"
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

              <Button onClick={senddata} variant="primary">
                Submit
              </Button>
            </Form>
          </Col>

          <Col xs={12} sm={12} md={6}>
            <div className="mapsize">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAADhbP8oGYDYI8gde1xf5yBIPxbxQNn3s",
                }}
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
